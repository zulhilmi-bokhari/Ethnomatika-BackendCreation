import { X } from 'lucide-react';

export const VRTourView = ({ tour, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col">
            <button onClick={onClose} className="absolute top-4 right-4 text-black bg-white/70 p-2 rounded-full hover:bg-white z-20">
                <X size={28} />
            </button>
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${tour.imageUrl})` }}>
                <div className="w-full h-full bg-black/30 flex items-end">
                    <div className="bg-black/50 text-white p-8 backdrop-blur-md w-full">
                        <h2 className="text-3xl font-bold">{tour.title}</h2>
                        <p className="mt-2 max-w-3xl">{tour.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
