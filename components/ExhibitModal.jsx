import { X } from 'lucide-react';
import { View } from 'lucide-react';

export const ExhibitModal = ({ exhibit, onClose }) => {
    if (!exhibit) return null;

    return (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-[100] p-4 animate-fade-in" onClick={onClose}>
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-stone-600 hover:text-stone-900 z-10"><X size={28} /></button>
                <img src={exhibit.imageUrl} alt={exhibit.title} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-8">
                    <p className="text-[#A24936] font-semibold">{exhibit.category}</p>
                    <h3 className="text-4xl font-serif font-bold text-stone-800 mb-4">{exhibit.title}</h3>
                    <p className="text-lg text-stone-600 mb-6">{exhibit.description}</p>
                    {exhibit.arEnabled && <button className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors mb-4"><View size={20}/> View in Your Space (AR)</button>}
                    {exhibit.ingredients && (<div className="mt-4"><h4 className="font-semibold text-stone-700 mb-2">Key Ingredients:</h4><ul className="list-disc list-inside text-stone-600">{exhibit.ingredients.map(ing => <li key={ing}>{ing}</li>)}</ul></div>)}
                    {exhibit.audioUrl && (<div className="mt-4"><h4 className="font-semibold text-stone-700 mb-2">Listen:</h4><audio controls src={exhibit.audioUrl} className="w-full"></audio></div>)}
                    {exhibit.videoUrl && (<div className="mt-4 aspect-w-16 aspect-h-9"><iframe className="w-full h-full rounded-lg" src={exhibit.videoUrl} title={exhibit.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>)}
                </div>
            </div>
        </div>
    );
};
