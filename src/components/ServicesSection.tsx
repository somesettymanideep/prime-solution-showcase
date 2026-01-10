import { Zap, Droplets, Printer, PenTool, Layers, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Electrical',
    description: 'Complete electrical installations, repairs, and maintenance for commercial and office spaces.',
  },
  {
    icon: Droplets,
    title: 'Plumbing',
    description: 'Professional plumbing services including installations, repairs, and emergency fixes.',
  },
  {
    icon: Printer,
    title: 'Printing',
    description: 'High-quality offset and digital printing for business cards, brochures, and marketing materials.',
  },
  {
    icon: PenTool,
    title: 'Signages',
    description: 'Custom indoor and outdoor signage solutions including LED, glow signs, and neon displays.',
  },
  {
    icon: Layers,
    title: 'Acrylic',
    description: 'Premium acrylic fabrication for displays, name plates, and decorative elements.',
  },
  {
    icon: BookOpen,
    title: 'Stationery',
    description: 'Complete office stationery supplies and custom branded materials for businesses.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">What We Offer</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy font-bold mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive business solutions tailored to meet the diverse needs of offices, institutions, and commercial establishments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift border border-border"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-gradient transition-all duration-300">
                <service.icon className="w-8 h-8 text-gold group-hover:text-navy-dark transition-colors duration-300" />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Line */}
              <div className="mt-6 h-1 w-0 bg-gold-gradient rounded-full group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
