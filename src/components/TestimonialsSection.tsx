import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'TechStart Solutions Pvt Ltd',
    text: 'Prime Solutions transformed our office space with their exceptional electrical and signage work. Professional, timely, and excellent quality.',
  },
  {
    name: 'Priya Sharma',
    company: 'Global Edu Institute',
    text: 'We have been working with Prime Solutions for over 3 years. Their printing and stationery services are top-notch.',
  },
  {
    name: 'Mohammed Arif',
    company: 'Sunrise Commercial Complex',
    text: 'The team handled our complete electrical and plumbing setup for a 50,000 sq ft commercial space. Impeccable work!',
  },
  {
    name: 'Lakshmi Reddy',
    company: 'Medicore Healthcare',
    text: 'From acrylic signage to printed materials, Prime Solutions delivered everything on time and within budget.',
  },
  {
    name: 'Anil Gupta',
    company: 'Innovate Tech Park',
    text: 'Outstanding service for our entire campus. The electrical work was done with precision and ahead of schedule.',
  },
  {
    name: 'Sunita Rao',
    company: 'Greenfield Apartments',
    text: 'Reliable plumbing services that saved us time and money. Their team is professional and courteous.',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate max index based on showing 3 at a time
  const maxIndex = Math.max(0, testimonials.length - 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy font-bold mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what businesses across Hyderabad have to say about our services.
          </p>
        </div>

        {/* Testimonial Carousel - 3 slides visible */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-3">
                  <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                      <Quote className="w-6 h-6 text-gold" />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-foreground leading-relaxed mb-6 italic flex-grow">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="border-t border-border pt-4">
                      <h4 className="font-display text-lg font-bold text-navy">
                        {testimonial.name}
                      </h4>
                      <p className="text-gold text-sm font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-navy text-gold hover:bg-navy-light transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gold w-6' : 'bg-navy/30'
                  }`}
                  aria-label={`Go to testimonial set ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-navy text-gold hover:bg-navy-light transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile: Single slide view */}
        <style>{`
          @media (max-width: 768px) {
            .testimonials-mobile-single > div > div {
              width: 100% !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default TestimonialsSection;
