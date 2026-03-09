/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import logoImg from "./assets/IMG_6460.png";
import jovitaImg from "./assets/Jovita_story.jpeg";
import justinImg from "./assets/Justin_story.jpg";
import joannaImg from "./assets/Joanna_story.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Instagram, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight, 
  ChevronDown,
  Sparkles
} from "lucide-react";


const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center mix-blend-difference text-white">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center"
      >
        <img 
          src="/src/assets/IMG_6460.png" 
          alt="CFL YA_NY" 
          className="h-8 sm:h-10 w-auto"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex gap-4 sm:gap-8 items-center"
      >
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-xs sm:text-sm font-medium hover:opacity-50 transition-opacity uppercase tracking-widest"
        >
          About
        </a>
        <a 
          href="#stories" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-xs sm:text-sm font-medium hover:opacity-50 transition-opacity uppercase tracking-widest"
        >
          Stories
        </a>
        <a 
          href="#events" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-xs sm:text-sm font-medium hover:opacity-50 transition-opacity uppercase tracking-widest"
        >
          Events
        </a>
        <a href="https://www.instagram.com/cflya_ny/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white text-black rounded-full hover:scale-110 transition-transform">
          <Instagram size={18} />
        </a>
      </motion.div>
    </nav>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FDFCF8]">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none"
      >
        <h1 className="text-[40vw] font-display font-bold leading-none">CFL</h1>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase border border-black/10 rounded-full">
            Christ For Life Church • Young Adults
          </span>
          <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-8 text-balance">
            WELCOME TO<br />
            <span className="italic font-light">CHRIST FOR LIFE CHURCH</span> <br />
            YOUNG ADULTS
          </h1>
          <p className="max-w-xl mx-auto text-lg text-black/60 font-light leading-relaxed mb-12 text-balance">
            A community of young adults in New York discovering purpose, building faith, and moving together.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-black text-white rounded-full font-medium flex items-center gap-2 group"
            >
              Join Us This Tuesday
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <a 
              href="#events"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border border-black/10 rounded-full font-medium hover:bg-black/5 transition-colors"
            >
              View Schedule
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

