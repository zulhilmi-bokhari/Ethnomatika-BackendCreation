import React, { useState, useEffect } from 'react';
import { Award } from 'lucide-react';

export const BadgeNotification = ({ message }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setVisible(true);
            const timer = setTimeout(() => setVisible(false), 3500);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[101] transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-[#D3A625] text-black font-bold py-3 px-6 rounded-lg shadow-2xl flex items-center gap-3">
                <Award />
                <span>{message}</span>
            </div>
        </div>
    );
};
