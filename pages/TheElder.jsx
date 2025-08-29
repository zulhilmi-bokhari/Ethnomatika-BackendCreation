import React from "react";
import { MessageCircleQuestion } from "lucide-react";
import { ethnicData } from "../data/ethnicData";

export const AskTheElder = ({
  selectedEthnic,
  onNavigate,
  onExhibitSelect,
}) => {
  const elderData = selectedEthnic
    ? ethnicData[selectedEthnic.id]?.elder
    : null;
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const chatEndRef = React.useRef(null);

  React.useEffect(() => {
    setMessages(
      elderData ? [{ type: "text", from: "bot", text: elderData.greeting }] : []
    );
  }, [elderData]);

  React.useEffect(() => {
    if (messages.length > 1) {
      if (chatEndRef.current) {
        const container = chatEndRef.current;
        container.scrollTo({
          top: container.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }, [messages]);

  const handleSend = async (text) => {
    const userMessage = text || input;
    if (!userMessage.trim() || isLoading) return;

    const newMessages = [
      ...messages,
      { type: "text", from: "user", text: userMessage },
    ];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    // Construct a detailed prompt for Gemini
    const exhibitsContext = ethnicData[selectedEthnic.id].exhibits
      .map((e) => `- ${e.title}: ${e.description.substring(0, 100)}...`)
      .join("\n");
    const prompt = `You are a wise elder from the ${selectedEthnic.name} ethnic group in Borneo. Your personality is warm, knowledgeable, and a bit mystical. Answer the user's question based on the following cultural context. If the question mentions a specific exhibit, focus on that. Keep your answers concise and conversational.

        Cultural Context:
        ${exhibitsContext}

        User's question: "${userMessage}"`;

    try {
      let chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
      const payload = { contents: chatHistory };
      const apiKey = "AIzaSyCdjQ0eMtXhEQq5Jl15tTAH2H8zJAcPkho";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const result = await response.json();
      let botResponseText =
        "I'm sorry, my thoughts are clouded right now. Ask me something else.";
      if (result.candidates && result.candidates[0].content.parts[0].text) {
        botResponseText = result.candidates[0].content.parts[0].text;
      }

      setMessages((prev) => [
        ...prev,
        { type: "text", from: "bot", text: botResponseText },
      ]);
    } catch (error) {
      console.error("Error with Elder AI:", error);
      setMessages((prev) => [
        ...prev,
        {
          type: "text",
          from: "bot",
          text: "The spirits are quiet today. I cannot answer.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewInGallery = (exhibitId) => {
    const exhibit = ethnicData[selectedEthnic.id].exhibits.find(
      (ex) => ex.id === exhibitId
    );
    if (exhibit) {
      onExhibitSelect(exhibit);
    }
  };

  if (!selectedEthnic || !elderData) {
    return (
      <div className="p-8 pt-24 min-h-screen bg-[#F4F1DE] flex flex-col justify-center items-center text-center">
        <MessageCircleQuestion className="w-24 h-24 text-stone-400 mb-4" />
        <h2 className="text-3xl font-serif font-bold text-stone-700 mb-2">
          The Elder is Waiting
        </h2>
        <p className="text-lg text-stone-500 mb-6 max-w-md">
          Please select an ethnic group to speak with their virtual elder.
        </p>
        <button
          onClick={() => onNavigate("landing", "elder")}
          className="bg-[#A24936] hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
        >
          Select an Ethnic Group
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 pt-24 min-h-screen bg-[#F4F1DE] flex justify-center items-center">
      <div className="w-full max-w-2xl h-[85vh] bg-white rounded-xl shadow-2xl flex flex-col">
        <div className="p-4 border-b border-stone-200 flex items-center justify-center space-x-4">
          <img
            src={`https://placehold.co/60x60/78716C/FFF?text=${selectedEthnic.name.substring(
              0,
              1
            )}`}
            alt="Elder Avatar"
            className="w-12 h-12 rounded-full"
          />
          <h2 className="text-2xl font-serif font-bold text-stone-800">
            Ask the {selectedEthnic.name} Elder
          </h2>
        </div>
        <div ref={chatEndRef} className="flex-1 p-6 overflow-y-auto bg-stone-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-4 items-end ${msg.from === "bot" ? "justify-start" : "justify-end"
                }`}
            >
              {msg.from === "bot" && (
                <img
                  src={`https://placehold.co/40x40/78716C/FFF?text=${selectedEthnic.name.substring(
                    0,
                    1
                  )}`}
                  alt="bot avatar"
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <div
                className={`rounded-xl p-3 max-w-xs lg:max-w-md ${msg.from === "bot"
                    ? "bg-stone-200 text-stone-800"
                    : "bg-[#A24936] text-white"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex mb-4 items-end justify-start">
              <img
                src={`https://placehold.co/40x40/78716C/FFF?text=${selectedEthnic.name.substring(
                  0,
                  1
                )}`}
                alt="bot avatar"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div className="rounded-xl p-3 max-w-xs lg:max-w-md bg-stone-200 text-stone-800">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-stone-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-stone-500 rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-2 bg-stone-500 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-stone-200">
          <div className="flex flex-wrap gap-2 mb-2">
            {elderData.prompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                disabled={isLoading}
                className="px-3 py-1 bg-stone-200 text-stone-700 rounded-full text-sm hover:bg-stone-300 disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              disabled={isLoading}
              className="flex-1 p-3 border border-stone-300 rounded-l-lg focus:ring-2 focus:ring-[#A24936] transition disabled:bg-stone-100"
              placeholder="Ask a question..."
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading}
              className="bg-[#A24936] text-white px-6 rounded-r-lg hover:bg-red-800 transition-colors disabled:bg-stone-400"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
