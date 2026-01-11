import { Button } from '@/components/ui/button';
import { CheckCircle2, Target, Eye, Heart } from 'lucide-react';
import aboutImage from '@/assets/about-image.jpg';

const features = [
  'Quality Products & Reliable Brands',
  'One-stop solution for all business needs',
  'Professional service & timely delivery',
  'Customer satisfaction guaranteed',
];

const values = [
  { icon: Target, title: 'Our Mission', description: 'To provide high-quality products and reliable services that add value to our customers\' operations.' },
  { icon: Eye, title: 'Our Vision', description: 'To become a preferred one-stop service partner known for trust, quality, and long-term relationships.' },
];

const coreValues = [
  'Quality & Reliability',
  'Customer Satisfaction',
  'Integrity & Transparency',
  'Timely Execution',
  'Continuous Improvement',
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
              <div className="text-4xl font-display font-bold text-gold">Multi</div>
              <div className="text-sm uppercase tracking-wider">Service Provider</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-gold font-medium uppercase tracking-wider text-sm">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy font-bold mt-2 mb-6 gold-underline">
              Your Trusted Partner for Supplies & Services
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Prime Solutions is a Hyderabad-based professional multi-service provider offering end-to-end solutions in Printing, Signage, Acrylic Works, HVAC, Electrical, Plumbing, Stainless Steel materials, and Office Supplies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We serve homes, offices, schools, hospitals, industries, retail outlets, and commercial establishments across Hyderabad. Our experienced team understands client needs and delivers customized, cost-effective, and dependable solutions.
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

            <Button variant="navy" size="lg" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {values.map((item, index) => (
            <div key={index} className="bg-card p-8 rounded-xl shadow-card border border-border">
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mt-12 bg-navy-gradient rounded-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <Heart className="w-8 h-8 text-gold" />
            <h3 className="font-display text-2xl font-bold text-cream">Our Values</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {coreValues.map((value, index) => (
              <span key={index} className="bg-gold/10 text-cream px-4 py-2 rounded-full text-sm font-medium border border-gold/20">
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;