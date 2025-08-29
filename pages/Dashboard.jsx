import {
  Flame,
  Award,
  ArrowRight,
  Activity,
  MessageSquare,
  PlusCircle,
} from "lucide-react";

export const UserDashboard = ({ user, onNavigate, selectedEthnic }) => {
  const stats = { xp: 1250, streak: 5, badges: 3 };
  const recentActivity = [
    { id: 1, text: "You earned the 'Dusun Greetings' badge!", time: "2h ago" },
    {
      id: 2,
      text: "Explored The Sape' in the Heritage Gallery.",
      time: "1d ago",
    },
    {
      id: 3,
      text: "Completed 5 phrases in the Scribe's Atelier.",
      time: "1d ago",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F1DE] py-20 px-8 pt-32">
      <div className="px-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-stone-700 mb-4">
              Quick Access
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => onNavigate(selectedEthnic ? "hub" : "landing")}
                className="w-full text-left bg-white p-4 rounded-lg shadow hover:shadow-md hover:bg-stone-50 cursor-pointer transition flex items-center justify-between"
              >
                <span>
                  {selectedEthnic
                    ? `Explore ${selectedEthnic.name} Wing`
                    : "Select an Ethnic Group"}
                </span>
                <ArrowRight />
              </button>
              <button
                onClick={() => onNavigate("scribe")}
                className="w-full text-left bg-white p-4 rounded-lg shadow hover:shadow-md hover:bg-stone-50 cursor-pointer transition flex items-center justify-between"
              >
                <span>Scribe's Atelier</span>
                <ArrowRight />
              </button>
              <button
                onClick={() => onNavigate("gallery")}
                className="w-full text-left bg-white p-4 rounded-lg shadow hover:shadow-md hover:bg-stone-50 cursor-pointer transition flex items-center justify-between"
              >
                <span>Heritage Gallery</span>
                <ArrowRight />
              </button>
              <button
                onClick={() => onNavigate("elder")}
                className="w-full text-left bg-white p-4 rounded-lg shadow hover:shadow-md hover:bg-stone-50 cursor-pointer transition flex items-center justify-between"
              >
                <span>Ask the Elder</span>
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-serif text-stone-800">
                Welcome back, {user.name}.
              </h1>
              <p className="text-xl text-stone-600">
                Here's a summary of your journey so far.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-stone-500 text-sm font-bold uppercase">
                  XP POINTS
                </h3>
                <p className="text-4xl font-bold text-[#A24936]">{stats.xp}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-stone-500 text-sm font-bold uppercase">
                  LEARNING STREAK
                </h3>
                <p className="text-4xl font-bold text-orange-500 flex items-center">
                  {stats.streak} <span className="text-lg ml-2">days</span>{" "}
                  <Flame className="ml-1" />
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-stone-500 text-sm font-bold uppercase">
                  BADGES EARNED
                </h3>
                <p className="text-4xl font-bold text-[#D3A625] flex items-center">
                  {stats.badges} <Award className="ml-2" />
                </p>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">
              Recent Activity
            </h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 border-b border-stone-200 pb-3 last:border-b-0"
                >
                  <div className="bg-red-100 p-2 rounded-full">
                    <Activity className="text-[#A24936]" />
                  </div>
                  <div>
                    <p className="text-stone-800">{activity.text}</p>
                    <p className="text-sm text-stone-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-stone-700 mb-6 text-center">
            Community Engagement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow text-center flex flex-col items-center">
              <MessageSquare className="w-12 h-12 text-[#A24936] mb-3" />
              <h3 className="text-xl font-bold text-stone-800 mb-2">
                Discussion Forums
              </h3>
              <p className="text-stone-600 mb-4">
                Share experiences, ask questions, and connect with others.
              </p>
              <button className="bg-[#A24936] text-white font-semibold py-2 px-5 rounded-lg hover:bg-red-800 transition">
                Join the Discussion
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center flex flex-col items-center">
              <PlusCircle className="w-12 h-12 text-green-600 mb-3" />
              <h3 className="text-xl font-bold text-stone-800 mb-2">
                Contribute to the Archive
              </h3>
              <p className="text-stone-600 mb-4">
                Help preserve culture by sharing your own stories and artifacts.
              </p>
              <button className="bg-green-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-600 transition">
                Contribute Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
