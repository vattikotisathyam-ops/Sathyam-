/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Scissors, 
  Users, 
  CheckCircle, 
  Instagram, 
  Facebook, 
  ExternalLink, 
  Menu, 
  X,
  MessageCircle,
  Shirt,
  Wand2,
  Brush
} from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';

// --- Constants ---
const SHOP_NAME = "Sathyam Tailorshop";
const CONTACT_NUMBER = "9848243083";
const WHATSAPP_LINK = `https://wa.me/91${CONTACT_NUMBER}`;
const LOCATION = "Nampally Mandal, Nalgonda District, Telangana, India";
const WORKING_HOURS = "7:00 AM – 7:00 PM";

const SERVICES = [
  {
    title: "Men's Tailoring",
    description: "Bespoke shirts, trousers, and suits crafted with precision.",
    icon: <Shirt className="w-8 h-8" />,
    image: "https://picsum.photos/seed/men-suit/600/400"
  },
  {
    title: "Women's Tailoring",
    description: "Custom dresses, ethnic wear, and daily fashion essentials.",
    icon: <Users className="w-8 h-8" />,
    image: "https://picsum.photos/seed/women-fashion/600/400"
  },
  {
    title: "Blouse Designing",
    description: "Exquisite blouse stitching with modern and traditional designs.",
    icon: <Brush className="w-8 h-8" />,
    image: "https://picsum.photos/seed/blouse-design/600/400"
  },
  {
    title: "Alterations",
    description: "Expert fitting adjustments for all types of garments.",
    icon: <Scissors className="w-8 h-8" />,
    image: "https://picsum.photos/seed/tailor-scissors/600/400"
  },
  {
    title: "Custom Stitching",
    description: "Bring your unique designs to life with our custom service.",
    icon: <Wand2 className="w-8 h-8" />,
    image: "https://picsum.photos/seed/fabric-stitch/600/400"
  }
];

const GALLERY_IMAGES = [
  "input_file_1.png",
  "https://picsum.photos/seed/suit1/800/1000",
  "https://picsum.photos/seed/ethic1/800/800",
  "https://picsum.photos/seed/fabric1/800/1200",
  "https://picsum.photos/seed/details1/800/800",
  "https://picsum.photos/seed/boutique/800/1000",
];

// --- Components ---

