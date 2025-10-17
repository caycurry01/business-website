import Image from "next/image";
import ContactForm from './ContactForm';
import { Great_Vibes } from "next/font/google";
import { Delius } from "next/font/google";


const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const delius = Delius({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="m-0 p-0">{/* Remove all margins/padding from wrapper */}
      {/* 🩰 HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center visible">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/nail_file.jpg')" }}
        />

        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-background/60" />

        {/* Main content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-foreground text-center px-4">
          <h1 className="flex flex-wrap justify-center items-baseline text-center leading-tight mb-6">
            <span className={`${greatVibes.className} text-6xl sm:text-7xl block w-full mb-2`}>
              Welcome to
            </span>
            <span className={`${delius.className} text-7xl sm:text-9xl block w-full mb-2`}>
              Cute Cuticles
            </span>
            <span className={`${greatVibes.className} text-5xl sm:text-6xl block w-full`}>
              Nails & Spa
            </span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl font-light tracking-wide">
            You deserve to be pampered
          </p>
        </div>

        {/* Scroll indicator at absolute bottom */}
        <div className="relative z-10 flex flex-col items-center animate-bounce pb-8">
          <span className="text-sm uppercase tracking-widest mb-2 font-semibold">Scroll Down</span>
          <div className="w-px h-12 bg-foreground"></div>
        </div>
      </section>

      {/* 📊 STATS SECTION */}
      <section id="stats" className="min-h-screen flex items-center justify-center bg-white text-gray-800">
        
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
              <div className={`${delius.className} text-7xl sm:text-8xl text-pink-400 mb-4`}>
                500+
              </div>
              <p className="text-xl uppercase tracking-wide text-gray-600">
                Happy Clients
              </p>
            </div>
            <div>
              <div className={`${delius.className} text-7xl sm:text-8xl text-pink-400 mb-4`}>
                10
              </div>
              <p className="text-xl uppercase tracking-wide text-gray-600">
                Years Experience
              </p>
            </div>
            <div>
              <div className={`${delius.className} text-7xl sm:text-8xl text-pink-400 mb-4`}>
                15+
              </div>
              <p className="text-xl uppercase tracking-wide text-gray-600">
                Services Offered
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🌸 ABOUT SECTION */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 relative">
        {/* Floating image that overlaps from previous section */}
        <div className="absolute -top-70 left-1/2 -translate-x-1/2 z-30 w-full max-w-6xl px-4">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <img 
              src="/nail_art.jpg" 
              alt="Nail art" 
              className="w-full h-150 object-cover"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center pt-48">
          <h2 className={`${greatVibes.className} text-6xl sm:text-7xl mb-8`}>
            About Us
          </h2>
          <div className="h-px w-24 bg-foreground/30 mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl leading-relaxed font-light">
            At <span className={`${delius.className} font-normal`}>Cute Cuticles Nails & Spa</span>,
            we believe every client deserves relaxation, confidence, and care.
            Our experienced technicians provide personalized services in a tranquil
            atmosphere, ensuring you leave feeling refreshed and radiant.
          </p>
        </div>
      </section>

      {/* 💅 SERVICES SECTION */}
      <section id="services" className="min-h-screen flex items-center justify-center bg-white text-gray-800 px-4 relative">
        {/* Floating images grid that overlaps */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 z-30 w-full max-w-5xl px-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <img 
                src="/manicure_sample.jpg" 
                alt="Manicure" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <img 
                src="/pedicure_sample.jpg" 
                alt="Pedicure" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-36">
          <h2 className={`${greatVibes.className} text-6xl sm:text-7xl text-center mb-16`}>
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Service 1 */}
            <div className="text-center">
              <div className="bg-pink-50 p-8 rounded-lg mb-6">
                <h3 className={`${delius.className} text-3xl mb-4`}>Manicure</h3>
                <p className="text-gray-600 leading-relaxed">
                  Classic, gel, and specialty nail treatments to keep your hands looking flawless
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="text-center">
              <div className="bg-pink-50 p-8 rounded-lg mb-6">
                <h3 className={`${delius.className} text-3xl mb-4`}>Pedicure</h3>
                <p className="text-gray-600 leading-relaxed">
                  Luxurious foot care treatments for ultimate relaxation and beautiful feet
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="text-center">
              <div className="bg-pink-50 p-8 rounded-lg mb-6">
                <h3 className={`${delius.className} text-3xl mb-4`}>Spa Treatments</h3>
                <p className="text-gray-600 leading-relaxed">
                  Indulge in our signature spa packages designed to pamper and rejuvenate
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="text-center">
              <div className="bg-pink-50 p-8 rounded-lg mb-6">
                <h3 className={`${delius.className} text-3xl mb-4`}>Nail Art</h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom designs and creative nail art to express your unique style
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📞 Book SECTION */}
      <section id="book" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`${delius.className} text-5xl sm:text-6xl mb-8`}>
            Visit Us
          </h2>
          <div className="h-px w-24 bg-foreground/30 mx-auto mb-12"></div>
          
          <p className="text-xl sm:text-2xl leading-relaxed font-light mb-12">
            Ready to treat yourself? Book your appointment today and experience
            the relaxation you deserve.
          </p>

          <div className="space-y-6 text-lg">
            <div>
              <p className="uppercase tracking-wide text-sm mb-2 opacity-70">Location</p>
              <p className="text-xl">123 Beauty Lane, Charlotte, NC</p>
            </div>
            <div>
              <p className="uppercase tracking-wide text-sm mb-2 opacity-70">Hours</p>
              <p className="text-xl">Mon-Sat: 9AM - 7PM | Sun: 10AM - 5PM</p>
            </div>
            <div>
              <p className="uppercase tracking-wide text-sm mb-2 opacity-70">Phone</p>
              <p className="text-xl">(555) 123-4567</p>
            </div>
          </div>

          <button className="mt-12 px-12 py-4 bg-foreground text-background rounded-full text-lg uppercase tracking-wide hover:opacity-90 transition">
            Book Now
          </button>
        </div>

        
      </section>

      {/* 📞 Contact SECTION - Replace entire section with ContactForm component */}
      <ContactForm greatVibes={greatVibes} />
      
    </div>
  );
}