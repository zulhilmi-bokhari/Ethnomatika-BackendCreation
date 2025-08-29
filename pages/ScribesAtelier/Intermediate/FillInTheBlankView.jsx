import React from "react";
import { ChevronLeft } from "lucide-react";

export const FillInTheBlankView = ({ lesson, onBack, onComplete }) => {
    window.scrollTo(0, 0);
    const [current, setCurrent] = React.useState(0);
    const [feedback, setFeedback] = React.useState('');
    const sentence = lesson.sentences[current];

    const handleAnswer = (option) => {
        if (option === sentence.blank) {
            setFeedback('Correct!');
            setTimeout(() => {
                setFeedback('');
                if (current < lesson.sentences.length - 1) setCurrent(current + 1);
                else onComplete();
            }, 1000);
        } else {
            setFeedback('Try again!');
            setTimeout(() => setFeedback(''), 1000);
        }
    };

    return (
        <div>
            <button onClick={onBack} className="text-[#A24936] hover:text-red-800 font-semibold mb-4 flex items-center gap-2"><ChevronLeft/> Back to Lessons</button>
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-2">{lesson.title}</h2>
            <p className="text-lg text-stone-600 mb-8">Choose the correct word to complete the sentence.</p>
            <div className="bg-white p-8 rounded-lg shadow">
                <p className="text-3xl text-center text-stone-700 mb-8">{sentence.prompt.replace('___', '______')}</p>
                <div className="flex justify-center gap-4">
                    {sentence.options.map(option => <button key={option} onClick={() => handleAnswer(option)} className="bg-[#A24936] text-white font-bold py-3 px-8 rounded-lg hover:bg-red-800 transition">{option}</button>)}
                </div>
                {feedback && <p className={`text-center mt-4 font-bold ${feedback === 'Correct!' ? 'text-green-600' : 'text-red-500'}`}>{feedback}</p>}
            </div>
        </div>
    );
};