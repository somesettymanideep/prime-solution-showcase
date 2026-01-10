import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-gold-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-navy rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-dark font-bold mb-4">
            Looking for Reliable Business Services?
          </h2>
          <p className="text-navy/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let Prime Solutions handle all your electrical, plumbing, printing, and signage needs. Get in touch today for a free consultation!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="navy" size="xl" className="group">
              Contact Prime Solutions Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="tel:+919876543210" className="flex items-center gap-2 text-navy-dark font-semibold hover:text-navy transition-colors">
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
