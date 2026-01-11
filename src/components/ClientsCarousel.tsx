import { useEffect, useRef } from 'react';
import clientAmazon from '@/assets/client-amazon.png';
import clientBet from '@/assets/client-bet.jpg';
import clientBroadcom from '@/assets/client-broadcom.png';
import clientUB from '@/assets/client-ub.jpg';
import clientHuhtamaki from '@/assets/client-huhtamaki.png';
import clientMechotech from '@/assets/client-mechotech.png';
import clientMetlife from '@/assets/client-metlife.png';
import clientMicron from '@/assets/client-micron.png';
import clientRicetech from '@/assets/client-ricetech.png';

const clients = [
  { name: 'Amazon', logo: clientAmazon },
  { name: 'Best Engineering Technologies', logo: clientBet },
  { name: 'Broadcom', logo: clientBroadcom },
  { name: 'United Breweries', logo: clientUB },
  { name: 'Huhtamaki PPL', logo: clientHuhtamaki },
  { name: 'Mechotech', logo: clientMechotech },
  { name: 'MetLife', logo: clientMetlife },
  { name: 'Micron', logo: clientMicron },
  { name: 'Ricetech', logo: clientRicetech },
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
                className="h-16 w-auto object-contain hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
