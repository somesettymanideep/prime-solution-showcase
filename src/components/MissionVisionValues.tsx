import { Target, Eye, Heart, Star, Users, Shield, Clock, TrendingUp } from 'lucide-react';

const values = [
  { icon: Star, label: 'Quality & Reliability' },
  { icon: Users, label: 'Customer Satisfaction' },
  { icon: Shield, label: 'Integrity & Transparency' },
  { icon: Clock, label: 'Timely Execution' },
  { icon: TrendingUp, label: 'Continuous Improvement' },
];

const MissionVisionValues = () => {
  return (
    <section className="section-padding bg-navy-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-gold rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-gold rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gold/20 rotate-45" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">Who We Are</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream font-bold mt-2 mb-4">
            Mission, Vision & Values
          </h2>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="group relative bg-card/10 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 hover:border-gold/60 transition-all duration-500">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Target className="w-6 h-6 text-navy-dark" />
              </div>
            </div>
            <div className="pt-4">
              <h3 className="font-display text-2xl font-bold text-gold mb-4">Our Mission</h3>
              <p className="text-cream/90 text-lg leading-relaxed">
                Provide high-quality products and reliable services that add value to customer operations.
              </p>
            </div>
            {/* Decorative Corner */}
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/30 rounded-br-2xl" />
          </div>

          {/* Vision Card */}
          <div className="group relative bg-card/10 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 hover:border-gold/60 transition-all duration-500">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Eye className="w-6 h-6 text-navy-dark" />
              </div>
            </div>
            <div className="pt-4">
              <h3 className="font-display text-2xl font-bold text-gold mb-4">Our Vision</h3>
              <p className="text-cream/90 text-lg leading-relaxed">
                Become a preferred one-stop service partner known for trust and long-term relationships.
              </p>
            </div>
            {/* Decorative Corner */}
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/30 rounded-br-2xl" />
          </div>
        </div>

        {/* Values Section */}
        <div className="relative bg-card/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-navy-dark" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gold">Our Core Values</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-4 rounded-xl hover:bg-gold/10 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-navy-light border border-gold/40 rounded-full flex items-center justify-center mb-3 group-hover:bg-gold-gradient group-hover:border-transparent transition-all duration-300">
                  <value.icon className="w-6 h-6 text-gold group-hover:text-navy-dark transition-colors duration-300" />
                </div>
                <span className="text-cream font-medium text-sm">{value.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
