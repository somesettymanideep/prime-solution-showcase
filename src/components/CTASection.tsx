import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import ctaBackground from '@/assets/cta-background.jpg';

const CTASection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ctaBackground}
          alt="Professional printing and branding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gold/30 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-gold/20 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-gold/40 rotate-45" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto px-4">
          {/* Phone Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-gradient rounded-full mb-6 shadow-lg">
            <Phone className="w-8 h-8 text-navy-dark" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream font-bold mb-6">
            Need Quality Supplies for Your Project?
          </h2>
          <p className="text-cream/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact Prime Solutions today for reliable printing, branding, and signage solutions that enhance your business visibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="gold"
              size="xl"
              className="group shadow-lg"
              onClick={scrollToContact}
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
