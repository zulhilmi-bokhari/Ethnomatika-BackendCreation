import React, { useState } from "react";
import { Mic, Volume2, Copy, Languages } from "lucide-react";
import { borneoEthnicGroups } from "../data/ethnicData";
import { franc } from "franc";
import langs from "langs";
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 2000,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

export const InterpretersRoom = ({ selectedEthnic, onNavigate }) => {
  const [inputText, setInputText] = React.useState("");
  const [translatedText, setTranslatedText] = React.useState("");
  const [targetLang, setTargetLang] = React.useState(
    selectedEthnic ? selectedEthnic.id : "dusun"
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRecording, setIsRecording] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const recognitionRef = React.useRef(null);
  const [detectedLang, setDetectedLang] = useState("English");

  // 🔹 Language detection helper (franc + langs + fallback)
  const detectLang = (text, setDetectedLang) => {
    if (!text || text.trim() === "") {
      setDetectedLang("English");
      return "eng";
    }

    const langCode = franc(text);
    const fallbackMap = {
      zsm: { name: "Malay (Standard Malay)", code: "msa" },
    };

    if (langCode !== "und") {
      const language = langs.where("3", langCode) || fallbackMap[langCode];
      if (language) {
        setDetectedLang(language.name);
        return langCode;
      } else {
        setDetectedLang("Malay");
        return "msa";
      }
    }
    return "und";
  };

  React.useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      const recognition = recognitionRef.current;
      recognition.continuous = false;
      recognition.lang = "en-US";
      recognition.interimResults = false;

      recognition.onstart = () => setIsRecording(true);
      recognition.onend = () => setIsRecording(false);
      recognition.onerror = (event) => {
        Toast.fire({
          icon: 'error',
          title: "Speech recognition error:",
          text: event.error
        })
      }

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);

        // 🔹 Detect language
        const langCode = detectLang(transcript, setDetectedLang);

        // Pass transcript + detected language to your handler
        handleTranslate(transcript, langCode);
      };
    }
  }, []);

  const handleMicClick = () => {
    if (!recognitionRef.current) {
      Toast.fire({
        icon: 'error',
        title: "Speech recognition error:",
        text: "Sorry, your browser doesn't support speech recognition."
      })
      return;
    }
    if (isRecording) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
    }
  };

  const handleTranslate = async (textToTranslate = inputText) => {
    if (!textToTranslate.trim()) return;
    setIsLoading(true);
    setTranslatedText("");

    const ethnic = borneoEthnicGroups.find((t) => t.id === targetLang);
    const prompt = `Translate the following ${detectedLang} text to the ${ethnic.name} language of Borneo. Provide only the translation, without any additional explanation or quotation marks. Text to translate: "${textToTranslate}"`;

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
      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        const text = result.candidates[0].content.parts[0].text;
        setTranslatedText(text.trim());
      } else {
        setTranslatedText("Sorry, I couldn't translate that.");
      }
    } catch (error) {
      Toast.fire({
        icon: 'error',
        title: "Error during translation:",
        text: error
      })
      setTranslatedText("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlayAudio = () => {
    if (!translatedText || !("speechSynthesis" in window)) {
      Toast.fire({
        icon: 'error',
        title: "Sorry, your browser doesn't support text-to-speech.",
        text: error
      })
      return;
    }
    const utterance = new SpeechSynthesisUtterance(translatedText);
    const ethnic = borneoEthnicGroups.find((t) => t.id === targetLang);
    utterance.lang = ethnic.langCode || "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = () => {
    if (translatedText) {
      navigator.clipboard.writeText(translatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!selectedEthnic) {
    return (
      <div className="p-8 pt-24 min-h-screen bg-[#F4F1DE] flex flex-col justify-center items-center text-center">
        <Languages className="w-24 h-24 text-stone-400 mb-4" />
        <h2 className="text-3xl font-serif font-bold text-stone-700 mb-2">
          The Interpreter's Room is Ready
        </h2>
        <p className="text-lg text-stone-500 mb-6 max-w-md">
          Please select an ethnic group to use the translator.
        </p>
        <button
          onClick={() => onNavigate("landing", "interpreter")}
          className="bg-[#A24936] hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
        >
          Select an Ethnic Group
        </button>
      </div>
    );
  }

  return (
    <div
      className="p-8 pt-24 min-h-screen bg-[#F4F1DE]"
      style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/subtle-pinstripes.png')`,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-stone-800 mb-2">
          The Interpreter's Room
        </h2>
        <p className="text-lg text-stone-600 mb-8">
          Translate words, build bridges. Use your voice or the keyboard.
        </p>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Translate from : {detectedLang} (Auto-Detected)
              </label>
              <div className="relative">
                <textarea
                  value={inputText}
                  onChange={(e) => {
                    const value = e.target.value;
                    setInputText(value);
                    detectLang(value, setDetectedLang);
                  }}
                  rows="6"
                  className="w-full p-4 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#A24936] transition pr-12"
                  placeholder="Type or click the mic to speak..."
                ></textarea>
                <button
                  onClick={handleMicClick}
                  className={`absolute right-3 top-3 p-2 rounded-full transition-colors ${isRecording
                    ? "bg-red-500 text-white animate-pulse"
                    : "bg-stone-200 text-stone-700 hover:bg-stone-300"
                    }`}
                >
                  <Mic size={20} />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Translation to:
                <select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="ml-2 p-1 border-stone-300 rounded-md focus:ring-[#A24936]"
                >
                  {borneoEthnicGroups.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </label>
              <div className="w-full p-4 border border-stone-300 rounded-lg bg-stone-50 min-h-[168px] relative">
                {isLoading ? (
                  <div className="text-stone-500">
                    ✨ Interpreting with Gemini...
                  </div>
                ) : (
                  <p className="text-stone-800 pr-16">{translatedText}</p>
                )}
                {translatedText && !isLoading && (
                  <div className="absolute top-3 right-3 flex flex-col space-y-2">
                    <button
                      onClick={handlePlayAudio}
                      className="text-stone-500 hover:text-[#A24936]"
                    >
                      <Volume2 size={20} />
                    </button>
                    <button
                      onClick={handleCopy}
                      className="text-stone-500 hover:text-[#A24936]"
                    >
                      <Copy size={20} />
                    </button>
                  </div>
                )}
                {copied && (
                  <span className="absolute bottom-2 left-4 text-sm text-green-600">
                    Copied!
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => handleTranslate()}
              disabled={isLoading}
              className="bg-[#A24936] hover:bg-red-800 text-white font-bold py-3 px-10 rounded-lg text-lg transition-all duration-300 disabled:bg-stone-400 flex items-center gap-2"
            >
              {isLoading ? "Translating..." : "✨ Translate with Gemini"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
