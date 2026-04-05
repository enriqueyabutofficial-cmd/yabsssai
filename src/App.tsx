import { motion } from "motion/react";
import { 
  Menu, 
  ArrowRight, 
  ArrowLeft, 
  School, 
  Network, 
  Rocket, 
  BarChart3, 
  Eye, 
  Bot, 
  Store,
  CheckCircle2,
  MapPin,
  User,
  Building2,
  MessageSquare,
  Mic,
  Users,
  Globe,
  X,
  Instagram,
  Youtube,
  Facebook,
  Settings
} from "lucide-react";
import { useState, Fragment } from "react";
import NatureBackground from "./components/NatureBackground";
import ChatBot from "./components/ChatBot";
import WindSoundController from "./components/WindSoundController";

import { playClickSound } from './lib/sounds';

const TALLY_FORM_URL = "https://tally.so/r/68RWdN";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-navy-light/10 backdrop-blur-md px-6 lg:px-20 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-display font-bold tracking-modern text-cream">
            Yabsss<span className="text-accent">AI</span> Solutions
          </h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          {[
            { name: "My Story", neon: "neon-cyan" },
            { name: "AI Solutions", neon: "neon-cyan" },
            { name: "Roadmap", neon: "neon-cyan" },
            { name: "About Founder", neon: "neon-cyan" }
          ].map((item) => (
            <a 
              key={item.name}
              href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`} 
              className={`text-sm font-bold text-cream/90 transition-all duration-300 ${item.neon}`}
              onClick={playClickSound}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href={TALLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="hidden sm:flex h-10 items-center justify-center rounded-full bg-accent px-6 text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,188,212,0.5)] hover:shadow-[0_0_25px_rgba(0,188,212,0.8)]"
          >
            Contact Us
          </a>
          <button 
            className="md:hidden text-cream"
            onClick={() => {
              playClickSound();
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-navy-dark border-b border-accent/10 p-6 flex flex-col gap-4 shadow-lg"
        >
          {[
            { name: "My Story", neon: "neon-cyan" },
            { name: "AI Solutions", neon: "neon-cyan" },
            { name: "Roadmap", neon: "neon-cyan" },
            { name: "About Founder", neon: "neon-cyan" }
          ].map((item) => (
            <a 
              key={item.name}
              href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`} 
              className={`text-lg font-bold text-cream/90 transition-all duration-300 ${item.neon}`}
              onClick={() => {
                playClickSound();
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-4">
            <a 
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-full flex items-center justify-center rounded-full bg-accent text-white font-bold shadow-[0_0_15px_rgba(0,188,212,0.5)]"
              onClick={() => {
                playClickSound();
                setIsMenuOpen(false);
              }}
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 pt-40 pb-20 md:py-20 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      
      <div className="flex items-center gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: [0, -20, 0] 
          }}
          transition={{
            opacity: { duration: 0.5 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative flex justify-center perspective-1000"
        >
          {/* Left Speech Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -top-28 left-1/2 -translate-x-1/2 md:top-[42%] md:left-0 md:translate-x-0 md:-left-40 lg:-left-64 z-20 cursor-pointer group"
            onClick={() => {
              playClickSound();
            }}
          >
            <div className="relative bg-accent text-white px-6 py-4 rounded-3xl shadow-2xl border border-accent/10 text-sm font-bold w-[200px] sm:w-[240px] leading-relaxed transition-all group-hover:scale-105 heartbeat-cyan">
              Hi, I'm Capy, and I got Capybara AI's working for me to work for you.
              {/* Desktop Tail */}
              <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-accent border-t border-r border-accent/10 rotate-45"></div>
              {/* Mobile Tail */}
              <div className="md:hidden absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-accent"></div>
            </div>
          </motion.div>

          <div 
            className="relative w-[240px] h-[240px] min-[400px]:w-[300px] min-[400px]:h-[300px] sm:w-[576px] sm:h-[576px] cursor-pointer transition-all duration-500 preserve-3d"
            style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            onClick={() => {
              playClickSound();
              setIsFlipped(!isFlipped);
            }}
          >
            {/* Front */}
            <div className="absolute inset-0 backface-hidden">
              <img 
                src="/NoBackgroundCapybara.png" 
                alt="Capybara mascot" 
                className="w-full h-full object-contain cyan-glow"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Back */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center bg-navy-light rounded-full p-8 shadow-2xl border-4 border-accent">
              <p className="text-white font-display font-bold text-xl sm:text-3xl leading-tight">
                Yes, Gemini (NanoBanana 2) generated this
              </p>
            </div>
          </div>
        </motion.div>
        
        <div className="flex flex-col items-start">
          <span className="text-[10px] font-bold text-cream/40 uppercase tracking-tighter bg-white/5 px-2 py-1 rounded">Version 2.0</span>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-cream/60 lowercase">less grind. more growth.</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-4xl font-display text-5xl font-black leading-[1.1] tracking-modern text-cream sm:text-7xl lg:text-8xl lowercase"
      >
        Take a deep breath <br/>
        <span className="bg-gradient-to-r from-cream via-accent to-cream bg-clip-text text-transparent">This is ai for you.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-cream/90 sm:text-xl"
      >
        We believe every business—and every creator—has a heartbeat. It’s your operating system, the way you move through your day. We’re here to give yours a turbo boost. By plugging AI directly into your personal workflow, we strip away the friction of "busy work" so you can focus on the big ideas. It’s about building a smarter work ethic where the systems do the heavy lifting, leaving you with the energy to lead.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
      >
        <a href="#my-story" onClick={playClickSound} className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-full bg-accent px-8 text-lg font-bold text-white transition-all hover:scale-105 active:scale-95 sm:w-auto shadow-[0_0_20px_rgba(0,188,212,0.4)]">
          Read My Story
          <ArrowRight className="absolute right-4 translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 w-5 h-5" />
        </a>
        <a href="#roadmap" onClick={playClickSound} className="flex h-14 w-full items-center justify-center rounded-full border border-accent/20 bg-transparent px-8 text-lg font-bold text-cream transition-colors hover:bg-white/10 sm:w-auto">
          View Roadmap
        </a>
      </motion.div>

    </section>
  );
};

const MyStory = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 lg:px-20 text-center" id="my-story">
      <div className="flex flex-col items-center gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl w-full overflow-hidden rounded-3xl shadow-2xl border border-white/20"
        >
          <img 
            src="/capyworld.png" 
            alt="Capy World" 
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl bg-navy-light p-8 md:p-12 rounded-3xl shadow-2xl border border-accent/20 backdrop-blur-sm heartbeat-cyan"
        >
          <h2 className="text-4xl font-display font-bold tracking-modern text-accent sm:text-5xl mb-8">My Story</h2>
          <div className="space-y-6 text-lg font-medium text-cream/90 leading-relaxed">
            <p>
              It all started with a simple realization: the AI revolution isn't just about code; it's about empowerment. 
              As an entrepreneur in the Philippines, I saw the immense potential for AI to bridge gaps and create 
              unprecedented opportunities for local businesses.
            </p>
            <p>
              YabsssAI Solutions was born from the desire to make advanced technology accessible, understandable, and 
              above all, "chill." I wanted to build a platform that doesn't just provide tools, but shares a 
              vision of a future where everyone can scale their impact with ease.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  const phases = [
    {
      phase: "TERM 01",
      title: "Learning and Set Up",
      desc: "• Launched our YouTube channel as a test and started generating AI videos\n• Successfully reached 100 subscribers\n• Learned from builders in the AI space\n• Began implementing systems\n• Learned through YouTube with the help of Notebook LLM",
      date: "Jan — Mar",
      icon: <Rocket className="w-5 h-5 text-white" />,
      color: "#00BCD4", // Cyan
    },
    {
      phase: "TERM 02",
      title: "B2B Implementation",
      desc: "• Offering AI systems to companies by teaching clients how to use, empower, and strengthen the AI so that it can perform many tasks for companies\n• Empowering clients to master AI tools and integrate them into their core operations\n• Target Market: CEOs, Founders, and individual clients interested in learning how to implement AI in their workflows",
      date: "Apr — Jun",
      icon: <Network className="w-5 h-5 text-white" />,
      color: "#00BCD4", // Cyan
      isCurrent: true
    },
    {
      phase: "TERM 03",
      title: "Brand Expansion",
      desc: "• We grow our brand or community\n• We get more clients\n• We build better systems\n• we build in public as well, check our X",
      date: "Jul — Oct",
      icon: <Store className="w-5 h-5 text-white" />,
      color: "#00BCD4", // Cyan
    },
    {
      phase: "TERM 04",
      title: '"The Sky Is The Limit"',
      desc: "Let's see how creative we can get",
      date: "Nov — Dec",
      icon: <BarChart3 className="w-5 h-5 text-white" />,
      color: "#00BCD4", // Cyan
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-navy-dark py-32" id="roadmap">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-[10px] font-bold tracking-widest text-accent uppercase mb-4">
            Roadmap
          </div>
          <h2 className="text-4xl font-display font-bold tracking-modern text-accent sm:text-5xl">Our 2026 Journey</h2>
          <p className="mt-4 text-lg font-medium text-cream/70 max-w-2xl mx-auto">The strategic evolution of YabsssAI Solutions from foundation to full-scale deployment.</p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 h-full w-1 -translate-x-1/2 overflow-hidden rounded-full bg-navy-light">
            <div className="h-full w-full bg-gradient-to-b from-accent via-cyan-400 to-accent shadow-[0_0_15px_rgba(0,188,212,0.5)]"></div>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {phases.map((p, i) => (
              <div key={i} className={`relative flex flex-col lg:flex-row items-center ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot & Icon */}
                <div className="absolute left-8 lg:left-1/2 top-0 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-10">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-accent shadow-[0_0_20px_rgba(0,188,212,0.6)] border-4 border-navy-dark">
                    <div className="absolute inset-0 animate-ping rounded-full bg-accent opacity-20"></div>
                    {p.icon}
                  </div>
                  
                  {/* Currently Here Badge */}
                  {p.isCurrent && (
                    <div className={`absolute left-16 lg:left-auto ${i % 2 === 0 ? 'lg:left-16' : 'lg:right-16'} top-1/2 -translate-y-1/2 whitespace-nowrap animate-slow-fade`}>
                      <div className="flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-[10px] font-bold text-accent shadow-sm border border-accent/30">
                        {i % 2 === 0 ? <ArrowLeft className="w-3 h-3" /> : null}
                        CURRENTLY HERE
                        {i % 2 !== 0 ? <ArrowRight className="w-3 h-3" /> : null}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Container */}
                <div className={`w-full lg:w-1/2 pl-20 lg:pl-0 ${i % 2 === 0 ? 'lg:pr-24' : 'lg:pl-24'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-navy-light p-8 shadow-md transition-all hover:shadow-xl heartbeat-cyan">
                      
                      <div>
                        <span className="text-xs font-bold tracking-widest text-accent uppercase">{p.phase}</span>
                        <h3 className="mt-2 text-2xl font-display font-bold text-cream">{p.title}</h3>
                        <p className="mt-4 text-cream/70 font-medium leading-relaxed whitespace-pre-line">{p.desc}</p>
                        
                        <div className="mt-6 flex justify-end">
                          <span className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent">
                            {p.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AISolutions = () => {
  const features = [
    {
      title: "AI Executive Assistant",
      desc: "builds you a personal ai system that handles tasks, creates workflows, and manages your digital workspace. includes skills training.",
      pricing: {
        "setup": "$500 / ₱28,000",
        "monthly support": "$100 / ₱5,500"
      },
      useCases: [
        "you're drowning in files, tabs, and tasks with no system",
        "you want an ai that actually knows your business and handles it",
        "you need workflows built so things run even when you're not working",
        "you want to delegate to ai but don't know where to start"
      ],
      icon: <User className="w-6 h-6" />,
      color: "text-accent",
      bg: "bg-accent/10",
      heartbeat: "heartbeat-cyan"
    },
    {
      title: "Social Media Chat Agent",
      desc: "an agent that manages your social media page 24/7 — responding, engaging, and growing your audience with real organic interaction. tested live on x.",
      pricing: {
        "single platform": "setup $300 / ₱17,000 | monthly $150 / ₱8,500",
        "all platforms": "setup $500 / ₱28,000 | monthly $250 / ₱14,000"
      },
      platforms: "X, Facebook, Instagram, LinkedIn",
      useCases: [
        "your page gets dms and comments but you can't reply to all of them",
        "you want something managing your page 24/7 without hiring staff",
        "you need real engagement — actual replies that make sense, not bots",
        "choose fully autonomous or stay in control and review before it posts"
      ],
      icon: <MessageSquare className="w-6 h-6" />,
      color: "text-accent",
      bg: "bg-accent/10",
      heartbeat: "heartbeat-cyan"
    },
    {
      title: "Content Factory",
      desc: "give us your brand identity. we build a system that generates and posts images and videos on a 24/7 schedule — your brand stays visible without you lifting a finger.",
      pricing: {
        "setup": "$500 / ₱28,000",
        "monthly": "$250 / ₱14,000"
      },
      useCases: [
        "your brand goes silent for days because you have no time to post",
        "you want your page active 24/7 with content that fits your brand",
        "you need images and videos consistently going out without doing it manually",
        "you want your brand growing on autopilot while you focus on closing deals"
      ],
      icon: <Eye className="w-6 h-6" />,
      color: "text-accent",
      bg: "bg-accent/10",
      heartbeat: "heartbeat-cyan"
    },
    {
      title: "Cold Email Outreach System",
      desc: "automated email sequences that reach your target clients consistently. set it up once and let it run.",
      pricing: {
        "setup": "$300 / ₱17,000",
        "monthly": "$120 / ₱7,000"
      },
      useCases: [
        "you have a product or service but no consistent way to reach new clients",
        "you're manually sending emails one by one and it's not scaling",
        "you want automated sequences that follow up without you chasing",
        "you need a system that keeps your pipeline full while you sleep"
      ],
      icon: <Network className="w-6 h-6" />,
      color: "text-accent",
      bg: "bg-accent/10",
      heartbeat: "heartbeat-cyan"
    },
    {
      title: "Research Agent / Lead Scraper",
      desc: "powered by perplexity. searches and scrapes the internet to compile a targeted list of emails for your product or service.",
      pricing: {
        "setup": "$200 / ₱11,000",
        "monthly": "$100 / ₱5,500",
        "one-off report": "$50 / ₱2,800"
      },
      useCases: [
        "you don't know who to email or where to find your ideal clients",
        "you're spending hours researching leads manually",
        "you need a fresh list of contacts specific to your niche or industry",
        "you want names, emails, and companies compiled and ready to use"
      ],
      icon: <BarChart3 className="w-6 h-6" />,
      color: "text-accent",
      bg: "bg-accent/10",
      heartbeat: "heartbeat-cyan"
    },
    {
      title: "Website Building",
      desc: "we create professional-looking websites for our clients. a solid digital home for your brand that converts visitors into customers.",
      pricing: {
        "setup": "$300 / ₱17,000",
        "monthly": "$50 / ₱2,800"
      },
      useCases: [
        "you need a professional online presence that reflects your brand",
        "your current website is outdated or doesn't convert",
        "you want a fast, mobile-responsive site without the headache",
        "you need a reliable partner for ongoing maintenance and updates"
      ],
      icon: <Globe className="w-6 h-6" />,
      color: "text-accent",
      bg: "bg-accent/10",
      heartbeat: "heartbeat-cyan"
    },
    {
      title: "Full Growth Stack",
      isBestValue: true,
      desc: "everything you need to grow organically — without ads. content going out, comments getting replied to, leads being found, emails being sent. all on autopilot.",
      includes: "social media chat agent + content factory + cold email outreach + research agent",
      pricing: {
        "setup": "$1,000 / ₱56,000",
        "monthly": "$500 / ₱28,000"
      },
      useCases: [
        "you want your entire online presence running on autopilot",
        "your brand needs to grow organically without paying for ads",
        "you want content, engagement, leads, and outreach all rugged without you doing it daily",
        "you're serious about building an audience and a pipeline at the same time"
      ],
      icon: <Rocket className="w-6 h-6" />,
      color: "text-accent",
      bg: "bg-accent/10",
      heartbeat: "heartbeat-cyan"
    },
    {
      title: "Custom Automations",
      desc: "tailored ai workflows built for your specific operations—from private file research to complex agentic systems.",
      pricing: {
        "setup": "$400 / ₱22,000",
        "monthly": "custom quote"
      },
      useCases: [
        "file intelligence (research on your private pdfs/docs)",
        "custom agentic workers (24/7 autonomous agents)",
        "multi-tool integrations (connecting gemini/claude to any api)"
      ],
      backTitle: "what we do",
      icon: <Settings className="w-6 h-6" />,
      color: "text-accent",
      bg: "bg-accent/10",
      heartbeat: "heartbeat-cyan"
    }
  ];

  return (
    <section className="bg-navy-dark py-32" id="ai-solutions">
      <div className="mx-auto max-w-7xl px-6 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 overflow-hidden rounded-3xl shadow-2xl border border-accent/20 heartbeat-cyan"
        >
          <video 
            src="/video.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-auto"
          />
        </motion.div>
        <div className="mb-16">
          <h2 className="text-4xl font-display font-bold tracking-modern text-accent lowercase">services / packages</h2>
          <p className="mt-4 text-accent font-medium max-w-xl mx-auto lowercase">High-impact AI systems built for modern entrepreneurs who value clarity, efficiency, and growth.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((f, i) => (
            <div key={i} className={`group relative h-[600px] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm [perspective:1000px] bg-transparent ${f.heartbeat}`}>
              {f.isBestValue && (
                <div className="absolute -left-32 top-1/4 hidden xl:block w-48 z-30 pointer-events-none">
                  <motion.div 
                    initial={{ opacity: 0, x: 20, rotate: -5 }}
                    animate={{ 
                      opacity: [1, 1, 0, 0, 1],
                      x: 0, 
                      rotate: -12,
                      y: [0, -10, 0]
                    }}
                    transition={{
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      opacity: { 
                        duration: 10, 
                        repeat: Infinity, 
                        times: [0, 0.4, 0.5, 0.9, 1],
                        ease: "easeInOut"
                      }
                    }}
                    className="bg-accent text-white p-6 rounded-[2rem] shadow-2xl border-2 border-white/40 text-[11px] font-black uppercase tracking-widest leading-relaxed text-center relative heartbeat-accent"
                  >
                    <div className="text-lg mb-1">🔥 PROMO</div>
                    50% off for the first 20 clients
                    <div className="mt-3 pt-3 border-t border-white/20 text-sm font-black">
                      4 / 20 SLOTS TAKEN
                    </div>
                    {/* Speech bubble tail */}
                    <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 bg-accent border-r-2 border-t-2 border-white/40 rotate-45" />
                  </motion.div>
                </div>
              )}
              
              <motion.div 
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Front Side */}
                <div 
                  className={`absolute inset-0 h-full w-full rounded-3xl border border-accent/20 bg-navy-light p-6 flex flex-col items-center ${f.isBestValue ? 'ring-2 ring-accent' : ''}`}
                  style={{ 
                    backfaceVisibility: "hidden", 
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                    zIndex: 2
                  }}
                >
                  {f.isBestValue && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-black px-4 py-1 rounded-full shadow-lg uppercase tracking-widest z-10">
                      Best Value
                    </div>
                  )}
                  <div className={`relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${f.bg} ${f.color}`}>
                    {f.icon}
                  </div>
                  <h3 className="relative z-10 text-xl font-bold text-accent lowercase text-center mb-2">{f.title}</h3>
                  <p className="relative z-10 leading-relaxed text-cream/80 font-medium text-sm text-center mb-3">{f.desc}</p>
                  
                  {f.platforms && (
                    <div className="relative z-10 mb-3 text-[10px] font-bold text-accent/60 uppercase tracking-wider">
                      Available on: {f.platforms}
                    </div>
                  )}

                  {f.includes && (
                    <div className="relative z-10 mb-3 p-3 rounded-2xl bg-accent/5 border border-accent/10 text-[10px] font-bold text-accent uppercase leading-relaxed">
                      Includes: {f.includes}
                    </div>
                  )}

                  <div className="relative z-10 w-full pt-3 border-t border-accent/10 space-y-2">
                    {Object.entries(f.pricing).map(([key, value]) => {
                      const parts = value.split(' | ');
                      return (
                        <div key={key} className="flex flex-col items-center">
                          <span className="text-[10px] uppercase font-black text-accent/40 tracking-widest mb-1">{key}</span>
                          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            {parts.map((part, pIdx) => {
                              const [usd, php] = part.split(' / ');
                              return (
                                <div key={pIdx} className="flex flex-col items-center">
                                  <span className="text-sm font-bold text-accent">{usd}</span>
                                  {php && <span className="text-[10px] font-medium text-accent/60 leading-tight">{php}</span>}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="relative z-10 mt-auto text-[10px] font-bold text-accent/40 uppercase tracking-widest flex items-center gap-2">
                    hover to flip <ArrowRight className="w-3 h-3" />
                  </div>

                  <div className="relative z-10 mt-3 w-full">
                    <a 
                      href={TALLY_FORM_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={playClickSound}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3 text-[11px] font-black text-white shadow-lg transition-all hover:scale-105 hover:shadow-accent/20 active:scale-95 uppercase tracking-widest"
                    >
                      Contact Us
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className={`absolute inset-0 h-full w-full rounded-3xl border border-accent/20 bg-navy-light p-6 flex flex-col ${f.isBestValue ? 'ring-2 ring-accent' : ''}`}
                  style={{ 
                    backfaceVisibility: "hidden", 
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <h3 className="relative z-10 text-xl font-bold text-accent lowercase text-center mb-4">{f.backTitle || "use cases"}</h3>
                  <ul className="relative z-10 space-y-2 overflow-y-auto mb-3 flex-1">
                    {f.useCases.map((useCase, idx) => (
                      <li key={idx} className="relative z-10 flex items-start gap-3 text-sm font-medium text-accent">
                        {!/^\d+\./.test(useCase) && <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />}
                        {useCase}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="relative z-10 mt-auto space-y-2">
                    <a 
                      href={TALLY_FORM_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={playClickSound}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3 text-[10px] font-black text-white shadow-lg transition-all hover:scale-105 hover:shadow-accent/20 active:scale-95 uppercase tracking-widest"
                    >
                      Contact Us
                      <ArrowRight className="w-3 h-3" />
                    </a>
                    <div className="text-center">
                      <span className="text-[10px] uppercase font-black text-accent/40 tracking-widest">Hover to flip back</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 lg:px-20 text-center flex justify-center" id="about-founder">
      <div className="max-w-3xl bg-navy-light p-8 md:p-12 rounded-3xl shadow-2xl border border-accent/20 heartbeat-cyan overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-96 h-96 mx-auto mb-8"
        >
          <img 
            src="/founderyabsss.png" 
            alt="Founder Yabsss" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <h2 className="text-4xl font-display font-bold tracking-modern text-accent sm:text-5xl mb-8">About Founder Yabsss</h2>
        <p className="text-xl text-cream/90 font-medium leading-relaxed lowercase">
          i’m a creator and entrepreneur building in public. my mission is simple: take the complex world of ai and turn it into practical tools for everyday businesses. less grind, more growth—that’s the yabsss way.
        </p>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 lg:px-20 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-navy-light border border-accent/20 px-8 py-20 backdrop-blur-lg shadow-2xl flex flex-col items-center heartbeat-cyan"
      >
        {/* Small Capy Mascot */}
        <a 
          href={TALLY_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mb-8 flex flex-col items-center group/capy transition-transform hover:scale-105 cursor-pointer"
        >
          <img 
            src="/NoBackgroundCapybara.png" 
            alt="Small Capy" 
            className="w-24 h-24 object-contain cyan-glow"
            referrerPolicy="no-referrer"
          />
        </a>

        <h2 className="text-4xl font-display font-bold tracking-modern text-cream sm:text-5xl">Ready to scale with Capy's AI army?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-cream/90">Have a question or just want to see what's possible? Drop your inquiry below. Whether it's a quick question or a complex project, we're here to help.</p>
        <div className="mt-10 flex flex-col items-center gap-8">
          <a 
            href={TALLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="inline-flex items-center justify-center h-14 rounded-full bg-accent px-10 text-lg font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,188,212,0.4)] hover:shadow-[0_0_35px_rgba(0,188,212,0.7)]"
          >
            Contact Us
          </a>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <a 
              href="https://x.com/yabsssai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-navy-dark text-accent transition-all hover:scale-110 active:scale-90 shadow-lg border border-accent/20"
              title="X (Twitter)"
            >
              <X size={24} />
            </a>
            <a 
              href="https://www.instagram.com/yabsssai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-navy-dark text-accent transition-all hover:scale-110 active:scale-90 shadow-lg border border-accent/20"
              title="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.tiktok.com/@yabsssai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-navy-dark text-accent transition-all hover:scale-110 active:scale-90 shadow-lg font-bold text-[11px] border border-accent/20"
              title="TikTok"
            >
              TIKTOK
            </a>
            <a 
              href="https://www.youtube.com/@yabsssai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-navy-dark text-accent transition-all hover:scale-110 active:scale-90 shadow-lg border border-accent/20"
              title="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=963267330212777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-navy-dark text-accent transition-all hover:scale-110 active:scale-90 shadow-lg border border-accent/20"
              title="Facebook"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = ({ onOpenPrivacy, onOpenTerms }: { onOpenPrivacy: () => void, onOpenTerms: () => void }) => {
  return (
    <footer className="border-t border-accent/10 bg-navy-dark px-6 py-12 lg:px-20 backdrop-blur-md">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-cream">Yabsss<span className="text-accent">AI</span> Solutions</span>
        </div>
        <div className="flex items-center gap-8 text-sm font-bold text-cream/60">
          <button onClick={() => { playClickSound(); onOpenPrivacy(); }} className="hover:text-accent transition-colors">Privacy Policy</button>
          <button onClick={() => { playClickSound(); onOpenTerms(); }} className="hover:text-accent transition-colors">Terms of Service</button>
          <a className="hover:text-accent transition-colors" href="https://tally.so/r/68RWdN" target="_blank" rel="noopener noreferrer" onClick={playClickSound}>Contact</a>
        </div>
        <p className="text-sm text-cream/30">© 2026 YabsssAI Solutions. Build with chill.</p>
      </div>
    </footer>
  );
};

const LegalModal = ({ isOpen, onClose, title, content }: { isOpen: boolean, onClose: () => void, title: string, content: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-3xl bg-navy-light shadow-2xl border border-accent/20 flex flex-col heartbeat-cyan"
      >
        <div className="p-6 border-b border-accent/10 flex items-center justify-between bg-accent/5">
          <h3 className="text-2xl font-display font-bold text-accent">{title}</h3>
          <button onClick={() => { playClickSound(); onClose(); }} className="p-2 hover:bg-accent/10 rounded-full transition-colors">
            <X className="w-6 h-6 text-accent" />
          </button>
        </div>
        <div className="p-8 overflow-y-auto text-cream/90 leading-relaxed font-medium">
          {content}
        </div>
        <div className="p-6 border-t border-accent/10 bg-accent/5 flex justify-end">
          <button 
            onClick={() => { playClickSound(); onClose(); }}
            className="px-6 py-2 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [activeLegal, setActiveLegal] = useState<'privacy' | 'terms' | null>(null);

  const legalContent = {
    privacy: (
      <div className="space-y-4">
        <p>At YabsssAI Solutions, we take your privacy seriously. This policy outlines how we handle your data.</p>
        <h4 className="font-bold text-accent">1. Data Collection</h4>
        <p>We collect information you provide directly to us, such as when you fill out our contact form or interact with our AI agents.</p>
        <h4 className="font-bold text-accent">2. Use of Information</h4>
        <p>Your data is used solely to provide and improve our AI automation services and to communicate with you about your projects.</p>
        <h4 className="font-bold text-accent">3. Data Security</h4>
        <p>We implement industry-standard security measures to protect your personal information from unauthorized access.</p>
        <p>For any questions regarding your privacy, please contact us through our official channels.</p>
      </div>
    ),
    terms: (
      <div className="space-y-4">
        <p>By using YabsssAI Solutions' services, you agree to the following terms and conditions.</p>
        <h4 className="font-bold text-accent">1. Service Agreement</h4>
        <p>We provide AI-powered business automation and consulting services. Specific project scopes are defined in individual service agreements.</p>
        <h4 className="font-bold text-accent">2. Intellectual Property</h4>
        <p>All AI workflows and custom solutions developed for clients remain the property of YabsssAI Solutions unless otherwise specified in writing.</p>
        <h4 className="font-bold text-accent">3. Limitation of Liability</h4>
        <p>While we strive for 100% accuracy, AI outputs should be verified. We are not liable for business decisions made based on automated systems.</p>
        <p>These terms are subject to change as our technology and services evolve.</p>
      </div>
    )
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-navy-dark selection:bg-accent/30">
      <NatureBackground />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MyStory />
        <AISolutions />
        <Roadmap />
        <AboutUs />
        <CTA />
      </main>
      <Footer onOpenPrivacy={() => setActiveLegal('privacy')} onOpenTerms={() => setActiveLegal('terms')} />
      <ChatBot />
      <WindSoundController />

      <LegalModal 
        isOpen={activeLegal === 'privacy'} 
        onClose={() => setActiveLegal(null)} 
        title="Privacy Policy" 
        content={legalContent.privacy}
      />
      <LegalModal 
        isOpen={activeLegal === 'terms'} 
        onClose={() => setActiveLegal(null)} 
        title="Terms of Service" 
        content={legalContent.terms}
      />
    </div>
  );
}
// test4
const w = 4;
