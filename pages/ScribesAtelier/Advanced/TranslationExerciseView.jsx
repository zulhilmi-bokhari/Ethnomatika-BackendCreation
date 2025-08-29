import React from "react";
import { ChevronLeft } from "lucide-react";

export const TranslationExerciseView = ({ lesson, onBack, onComplete, selectedEthnic }) => {
    window.scrollTo(0, 0);
    const [current, setCurrent] = React.useState(0);
    const [userTranslation, setUserTranslation] = React.useState('');
    const [feedback, setFeedback] = React.useState(''); // 'correct', 'incorrect', ''
    const prompt = lesson.prompts[current];

    const handleSubmit = () => {
        // Simple case-insensitive comparison
        if (userTranslation.trim().toLowerCase() === prompt.correct.toLowerCase()) {
            setFeedback('correct');
            setTimeout(() => {
                setFeedback('');
                if (current < lesson.prompts.length - 1) {
                    setCurrent(current + 1);
                    setUserTranslation('');
                } else {
                    onComplete();
                }
            }, 1500);
        } else {
            setFeedback('incorrect');
            setTimeout(() => setFeedback(''), 1500);
        }
    };

    return (
        <div>
            <button onClick={onBack} className="text-[#A24936] hover:text-red-800 font-semibold mb-4 flex items-center gap-2"><ChevronLeft/> Back to Lessons</button>
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-2">{lesson.title}</h2>
            <p className="text-lg text-stone-600 mb-8">Translate the following sentence into {selectedEthnic.name}.</p>
            <div className="bg-white p-8 rounded-lg shadow">
                <div className="bg-stone-100 p-6 rounded-lg mb-6">
                    <p className="text-sm text-stone-500 font-semibold">TRANSLATE THIS SENTENCE:</p>
                    <p className="text-2xl text-center text-stone-800 mt-2">{prompt.english}</p>
                </div>
                <textarea
                    value={userTranslation}
                    onChange={(e) => setUserTranslation(e.target.value)}
                    rows="4"
                    className={`w-full p-4 border-2 rounded-lg focus:ring-2 transition ${
                        feedback === 'correct' ? 'border-green-500 ring-green-200' :
                        feedback === 'incorrect' ? 'border-red-500 ring-red-200' :
                        'border-stone-300 focus:ring-[#A24936]'
                    }`}
                    placeholder="Type your translation here..."
                ></textarea>
                <div className="mt-6 flex justify-center">
                    <button onClick={handleSubmit} className="bg-[#A24936] text-white font-bold py-3 px-10 rounded-lg hover:bg-red-800 transition">Check Answer</button>
                </div>
                {feedback === 'correct' && <p className="text-center mt-4 font-bold text-green-600">Excellent!</p>}
                {feedback === 'incorrect' && <p className="text-center mt-4 font-bold text-red-500">Not quite. Try again!</p>}
            </div>
        </div>
    );
};