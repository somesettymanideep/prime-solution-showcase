import { Building2, Award, IndianRupee, HeadphonesIcon, Truck } from 'lucide-react';

const reasons = [
  {
    icon: Building2,
    title: 'One-Stop Provider',
    description: 'All your supplies and service needs under one roof',
  },
  {
    icon: Award,
    title: 'HVAC & Technical Expertise',
    description: 'Skilled team with deep technical knowledge',
  },
  {
    icon: IndianRupee,
    title: 'Affordable & Transparent',
    description: 'Competitive rates with no hidden charges',
  },
  {
    icon: Truck,
    title: 'Quality Materials',
    description: 'Only trusted brands and premium-grade products',
  },
  {
    icon: HeadphonesIcon,
    title: 'Reliable After-Sales',
    description: 'Dedicated support even after project completion',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-navy-gradient">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">Why Prime Solutions</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream font-bold mt-2 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-cream/70 text-lg">
            We are committed to excellence in every project we undertake, ensuring complete customer satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-xl bg-navy-light/30 border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-8 h-8 text-gold group-hover:text-navy-dark transition-colors duration-300" />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-lg font-bold text-cream mb-2">
                {reason.title}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;