import React from "react";
import { ChevronLeft } from "lucide-react";

export const MatchingExerciseView = ({ lesson, onBack, onComplete }) => {
    window.scrollTo(0, 0);
    const [shuffled, setShuffled] = React.useState({ left: [], right: [] });
    const [selected, setSelected] = React.useState({ left: null, right: null });
    const [matched, setMatched] = React.useState([]);

    React.useEffect(() => {
        const left = [...lesson.pairs.map(p => ({ id: p.id, text: p.english }))].sort(() => Math.random() - 0.5);
        const right = [...lesson.pairs.map(p => ({ id: p.id, text: p.translation }))].sort(() => Math.random() - 0.5);
        setShuffled({ left, right });
    }, [lesson]);

    React.useEffect(() => {
        if (matched.length > 0 && matched.length === lesson.pairs.length) {
            const timer = setTimeout(() => onComplete(), 100);
            return () => clearTimeout(timer);
        }
    }, [matched, lesson.pairs.length, onComplete]);

    const handleSelect = (column, item) => {
        const newSelected = { ...selected, [column]: item };
        setSelected(newSelected);

        if (newSelected.left && newSelected.right) {
            if (newSelected.left.id === newSelected.right.id) {
                setMatched([...matched, newSelected.left.id]);
            }
            setTimeout(() => setSelected({ left: null, right: null }), 100);
        }
    };
    
    const getButtonClass = (column, item) => {
        if (matched.includes(item.id)) return 'bg-green-200 text-green-800 border-green-300 animate-snap';
        if (selected[column]?.id === item.id) return 'bg-yellow-200 border-yellow-300';
        return 'bg-white hover:bg-stone-50';
    };

    return (
        <div>
            <button onClick={onBack} className="text-[#A24936] hover:text-red-800 font-semibold mb-4 flex items-center gap-2"><ChevronLeft/> Back to Lessons</button>
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-2">{lesson.title}</h2>
            <p className="text-lg text-stone-600 mb-8">Match the English word to its translation.</p>
            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">{shuffled.left.map(item => <button key={item.id} onClick={() => handleSelect('left', item)} disabled={matched.includes(item.id)} className={`w-full p-4 rounded-lg shadow border-2 transition ${getButtonClass('left', item)}`}>{item.text}</button>)}</div>
                <div className="space-y-3">{shuffled.right.map(item => <button key={item.id} onClick={() => handleSelect('right', item)} disabled={matched.includes(item.id)} className={`w-full p-4 rounded-lg shadow border-2 transition ${getButtonClass('right', item)}`}>{item.text}</button>)}</div>
            </div>
        </div>
    );
};