function Section({ children, id, className = "" }: { children: ReactNode, id: string, className?: string }) {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
      {children}
    </section>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-sm' : 'bg-dark/20 border-b grid-line py-6'}`}>
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6">
        <a href="#home" className="flex flex-col">
          <span className="font-serif text-2xl font-bold tracking-widest uppercase text-accent">SATHYAM</span>
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 text-primary -mt-1">Tailorshop</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors text-primary/70 hover:text-accent"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[9px] uppercase tracking-widest opacity-40 text-primary">Nampally, Nalgonda</span>
            <span className="text-xs font-bold text-primary">{CONTACT_NUMBER}</span>
          </div>
          <div className="w-[1px] h-8 bg-grid-line"></div>
          <button 
            className="md:hidden p-2 rounded-full text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile menu trigger for small screens */}
        <button 
          className="lg:hidden p-2 rounded-full text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark border-b grid-line py-8 flex flex-col items-center gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-primary font-serif text-xl font-medium"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark font-sans text-primary overflow-x-hidden selection:bg-accent selection:text-dark">
      <Navbar />

      {/* Hero Section - Geometric Balance Layout */}
      <section id="home" className="relative md:h-screen w-full flex items-center justify-center pt-24 md:pt-0 overflow-hidden border-b grid-line">
        <div className="max-w-[1440px] w-full grid grid-cols-12 h-full">
          {/* Left Column: Text Content */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 p-8 md:p-20 flex flex-col justify-center border-r grid-line relative h-full">
            <div className="absolute top-20 left-20 w-20 h-[1px] bg-accent opacity-40 hidden md:block" />
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <span className="text-accent font-serif italic text-xl mb-4 block">Hand-crafted Elegance</span>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 lg:skew-text">
                <span className="italic font-normal">Perfect</span><br/>Stitching,<br/>Perfect <span className="text-accent italic">Style</span>
              </h1>
              <p className="text-primary/60 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
                Bespoke tailoring services tailored for the modern individual. From intricate blouse designs to precision-cut suits, we bring decades of Telangana's craftsmanship to every thread.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-accent text-dark px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all text-center"
                >
                  Contact Now
                </a>
                <a 
                  href="#about" 
                  className="border border-accent text-accent px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent/10 transition-all text-center"
                >
                  Our Story
                </a>
              </div>

              <div className="mt-20 flex items-center gap-10">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Opening Hours</span>
                  <span className="text-sm font-semibold">{WORKING_HOURS}</span>
                </div>
                <div className="w-12 h-[1px] bg-grid-line hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Location</span>
                  <span className="text-sm font-semibold">Nampally Mandal, TS</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Image Container */}
          <div className="col-span-12 md:col-span-6 lg:col-span-7 bg-dark-surface relative overflow-hidden group">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="h-full w-full"
            >
              <img 
                src="input_file_0.png" 
                alt="Sathyam Tailorshop Sewing Machine" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent" />
            </motion.div>
            
            <div className="absolute bottom-12 right-12 text-right hidden lg:block">
              <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 text-primary block mb-2">Artisan Workshop</span>
              <div className="h-[1px] w-24 bg-accent ml-auto mb-4" />
              <span className="serif text-3xl italic gold-text">Est. 2012</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Preserving structure but updating styling */}
      <Section id="about" className="bg-dark border-b grid-line">
        <div className="grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 border border-grid-line p-4 bg-dark">
              <img 
                src="input_file_1.png" 
                alt="About Sathyam Tailorshop workshop" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-accent opacity-40 -z-0" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-accent opacity-40 -z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent uppercase tracking-[0.3em] font-bold text-[10px] mb-6 block">Our Heritage</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 leading-tight">Decades of <br/><span className="text-accent italic font-normal">Craftsmanship</span></h2>
            <p className="text-primary/50 text-base mb-6 leading-relaxed">
              At <strong className="text-primary font-bold">Sathyam Tailorshop</strong>, every thread is an obsession. Located in Nampally, Telangana, we have built a reputation for perfection through patience and precision.
            </p>
            <p className="text-primary/50 text-base mb-10 leading-relaxed border-l-2 border-accent/20 pl-6 italic">
              "We don't just stitch clothes; we engineer confidence. Every garment is a technical feat hidden behind elegant drapes."
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Perfect Fit", desc: "Scientific measuring process" },
                { title: "Timely Delivery", desc: "Strict deadline adherence" },
                { title: "Quality Fabric", desc: "Premium sourced materials" },
                { title: "Artisan Skill", desc: "Generational techniques" }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="mt-1 text-accent"><CheckCircle size={16} /></div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-[11px] opacity-40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Services Section - Geometric Card Patterns */}
      <Section id="services" className="bg-dark-surface border-b grid-line">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-accent uppercase tracking-[0.3em] font-bold text-[10px] mb-4 block">Specialized Services</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold">Bespoke Options</h2>
          </div>
          <p className="max-w-md text-primary/40 text-sm leading-relaxed">Systematic approach to tailoring across categories. Choose from our standard services or request a custom consult.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 max-w-7xl mx-auto border-t border-l grid-line">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 border-r border-b grid-line bg-dark-surface hover:bg-dark transition-colors duration-500 flex flex-col justify-between min-h-[400px]"
            >
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-mono text-accent mb-6">0{index + 1}</span>
                <div className="text-accent mb-8 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-primary/40 text-xs mb-8 leading-relaxed line-clamp-3">{service.description}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="w-8 h-[1px] bg-accent/20 group-hover:w-16 transition-all duration-500" />
                <div className="w-10 h-10 border border-accent/20 rounded-full flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                  <Scissors size={14} className="text-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Gallery Section - Minimal Grid */}
      <Section id="gallery" className="bg-dark border-b grid-line">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent uppercase tracking-[0.3em] font-bold text-[10px] mb-4 block">Archive</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 italic">Selected Works</h2>
          <div className="h-[1px] w-20 bg-accent mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 max-w-[1400px] mx-auto border border-grid-line">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square overflow-hidden group border border-grid-line"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-all flex items-end p-6">
                <div className="flex justify-between items-center w-full">
                  <span className="text-[10px] uppercase tracking-widest text-white/80">Ref. SNL-2024-0{idx+1}</span>
                  <ExternalLink size={14} className="text-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section - Geometric Form */}
      <Section id="contact" className="bg-dark-surface">
        <div className="grid lg:grid-cols-2 gap-0 max-w-[1400px] mx-auto border grid-line">
          <div className="p-10 md:p-20 border-r grid-line flex flex-col justify-center">
            <span className="text-accent uppercase tracking-[0.3em] font-bold text-[10px] mb-6 block">Communication</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-10">Get In Touch</h2>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-grid-line px-0 py-4 focus:outline-none focus:border-accent text-sm transition-colors" placeholder="Customer Name" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40">Phone Number</label>
                <input type="tel" className="w-full bg-transparent border-b border-grid-line px-0 py-4 focus:outline-none focus:border-accent text-sm transition-colors" placeholder="+91 00000 00000" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40">Inquiry Details</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-grid-line px-0 py-4 focus:outline-none focus:border-accent text-sm transition-colors resize-none" placeholder="Brief about your stitching requirement..."></textarea>
              </div>
              <button className="bg-accent text-dark w-full md:w-auto px-16 py-5 text-[11px] font-bold uppercase tracking-[0.3em] hover:brightness-110 transition-all mt-8">
                Request Consult
              </button>
            </form>
          </div>

          <div className="bg-dark p-0 flex flex-col">
            <div className="p-10 md:p-20 flex-grow">
              <h3 className="font-serif text-3xl font-bold mb-8 italic">Studio Address</h3>
              <div className="space-y-8 mb-12">
                <div className="flex gap-6">
                  <div className="text-accent opacity-50"><MapPin size={24} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Visit Us</span>
                    <span className="text-sm font-semibold max-w-xs">{LOCATION}</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-accent opacity-50"><Clock size={24} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Hours of Operation</span>
                    <span className="text-sm font-semibold">{WORKING_HOURS}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full h-[350px] border-t grid-line relative group grayscale">
              <img 
                src="https://picsum.photos/seed/map-nalgonda/1000/600?grayscale" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center pointer-events-none">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center mb-4">
                    <MapPin className="text-accent" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.4em] opacity-60">Located in Nampally Mandal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer - Minimal Linear */}
      <footer className="bg-dark py-20 px-6 border-t grid-line">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col">
            <h2 className="font-serif text-3xl font-bold uppercase tracking-tighter text-accent">SATHYAM</h2>
            <div className="flex items-center gap-4 mt-2">
              <div className="w-8 h-[1px] bg-accent/30"></div>
              <span className="text-[10px] tracking-[0.4em] uppercase opacity-40 text-primary">Telangana Fine Tailoring</span>
            </div>
          </div>
          
          <div className="flex gap-12 text-[10px] tracking-[0.3em] uppercase font-bold text-primary/40">
            <a href="#" className="hover:text-accent transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">Facebook</a>
          </div>

          <div className="text-[10px] tracking-[0.2em] font-mono opacity-20 uppercase">
            &copy; 2024 Sathyam Tailorshop • Nalgonda District
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp - Stylized */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[100] bg-accent text-dark p-5 rounded-none shadow-2xl hover:scale-105 transition-all active:scale-95 group border border-accent/50"
      >
        <span className="absolute right-full mr-4 bg-dark text-accent border border-accent/20 px-4 py-2 rounded-none text-[10px] font-bold tracking-[0.2em] uppercase shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap pointer-events-none">
          Live Assistance
        </span>
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

