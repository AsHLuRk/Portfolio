import React, { useRef } from 'react';
import { useVanta } from './hooks/useVanta';
import ProjectCard from './components/ProjectCard';
import Terminal from './components/Terminal';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Code2, 
  ChevronRight,
  MessageSquare
} from 'lucide-react';

const App = () => {
  // Initialize the Vanta Fog effect
  const vantaRef = useVanta();
  
  // Navigation Refs
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 80,
      behavior: 'smooth',
    });
  };

  const projectList = [
    {
      title: "Chainvestor",
      description: "Chainvestor is a Hackhazardz2025 winning project, It is a simple blockchain based Game",
      link: "https://github.com/AsHLuRk/Hackweb3",
      image: "/chainvestor.png", 
      tags: ["React", "Blockchain", "Monad"]
    },
    {
      title: "RedTape Landing Page",
      description: "A modern, Eye Catching Landing page of RedTape",
      link: "https://redtape-landing-page-ten.vercel.app/",
      image: "/Red.png", 
      tags: ["Tailwind", "React"]
    },
    {
      title: "Roast My Code",
      description: "A simple React web application that Roast any Javascript code given by the User",
      link: "https://roast-code.vercel.app/",
      image: "/Roast.png", 
      tags: ["React", "Tailwind"]
    }
  ];
  const handleOpenLink = (url) => {
  // '_blank' opens the link in a new tab
  // 'noopener,noreferrer' is a security best practice
  window.open(url, '_blank', 'noopener,noreferrer');
};

  return (
    /* FIX: Added 'flex flex-col items-center' to ensure the content is centered and the grey side is removed */
    <div ref={vantaRef} className="min-h-screen w-full bg-[#050505] overflow-x-hidden flex flex-col items-center">
      
      {/* Wrapper to ensure content stays on top of Vanta */}
      <div className="relative z-10 w-full text-zinc-300 font-sans selection:bg-orange-500/30">
        
        {/* --- NAVIGATION --- */}
        <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-400 rounded-xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                <Code2 size={24} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase">Aayush.</span>
            </div>
            
            <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-orange-500 transition-all underline-offset-8 hover:underline">Home</button>
              <button onClick={() => scrollToSection(aboutRef)} className="hover:text-orange-500 transition-all underline-offset-8 hover:underline">About</button>
              <button onClick={() => scrollToSection(projectsRef)} className="hover:text-orange-500 transition-all underline-offset-8 hover:underline">Projects</button>
              <button onClick={() => scrollToSection(contactRef)} className="hover:text-orange-500 transition-all underline-offset-8 hover:underline">Contact</button>
            </div>
          </div>
        </nav>

        {/* --- MAIN CONTENT WRAPPER --- */}
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-20">
          
          {/* --- HERO SECTION --- */}
          <header className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-xs font-bold tracking-widest uppercase">
                Available for Internships 2026
              </div>
              <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter">
                HI, I'M <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500">
                  AAYUSH KUMAR
                </span>
              </h1>
              <p className="text-2xl font-mono text-zinc-500 font-medium tracking-tight uppercase">IT Engineer (3rd Year)</p>
              <p className="text-xl text-zinc-400 max-w-lg leading-relaxed font-light">
                Specializing in building high-performance web architectures, Salesforce Admin and blockchain.
              </p>
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => scrollToSection(contactRef)}
                  className="group flex items-center gap-2 px-10 py-4 bg-white text-black font-black rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  HIRE ME <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform active:scale-95" />
                </button>
                <div className="flex items-center gap-5 ml-4 text-zinc-500">
                  <Github onClick={() => handleOpenLink('https://github.com/AsHLuRk')} className="cursor-pointer hover:text-white transition-colors" size={24} />
                  <Linkedin onClick={() => handleOpenLink('https://www.linkedin.com/in/aayush-kumar-161b85290/')} className="cursor-pointer hover:text-white transition-colors" size={24} />
                </div>
              </div>
            </div>

            {/* HERO IMAGE CONTAINER - Corrected framing */}
            <div className="relative group flex justify-center lg:justify-end"> 
              <div className="relative z-10 w-full max-w-[450px] aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <img 
                  src="/PROFILE.png" 
                  alt="Aayush Kumar" 
                  className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-600/20 blur-[100px] rounded-full animate-pulse" />
            </div>
          </header>

          {/* --- ABOUT & TERMINAL --- */}
          <section ref={aboutRef} className="mb-40 scroll-mt-32">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-6xl font-black text-white italic uppercase tracking-tighter">About</h2>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
            </div>
            <div className="">
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-zinc-900/40 p-10 rounded-[2rem] border border-zinc-800 backdrop-blur-2xl">
                   <p className="font-mono text-zinc-400 text-lg leading-9">
                     I’m a 3rd-year IT Engineering student focused on learning the building blocks of the modern web. I enjoy experimenting with React interfaces, exploring the world of Blockchain, and understanding enterprise workflows through Salesforce. Currently, I’m just focused on building projects, refining my skills, and preparing for the 2026 internship cycle.
                     <br/><br/>
                     <span className="text-green-500 font-bold animate-pulse tracking-widest uppercase text-sm"> System Initialization Complete </span>
                   </p>
                   <span className='flex gap-2'>
                  <div className=" text-[20px] border border-zinc-700 px-2 py-1 rounded text-zinc-500 bg-zinc-900/50">
                    <h3>Web Development</h3>
                  </div>
                  <div className=" text-[20px] border border-zinc-700 px-2 py-1 rounded text-zinc-500 bg-zinc-900/50">
                    <h3>SalesForce </h3>
                  </div>
                  <div className=" text-[20px] border border-zinc-700 px-2 py-1 rounded text-zinc-500 bg-zinc-900/50">
                    <h3>Blockchain</h3>
                  </div>
                  </span>
                </div>
              </div>
              
            </div>
          </section>

          {/* --- PROJECTS SECTION --- */}
          <section ref={projectsRef} className="mb-40 scroll-mt-32">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-6xl font-black text-white italic uppercase tracking-tighter">Projects</h2>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectList.map((p, i) => (
                <ProjectCard key={i} {...p} />
              ))}
            </div>
          </section>

          {/* --- CONTACT SECTION --- */}
          <section ref={contactRef} className="scroll-mt-32 bg-zinc-900/20 p-1 bg-gradient-to-br from-zinc-800/50 to-transparent rounded-[3.5rem]">
            <div className="bg-[#050505]/80 p-12 md:p-20 rounded-[3.4rem] backdrop-blur-3xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                  <h2 className="text-6xl font-black text-white mb-8 uppercase tracking-tighter">Let's <br/>Connect</h2>
                  <p className="text-zinc-500 mb-12 font-mono text-lg italic leading-relaxed">
                    Interested in collaboration or just want to discuss system architecture? My terminal is always open.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-5 text-zinc-300 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                        <Mail size={20} />
                      </div>
                      <span className="text-lg">aayushkumarrathor367@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-5 text-zinc-300">
                      <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center">
                        <MessageSquare size={20} />
                      </div>
                      <span className="text-lg tracking-tight text-zinc-500">Available Mon - sun, 09:00 AM - 2:00 AM</span>
                    </div>
                  </div>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <input type="text" placeholder="NAME" className="bg-white/5 border border-zinc-800 p-5 rounded-2xl focus:border-orange-500 focus:bg-white/10 transition-all outline-none font-mono text-sm uppercase tracking-widest" />
                    <input type="email" placeholder="EMAIL" className="bg-white/5 border border-zinc-800 p-5 rounded-2xl focus:border-orange-500 focus:bg-white/10 transition-all outline-none font-mono text-sm uppercase tracking-widest" />
                  </div>
                  <textarea placeholder="PROJECT DETAILS / MESSAGE" rows="5" className="w-full bg-white/5 border border-zinc-800 p-5 rounded-2xl focus:border-orange-500 focus:bg-white/10 transition-all outline-none font-mono text-sm uppercase tracking-widest"></textarea>
                  <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-6 rounded-2xl transition-all uppercase tracking-[0.3em] shadow-[0_10px_30px_rgba(234,88,12,0.2)]">
                    Send Transmission
                  </button>
                </form>
              </div>
            </div>
          </section>

          <footer className="mt-32 text-center border-t border-zinc-900 pt-16 text-zinc-600 font-mono text-[10px] uppercase tracking-[0.5em]">
              Built with React & Vanta.js // © 2026 Aayush Kumar // Dev_Mode_V3.0
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;