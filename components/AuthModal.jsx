import React, { useState } from "react";
import { X } from "lucide-react";

export const AuthModal = ({ onClose, onAuthSuccess }) => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [formTransition, setFormTransition] = useState(false);

  // Animate modal in/out
  React.useEffect(() => {
    setShowModal(true);
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(onClose, 250);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((isSigningUp && !name) || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    const userData = { email, name: isSigningUp ? name : email.split("@")[0] };
    onAuthSuccess(userData);
    handleClose();
  };

  const handleSwitch = () => {
    setFormTransition(true);
    setTimeout(() => {
      setIsSigningUp((prev) => !prev);
      setFormTransition(false);
      setError("");
    }, 250);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 animate-fade-in ${showModal ? "bg-black/75 opacity-100" : "opacity-0 pointer-events-none"
        }`}
      onClick={handleClose}
    >

      <div
        className={`bg-white rounded-lg max-w-sm w-full p-8 relative shadow-xl transform transition-all duration-300 ${showModal ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-stone-600 hover:text-stone-900 z-10 transition-transform duration-200 active:scale-90"
        >
          <X size={24} />
        </button>
        <h2
          className={`text-3xl font-serif font-bold text-stone-800 mb-6 text-center transition-all duration-300 ${formTransition
              ? "opacity-0 translate-x-8"
              : "opacity-100 translate-x-0"
            }`}
        >
          {isSigningUp ? "Create Account" : "Sign In"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className={`transition-all duration-300 ${formTransition
              ? "opacity-0 -translate-x-8 pointer-events-none"
              : "opacity-100 translate-x-0"
            }`}
        >
          {isSigningUp && (
            <div className="mb-4">
              <label className="block text-stone-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#A24936] transition-all duration-200"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-stone-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#A24936] transition-all duration-200"
            />
          </div>
          <div className="mb-6">
            <label className="block text-stone-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#A24936] transition-all duration-200"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center animate-pulse">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-[#A24936] hover:bg-red-800 text-white font-bold py-3 rounded-lg text-lg transition-all duration-200 transform active:scale-95 shadow-md"
          >
            {isSigningUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p
          className={`text-center text-stone-600 mt-4 transition-all duration-300 ${formTransition
              ? "opacity-0 translate-x-8"
              : "opacity-100 translate-x-0"
            }`}
        >
          {isSigningUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={handleSwitch}
            className="text-[#A24936] hover:underline ml-1 font-semibold transition-colors duration-200"
          >
            {isSigningUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};