const EventSection = () => {
  return (
    <section id="events" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-black/30 mb-4">Upcoming Gathering</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">Don't let your friend miss this one.</h3>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="w-12 h-[1px] bg-black/20"></span>
            15+ WELCOME
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] bg-[#F5F5F0] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
              alt="Young Adults Gathering"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-12 flex flex-col justify-end text-white">
              <div className="flex gap-4 mb-6">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-2">
                  <Calendar size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">March 17</span>
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-2">
                  <Clock size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">7:00 PM</span>
                </div>
              </div>
              <h4 className="text-4xl font-display font-bold mb-4">Tuesday Night Gathering</h4>
              <p className="text-white/70 font-light italic">"Do not conform to the pattern of this world, but be transformed." — Romans 12:2</p>
            </div>
          </motion.div>

          <div className="space-y-12">
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Sparkles />, title: "Worship", desc: "Authentic praise and intimate connection." },
                { icon: <Users />, title: "Message", desc: "Relevant teaching for today's generation." },
                { icon: <Users />, title: "Discussion", desc: "Real talk in small group settings." },
                { icon: <Users />, title: "Dinner", desc: "Community built over a shared meal." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 border border-black/5 rounded-3xl hover:border-black/20 transition-colors"
                >
                  <div className="mb-4 text-black/40">{item.icon}</div>
                  <h5 className="font-display font-bold mb-2 tracking-tight">{item.title}</h5>
                  <p className="text-sm text-black/50 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="p-10 bg-[#FDFCF8] border border-black/5 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-black/30 mb-6">Location</h5>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black text-white rounded-2xl">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-xl mb-1">Christ for Life Church</p>
                    <p className="text-black/50 font-light">610 Carman's Rd, Farmingdale, NY 11735</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-[0.03] pointer-events-none">
                <MapPin size={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InstagramFeed = () => {
  return (
    <section className="py-32 bg-[#FDFCF8] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-black/30 mb-8">Stay Connected</h2>
          <a 
            href="https://www.instagram.com/cflya_ny/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-4xl md:text-6xl font-display font-bold tracking-tighter hover:opacity-50 transition-opacity"
          >
            @CFLYA_NY <ArrowRight size={40} className="hidden md:block" />
          </a>
        </motion.div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="aspect-square bg-black/5 rounded-3xl overflow-hidden"
            >
              <img 
                src={`https://picsum.photos/seed/church${i}/800/800`} 
                alt="Instagram Preview"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-white border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-2xl tracking-tighter mb-4">CFL YA_NY</div>
            <p className="text-black/40 text-sm font-light">© 2026 Christ for Life Church. All rights reserved.</p>
          </div>
          <div className="flex gap-12 text-sm font-medium uppercase tracking-widest text-black/60">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">YouTube</a>
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-[#FDFCF8]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-black/30">Our Community</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-tight">
              A place for the <br />
              <span className="italic font-light">next generation</span> <br />
              of New York.
            </h3>
            <p className="text-lg text-black/60 font-light leading-relaxed max-w-md">
              CFL YA_NY is more than just a gathering. It's a movement of young adults (15+) in Farmingdale and beyond, dedicated to living out the "Christ for Life" mission in a modern world.
            </p>
            <div className="flex gap-12">
              <div>
                <div className="text-4xl font-display font-bold mb-1">15+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-black/30">Age Group</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold mb-1">Second Tuesday of Every Month</div>
                <div className="text-xs font-bold uppercase tracking-widest text-black/30">Gatherings</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-black rounded-3xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
                alt="Community"
                className="w-full h-full object-cover opacity-80 grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 p-8 glass-card rounded-3xl -rotate-6 hidden md:block">
              <p className="text-sm font-medium italic">"Do not be conformed..."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ImpactSection = () => {
  const stats = [
    { label: "Young Adults", value: "50+", suffix: "" },
    { label: "Monthly Gatherings", value: "12", suffix: "/yr" },
    { label: "Community Events", value: "5", suffix: "+" },
    { label: "Lives Transformed", value: "Countless", suffix: "" }
  ];

  return (
    <section className="py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-4 tracking-tighter">
                {stat.value}<span className="text-white/30">{stat.suffix}</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StoriesSection = () => {
  return (
    <section id="stories" className="py-32 bg-[#FDFCF8]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-black/30 mb-6">Stories of Hope</h2>
          <h3 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9]">
            Give life to <br />
            <span className="italic font-light">your story.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Jovita Mesa",
              role: "Young Professional",
              quote: "The community here is real. No masks, just people seeking God and supporting each other through life's transitions.",
              image: "/src/assets/Jovita_story.jpeg"
            },
            {
              name: "Justin Dara",
              role: "College Student",
              quote: "Finding CFL YA_NY changed how I see my purpose. I'm not just a student; I'm part of something bigger.",
              image: "/src/assets/Justin_story.jpg" // Assuming this is Justin's image, since we don't have a specific Justin_story.jpeg
            },
            
            {
              name: "Joanna Jacob",
              role: "Creative",
              quote: "I found my voice and my faith again. This isn't just a church; it's a family that moves together.",
              image: "/src/assets/Joanna_story.jpeg"
            }
          ].map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-white border border-black/5 rounded-[40px] hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={story.image} alt={story.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <p className="text-xl font-light leading-relaxed mb-8 italic text-black/80">"{story.quote}"</p>
              <div>
                <div className="font-display font-bold text-lg tracking-tight">{story.name}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-black/30">{story.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JoinMovement = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-black rounded-[60px] p-12 md:p-24 text-white text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-white/40 mb-8">The Movement</h2>
            <h3 className="text-5xl md:text-9xl font-display font-bold tracking-tighter leading-[0.85] mb-12">
              UNCOVER GOD'S <br />
              STORY IN THE <br />
              <span className="italic font-light">NEXT GENERATION.</span>
            </h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform">
                Find Your Place
              </button>
              <button className="px-10 py-5 border border-white/20 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                Partner With Us
              </button>
            </div>
          </motion.div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white blur-[120px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ImpactSection />
        <StoriesSection />
        <EventSection />
        <JoinMovement />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
}
