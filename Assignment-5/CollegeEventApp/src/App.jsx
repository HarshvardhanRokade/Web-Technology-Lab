import React, { useState } from 'react';

// --- Components ---

const Navbar = () => (
  <nav className="flex justify-between items-center py-4 px-6 md:px-12 bg-gray-900 text-white sticky top-0 z-50">
    <div className="text-xl font-bold">🎉 TechFest '26</div>
    <ul className="flex gap-6 font-medium">
      <li><a href="#about" className="hover:text-red-400 transition-colors">About</a></li>
      <li><a href="#schedule" className="hover:text-red-400 transition-colors">Schedule</a></li>
      <li><a href="#register" className="hover:text-red-400 transition-colors">Register</a></li>
    </ul>
  </nav>
);

const Hero = () => (
  <header className="h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-500 to-cyan-400 text-white px-5">
    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-md">Welcome to TechFest 2026</h1>
    <p className="text-lg md:text-xl mb-2 drop-shadow-sm">The biggest annual tech symposium of the year.</p>
    <p className="font-bold mb-8 bg-black/20 px-5 py-2 rounded-full backdrop-blur-sm">March 15 - 17, 2026 | Main Campus Auditorium</p>
    <a href="#register" className="px-8 py-3 text-lg bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition-transform transform hover:scale-105 shadow-lg">
      Secure Your Spot
    </a>
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

const Schedule = () => {
  const events = [
    { time: "Day 1 - 09:00 AM", title: "Opening Ceremony & Keynote" },
    { time: "Day 1 - 11:30 AM", title: "AI & Future Tech Workshop" },
    { time: "Day 2 - 10:00 AM", title: "24-Hour Hackathon Begins" },
    { time: "Day 3 - 04:00 PM", title: "Project Showcases & Judging" },
    { time: "Day 3 - 07:00 PM", title: "Closing Ceremony & DJ Night" },
  ];

  return (
    <section id="schedule" className="py-20 px-6 md:px-12 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">Event Schedule</h2>
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {events.map((event, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500 text-left transition-shadow hover:shadow-md">
            <span className="text-red-500 font-bold text-sm block mb-1">{event.time}</span>
            <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const Registration = () => {
  const [formData, setFormData] = useState({ name: '', email: '', college: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Awesome, ${formData.name}! Your registration has been received.`);
    setFormData({ name: '', email: '', college: '' });
  };

  return (
    <section id="register" className="py-20 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">Register Now</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
        <input 
          type="text" name="name" placeholder="Full Name" 
          value={formData.name} onChange={handleChange} required 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="email" name="email" placeholder="Email Address" 
          value={formData.email} onChange={handleChange} required 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" name="college" placeholder="College/University Name" 
          value={formData.college} onChange={handleChange} required 
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="p-3 bg-gray-900 text-white font-bold rounded-md hover:bg-gray-800 transition-colors">
          Submit Registration
        </button>
      </form>
    </section>
  );
};

const Footer = () => (
  <footer className="text-center py-8 bg-gray-900 text-gray-400">
    <p>&copy; 2026 TechFest Organizing Committee. All rights reserved.</p>
  </footer>
);

// --- Main App ---

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;