import { Zap, Droplets, Printer, PenTool, Layers, BookOpen, Wind, Wrench } from 'lucide-react';

const services = [
  {
    icon: Printer,
    title: 'Printing & Branding',
    description: 'Visiting cards, brochures, flex printing, vinyl, banners, stickers, ID cards, and complete office branding solutions.',
  },
  {
    icon: PenTool,
    title: 'Signages & Acrylic Works',
    description: 'Glow sign boards, LED signs, acrylic name boards, ACP sign boards, reception boards, directional and safety signages.',
  },
  {
    icon: Wind,
    title: 'HVAC Solutions',
    description: 'Split, Cassette & Ductable AC units, VRF/VRV systems, AHU, ducting materials, diffusers, grills, and HVAC controls.',
  },
  {
    icon: Zap,
    title: 'Electrical Supplies',
    description: 'Wires & cables, switches, MCBs, MCCBs, LED lights, street lights, conduits, earthing materials, and safety components.',
  },
  {
    icon: Droplets,
    title: 'Plumbing Materials',
    description: 'PVC, CPVC & UPVC pipes, GI & MS pipes, valves, taps, bathroom fittings, water tanks, and plumbing accessories.',
  },
  {
    icon: Wrench,
    title: 'SS Material Supply',
    description: 'SS tables, trays, racks, shelves, kitchen equipment, cabinets, trolleys, handrails, and custom fabricated items.',
  },
  {
    icon: BookOpen,
    title: 'Office Supplies',
    description: 'Papers, files, registers, pens, envelopes, staplers, calculators, printer cartridges, and all office essentials.',
  },
  {
    icon: Layers,
    title: 'Custom Solutions',
    description: 'Tailored solutions for corporate offices, retail stores, schools, hospitals, hotels, and industrial units.',
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
            Comprehensive supply and service solutions tailored to meet the diverse needs of residential, commercial, industrial, and institutional clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Hover Line */}
              <div className="mt-6 h-1 w-0 bg-gold-gradient rounded-full group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Ideal For Section */}
        <div className="mt-16 bg-cream rounded-xl p-8 md:p-12">
          <h3 className="font-display text-2xl font-bold text-navy text-center mb-8">Ideal For</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Corporate Offices', 'Retail Stores', 'Schools & Colleges', 'Hospitals', 'Hotels & Restaurants', 'Industries'].map((item, index) => (
              <div key={index} className="bg-card p-4 rounded-lg text-center border border-border">
                <span className="text-sm font-medium text-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;