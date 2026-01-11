import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';

const slides = [
  {
    image: heroSlide1,
    headline: 'Welcome to Prime Solutions',
    subheadline: 'One Stop Solution for Supplies, Services & HVAC',
    description: 'Complete supply and service solutions under one roof. From Printing, Branding & Signage services, HVAC systems to Electrical, Plumbing - we help businesses meet their requirements efficiently.',
  },
  {
    image: heroSlide2,
    headline: 'Quality Products & Skilled Support',
    subheadline: 'Your Trusted Partner in Hyderabad',
    description: 'We deliver quality products, skilled technical support, competitive pricing, and timely delivery for residential, commercial, industrial, and institutional clients.',
  },
  {
    image: heroSlide3,
    headline: 'Complete Business Solutions',
    subheadline: 'Printing, HVAC, Electrical & More',
    description: 'Professional Printing, Signage, Acrylic, HVAC, Electrical, Plumbing, SS Materials, and General Supplies - all your business needs covered.',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-hero-gradient" />
          
          {/* Content */}
          <div className="relative h-full container-custom flex items-center px-4 md:px-8">
            <div className={`max-w-2xl transition-all duration-700 ${
              index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <span className="inline-block text-gold font-medium mb-4 tracking-wider uppercase">
                {slide.subheadline}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream font-bold mb-6 leading-tight">
                {slide.headline}
              </h1>
              <p className="text-cream/80 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="#contact">Get a Quote</a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="#services">Our Services</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-navy/50 hover:bg-navy/80 text-gold p-3 rounded-full transition-all duration-300 hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-navy/50 hover:bg-navy/80 text-gold p-3 rounded-full transition-all duration-300 hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-gold w-8'
                : 'bg-cream/40 hover:bg-cream/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;