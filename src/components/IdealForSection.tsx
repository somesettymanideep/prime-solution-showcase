import { Building2, Store, GraduationCap, Stethoscope, Hotel, CalendarDays } from 'lucide-react';

const sectors = [
  {
    icon: Building2,
    title: 'Corporate Offices',
    description: 'Complete solutions for modern workplaces',
  },
  {
    icon: Store,
    title: 'Retail Stores & Showrooms',
    description: 'Branding and display solutions',
  },
  {
    icon: GraduationCap,
    title: 'Schools & Colleges',
    description: 'Educational institution supplies',
  },
  {
    icon: Stethoscope,
    title: 'Hospitals & Clinics',
    description: 'Healthcare facility requirements',
  },
  {
    icon: Hotel,
    title: 'Hotels & Restaurants',
    description: 'Hospitality industry solutions',
  },
  {
    icon: CalendarDays,
    title: 'Events & Exhibitions',
    description: 'Promotional materials & displays',
  },
];

const IdealForSection = () => {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-navy rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">Who We Serve</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy font-bold mt-2 mb-4">
            Ideal For
          </h2>
          <p className="text-muted-foreground text-lg">
            We cater to diverse industries and sectors with our comprehensive range of services
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 hover-lift border border-border overflow-hidden"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-navy-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-500">
                    <sector.icon className="w-8 h-8 text-gold group-hover:text-navy-dark transition-colors duration-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy group-hover:text-cream mb-2 transition-colors duration-500">
                    {sector.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-cream/80 transition-colors duration-500">
                    {sector.description}
                  </p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealForSection;
