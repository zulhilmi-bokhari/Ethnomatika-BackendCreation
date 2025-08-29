import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Languages, Globe, MessageCircleQuestion } from 'lucide-react';

const hubLinks = [
    { path: '/interpreter', icon: Languages, title: 'Translation', description: 'Translate words and phrases.' },
    { path: '/scribe', icon: BookOpen, title: 'Learn Phrases', description: 'Interactive language lessons.' },
    { path: '/gallery', icon: Globe, title: 'Explore Culture', description: 'View artifacts in the gallery.' },
    { path: '/elder', icon: MessageCircleQuestion, title: 'Ask the Elder', description: 'Converse with an AI elder.' },
];

export const MuseumHub = ({ onNavigate, selectedEthnic }) => {
    if (!selectedEthnic) {
        return (
            <div className="min-h-screen bg-[#F4F1DE] py-20 px-8 text-center flex flex-col justify-center items-center pt-32">
                <Users className="w-24 h-24 text-stone-500 mb-4" />
                <h2 className="text-3xl font-serif font-bold text-stone-700 mb-2">Welcome to the Museum Hub</h2>
                <p className="text-lg text-stone-500 mb-6 max-w-md">To continue, please select an ethnic group to explore.</p>
                <Link to="/" className="bg-[#A24936] hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">Select an Ethnic Group</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F4F1DE] flex items-center justify-center">
            <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="flex justify-center items-center h-full">
                    <Link to="/" onClick={() => onNavigate('landing')} state={{ skipWelcome: true }} className="flex flex-col h-full justify-center items-center text-center group cursor-pointer">
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-stone-700 rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-105"></div>
                            <img
                                src={selectedEthnic.image}
                                alt={selectedEthnic.name}
                                className="relative w-full h-full object-cover rounded-full p-2 transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <h1 className="text-7xl font-serif text-stone-800 mt-6 transition-colors duration-300 group-hover:text-[#A24936]">{selectedEthnic.name}</h1>
                        <p className="text-stone-500 mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">Click to change ethnic group</p>
                    </Link>
                </div>
                <div className="flex flex-col space-y-6 w-full">
                    <h2 className="text-4xl font-serif translate-x-16 text-stone-800 mb-4">{selectedEthnic.greeting}</h2>
                    {hubLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={index}
                                to={link.path}
                                className="flex items-center p-4 bg-white rounded-xl w-full shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-[#A24936] rounded-l-full hover:bg-amber-100 hover:translate-0 translate-x-16 cursor-pointer pl-4 py-4 border-r-0"
                            >
                                <div className="p-4 bg-stone-100 rounded-full w-22 h-20 flex justify-center items-center">
                                    <Icon className="w-10 h-10 text-[#A24936]" />
                                </div>
                                <div className="text-black text-left w-full px-6">
                                    <h3 className="text-xl font-bold text-stone-800 group-hover:text-[#A24936] transition-colors">{link.title}</h3>
                                    <p className="text-stone-600">{link.description}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MuseumHub;
