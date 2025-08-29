import React, { useState, useEffect } from 'react';
import { User, LogOut, Search } from 'lucide-react';
import { borneoEthnicGroups } from '../data/ethnicData';
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

export const Header = ({ onNavigate, activeView, user, onSignOut, onAuthClick, onEthnicSelect, selectedEthnic }) => {
    const [ethnicInput, setEthnicInput] = useState('');

    useEffect(() => {
        if (selectedEthnic) {
            setEthnicInput(selectedEthnic.name);
        } else {
            setEthnicInput('');
        }
    }, [selectedEthnic]);

    const handleEthnicSearch = (e) => {
        e.preventDefault();
        const foundEthnic = borneoEthnicGroups.find(
            (ethnic) => ethnic.name.toLowerCase() === ethnicInput.toLowerCase()
        );
        if (foundEthnic) {
            onEthnicSelect(foundEthnic);
        } else {
            Toast.fire({
                icon: 'error',
                title: 'Ethnic group not found. Please choose from the list.'
            })
        }
    };

    if (activeView === 'landing' && selectedEthnic) {
        return (
            <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
                <h1 onClick={() => onNavigate('landing')} className="text-3xl font-bold tracking-wider font-serif text-white">ETHNOMATIKA</h1>
                <nav>
                    <button onClick={onAuthClick} className="bg-[#A24936] hover:bg-red-800 text-white font-bold py-2 px-5 rounded-lg transition-colors text-lg">
                        Join the Community
                    </button>
                </nav>
            </header>
        );
    }
    
    if (activeView === 'landing' && !selectedEthnic) {
        return null; // Hide header during the brief transition to the hub
    }

    return (
        <header className="fixed top-0 left-0 right-0 bg-[#cba564] bg-opacity-80 backdrop-blur-md text-white p-4 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center gap-4">
                <button onClick={() => onNavigate('landing')} className="text-2xl font-bold tracking-wider font-serif border-b border-transparent hover:border-b hover:border-white cursor-pointer transition-colors">ETHNOMATIKA</button>
                <nav className="flex-1 flex justify-end items-center gap-4 md:gap-6">
                    <form onSubmit={handleEthnicSearch} className="relative hidden md:block">
                        <input type="text" list="ethnic-groups-list" value={ethnicInput} onChange={(e) => setEthnicInput(e.target.value)} placeholder="Search for an ethnic group..." className="bg-white/10 text-white rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-[#D3A625] focus:outline-none transition" />
                        <datalist id="ethnic-groups-list">{borneoEthnicGroups.map(ethnic => <option key={ethnic.id} value={ethnic.name} />)}</datalist>
                        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"><Search size={20} /></button>
                    </form>
                    {<button onClick={() => onNavigate('hub')} className="text-lg border-b border-transparent hover:border-b hover:border-white cursor-pointer transition-colors">Museum Hub</button>}
                    {user && <button onClick={() => onNavigate('dashboard')} className="text-lg border-b border-transparent hover:border-b hover:border-white cursor-pointer transition-colors">Dashboard</button>}
                    {user ? (
                        <div className="flex items-center space-x-2">
                            <span className="text-white font-semibold hidden lg:flex items-center"><User className="w-5 h-5 mr-2" /> {user.name}</span>
                            <button onClick={onSignOut} className="bg-white/20 hover:bg-white/50 text-white font-semibold p-2 rounded-full transition-colors cursor-pointer"><LogOut className="w-5 h-5" /></button>
                        </div>
                    ) : (
                         <button onClick={onAuthClick} className="bg-[#A24936] hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg transition-colors">Begin Your Journey</button>
                    )}
                </nav>
            </div>
        </header>
    );
};
