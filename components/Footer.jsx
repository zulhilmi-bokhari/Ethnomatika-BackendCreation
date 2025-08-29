const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1C1614] text-stone-400 p-8">
      <div className="container mx-auto text-center">
        <p className="text-xl font-bold tracking-wider font-serif text-white mb-2">
          ETHNOMATIKA
        </p>
        <p>
          &copy; {new Date().getFullYear()} Ethnomatika Virtual Museum. All
          Rights Reserved.
        </p>
        <p className="text-sm mt-2">
          A project dedicated to the preservation and celebration of Bornean
          cultural heritage.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => onNavigate("landing")}
            className="hover:text-white transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate("landing")}
            className="hover:text-white transition-colors"
          >
            Select Tribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
