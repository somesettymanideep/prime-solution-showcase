import { useEffect, useRef } from 'react';
import bet from '@/assets/bet.png';
import bulb from '@/assets/bulb.png';
import estd from '@/assets/estd.png';
import mech from '@/assets/mech.png';
import montessori from '@/assets/montessori.png';
import rice from '@/assets/rice.png';
import sathya from '@/assets/sathyasaischool.png';
import ub from '@/assets/ub.png';
import venkateswara from '@/assets/venkateswara.png';
import broad from '@/assets/broadcom.png';
import amaz from '@/assets/Amaz.png';
import pio from '@/assets/pinooers.png';
import met from '@/assets/metlife.png';
import huh from '@/assets/huh.png';
import tupp from '@/assets/tuppware.png';
import micron from '@/assets/micron.png';

const clients = [
  { name: 'Client 1', logo: bet },
  { name: 'Client 2', logo: bulb },
  { name: 'Client 3', logo: estd },
  { name: 'Client 4', logo: mech },
  { name: 'Client 5', logo: montessori },
  { name: 'Client 6', logo: rice },
  { name: 'Client 7', logo: sathya },
  { name: 'Client 8', logo: ub },
  { name: 'Client 8', logo: venkateswara },
  { name: 'Client 9', logo: huh },
  { name: 'Client 10', logo: amaz },
  { name: 'Client 11', logo: tupp },
  { name: 'Client 12', logo: micron },
   { name: 'Client 11', logo: broad },
  { name: 'Client 12', logo: met },
   { name: 'Client 13', logo: pio },
];

const ClientsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container-custom px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-gold font-medium mb-2 tracking-wider uppercase text-sm">
            Trusted Partners
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Valued Clients
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            We are proud to serve leading organizations across Hyderabad
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-hidden gap-8"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Double the clients for seamless infinite scroll */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-cream/50 rounded-xl p-6 min-w-[180px] flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-cream border border-gold/10"
            >
              <img
                src={client.logo}
                alt={client.name}
               style={{height:"70px;"}
               }
                className="h-20 w-auto object-contain grayscale-0 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
