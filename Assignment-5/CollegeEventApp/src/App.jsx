import React, { useState } from 'react';

// --- Components ---

const Navbar = () => (
  <nav className="flex justify-between items-center py-4 px-6 md:px-12 bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
    <div className="text-xl font-bold tracking-tight">🎉 TechFest '26</div>
    <ul className="hidden md:flex gap-8 font-medium">
      <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
      <li><a href="#events" className="hover:text-cyan-400 transition-colors">Events</a></li>
      <li><a href="#clubs" className="hover:text-cyan-400 transition-colors">Clubs</a></li>
      <li><a href="#schedule" className="hover:text-cyan-400 transition-colors">Schedule</a></li>
    </ul>
    <a href="#register" className="bg-red-500 px-4 py-2 rounded-md font-bold hover:bg-red-600 transition-all text-sm">Register</a>
  </nav>
);

const Hero = () => (
  <header className="h-[70vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white px-5">
    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tighter">
      THE FUTURE IS <span className="text-cyan-400">NOW</span>
    </h1>
    <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl">
      Experience the peak of innovation at TechFest '26. Three days of pure adrenaline, code, and robotics.
    </p>
    <div className="flex gap-4">
      <a href="#events" className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-transform hover:scale-105">
        View Events
      </a>
      <a href="#register" className="px-8 py-3 border-2 border-white rounded-full font-bold hover:bg-white hover:text-black transition-all">
        Join Us
      </a>
    </div>
  </header>
);

const About = () => (
  <section id="about" className="py-20 px-6 md:px-12 text-center max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">About The Event</h2>
    <p className="text-gray-600 text-lg leading-relaxed">
      TechFest '26 brings together the brightest minds in technology, engineering, 
      and design. Join us for three days of hackathons, expert guest lectures, 
      and hands-on workshops designed to push the boundaries of innovation.
    </p>
  </section>
);

// --- INTERACTIVE EVENTS SECTION WITH MODAL ---
const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventList = [
    { 
      title: "Robo-War 2.0", 
      tag: "Combat", 
      desc: "Heavyweight battle-bots clashing in the arena.",
      details: "Teams of 3-5 members. Robots must weigh under 30kg. Prizes up to $2,000! Competition starts March 15th at the Main Arena. Safety goggles required.",
      icon: "🤖" 
    },
    { 
      title: "Code-A-Thon", 
      tag: "Coding", 
      desc: "24-hour sprint to build solutions.",
      details: "Solve real-world problems using any tech stack. Mentors from Google and Microsoft will be present. Bring your own laptop and plenty of coffee.",
      icon: "💻" 
    },
    { 
      title: "AI Summit", 
      tag: "Workshop", 
      desc: "Deep dive into Generative AI.",
      details: "A hands-on workshop on LLM fine-tuning and prompt engineering. Limited to 50 participants. Pre-requisite: Basic Python knowledge.",
      icon: "🧠" 
    },
    { 
      title: "Cyber-Security CTF", 
      tag: "Security", 
      desc: "Capture the flag competition.",
      details: "Test your penetration testing skills in a controlled environment. Challenges range from web exploitations to reverse engineering.",
      icon: "🛡️" 
    },
  ];

  return (
    <section id="events" className="py-20 px-6 md:px-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">Upcoming Events</h2>
      <p className="text-center text-gray-500 mb-12">Click on any card to view detailed rules and requirements.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {eventList.map((event, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedEvent(event)}
            className="group p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-blue-500 transition-all hover:shadow-xl cursor-pointer"
          >
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{event.tag}</span>
            <h3 className="text-xl font-bold mt-2 group-hover:text-blue-600">{event.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{event.desc}</p>
            <button className="mt-4 text-sm font-bold text-gray-900 underline group-hover:text-blue-500">View Details →</button>
          </div>
        ))}
      </div>

      {/* --- MODAL LOGIC --- */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl leading-none"
            >
              &times;
            </button>
            
            <div className="text-5xl mb-4">{selectedEvent.icon}</div>
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">{selectedEvent.tag}</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedEvent.title}</h2>
            
            <div className="bg-blue-50 p-5 rounded-xl mb-6">
              <h4 className="font-bold text-blue-800 mb-2">Registration Info & Rules:</h4>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {selectedEvent.details}
              </p>
            </div>

            <div className="flex gap-3">
              <a 
                href="#register" 
                onClick={() => setSelectedEvent(null)}
                className="flex-1 text-center bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Register Now
              </a>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="flex-1 border border-gray-300 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors text-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Clubs = () => {
  const clubs = [
    { name: "Robotics Club", activity: "Hardware Assembly & Arduino basics", icon: "🤖" },
    { name: "The Dev Society", activity: "Open Source contributions & Web3", icon: "💻" },
    { name: "Data Science Hub", activity: "Kaggle competitions & ML modeling", icon: "📊" },
    { name: "Design Studio", activity: "UI/UX Case studies & Branding", icon: "🎨" },
  ];

  return (
    <section id="clubs" className="py-20 px-6 md:px-12 bg-gray-900 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Explore Our Clubs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {clubs.map((club, i) => (
          <div key={i} className="flex items-start gap-4 p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
            <div className="text-4xl">{club.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400">{club.name}</h3>
              <p className="text-gray-400 mt-1">Current Focus: {club.activity}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Schedule = () => {
  const events = [
    { time: "Day 1 - 09:00 AM", title: "Opening Ceremony & Keynote" },
    { time: "Day 1 - 11:30 AM", title: "AI & Future Tech Workshop" },
    { time: "Day 2 - 10:00 AM", title: "24-Hour Hackathon Begins" },
    { time: "Day 3 - 07:00 PM", title: "Closing Ceremony & DJ Night" },
  ];

  return (
    <section id="schedule" className="py-20 px-6 md:px-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Event Schedule</h2>
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {events.map((event, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500 flex justify-between items-center">
            <div>
              <span className="text-red-500 font-bold text-sm block">{event.time}</span>
              <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
            </div>
            <div className="text-gray-200 font-bold text-2xl">0{index + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Registration = () => {
  const [formData, setFormData] = useState({ name: '', email: '', event: 'Code-A-Thon' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Success! You are registered for ${formData.event}. See you there, ${formData.name}!`);
    setFormData({ name: '', email: '', event: 'Code-A-Thon' });
  };

  return (
    <section id="register" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-inner border border-gray-100">
        <h2 className="text-3xl font-bold mb-2 text-center">Register for Events</h2>
        <p className="text-center text-gray-500 mb-8">Limited slots available per event.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="text" placeholder="Full Name" required 
            className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="email" placeholder="Email Address" required 
            className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
            value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <select 
            className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500 bg-white"
            value={formData.event} onChange={(e) => setFormData({...formData, event: e.target.value})}
          >
            <option>Code-A-Thon</option>
            <option>Robo-War 2.0</option>
            <option>AI Summit</option>
            <option>Cyber-Security CTF</option>
          </select>
          <button type="submit" className="p-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors mt-2">
            Confirm Registration
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="text-center py-12 bg-gray-900 text-gray-500 border-t border-gray-800">
    <p>&copy; 2026 TechFest Organizing Committee. Built with React & Tailwind.</p>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Clubs />
      <Schedule />
      <Registration />
      <Footer />
    </div>
  );
}