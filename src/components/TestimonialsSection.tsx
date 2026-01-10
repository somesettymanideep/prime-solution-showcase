import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'TechStart Solutions Pvt Ltd',
    text: 'Prime Solutions transformed our office space with their exceptional electrical and signage work. Professional, timely, and excellent quality. Highly recommended!',
  },
  {
    name: 'Priya Sharma',
    company: 'Global Edu Institute',
    text: 'We have been working with Prime Solutions for over 3 years. Their printing and stationery services are top-notch. They understand our needs perfectly.',
  },
  {
    name: 'Mohammed Arif',
    company: 'Sunrise Commercial Complex',
    text: 'The team handled our complete electrical and plumbing setup for a 50,000 sq ft commercial space. Impeccable work and excellent project management.',
  },
  {
    name: 'Lakshmi Reddy',
    company: 'Medicore Healthcare',
    text: 'From acrylic signage to printed materials, Prime Solutions delivered everything on time and within budget. A truly reliable business partner.',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);

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

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card text-center">
                    {/* Quote Icon */}
                    <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6">
                      <Quote className="w-8 h-8 text-gold" />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div>
                      <h4 className="font-display text-xl font-bold text-navy">
                        {testimonial.name}
                      </h4>
                      <p className="text-gold font-medium">
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
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gold w-6' : 'bg-navy/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
