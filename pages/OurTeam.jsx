import React from 'react';
import { borneoEthnicGroups } from '../data/ethnicData'; // Import the ethnic group data

const TeamMemberCard = ({ name, role, imageUrl }) => (
  <div className="text-center text-stone-800">
    <img 
      src={imageUrl} 
      alt={`Portrait of ${name}`} 
      className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg mb-4"
    />
    <h3 className="text-2xl font-bold">{name}</h3>
    <p className="text-stone-600">{role}</p>
  </div>
);

export const OurTeam = () => {
  // Use the first 3 ethnic groups as placeholders for team members
  const teamMembers = [
    { name: "John Doe", role: "Lead Designer & Developer", imageUrl: borneoEthnicGroups[0].image },
    { name: "Jane Smith", role: "Cultural Research Lead", imageUrl: borneoEthnicGroups[1].image },
    { name: "Alex Johnson", role: "UX/UI Specialist", imageUrl: borneoEthnicGroups[2].image },
  ];

  return (
    <div className="min-h-screen bg-[#F4F1DE] py-20 px-8 pt-32">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-stone-800 mb-4">
          The Team Behind Ethnomatika
        </h1>
        <p className="text-xl text-stone-600 mb-16 max-w-3xl mx-auto">
          A passionate group of developers, designers, and cultural enthusiasts dedicated to the preservation of Bornean heritage.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map(member => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
