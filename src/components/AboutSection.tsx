import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import aboutImage from '@/assets/about-image.jpg';

const features = [
  'Trusted by 500+ businesses in Hyderabad',
  'One-stop solution for all business needs',
  'Quality materials & professional workmanship',
  'Timely project completion guaranteed',
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-card-hover">
              <img
                src={aboutImage}
                alt="Prime Solutions Team"
                className="w-full h-auto object-cover"
              />
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-gradient rounded-lg -z-10" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-navy-gradient text-cream p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-display font-bold text-gold">20+</div>
              <div className="text-sm uppercase tracking-wider">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-gold font-medium uppercase tracking-wider text-sm">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy font-bold mt-2 mb-6 gold-underline">
              Your Trusted Partner for Supplies & Services
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Prime Solutions is a trusted business service provider in Hyderabad offering electrical, plumbing, printing, signage, acrylic, and stationery solutions for offices, institutions, and commercial establishments.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over 15 years of experience, we have built a reputation for excellence, reliability, and customer satisfaction. Our team of skilled professionals is committed to delivering high-quality services that meet your unique business requirements.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
