import { useState } from 'react';
import { Printer, Layers, Wind, Zap, Droplets, BookOpen, Box, Wrench, X, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import servicePrinting from '@/assets/printing-services.jpeg';
import serviceSignage from '@/assets/service-signage.jpg';
import serviceHvac from '@/assets/service-hvac.jpg';
import serviceElectrical from '@/assets/electral-spares.jpeg';
import servicePlumbing from '@/assets/service-plumbing.jpg';
import serviceStationery from '@/assets/service-stationery.jpg';
import serviceSsMaterials from '@/assets/service-ss-materials.jpg';
import serviceSsFabrication from '@/assets/service-ss-fabrication.jpg';

const services = [
  {
    icon: Printer,
    title: 'Printing, Branding & Signages',
    description: 'Complete visual branding & promotion solutions for enhanced brand visibility.',
    image: servicePrinting,
    expandedContent: {
      intro: 'End-to-end printing, branding, and signage solutions to enhance brand visibility with durable materials and professional finishing.',
      sections: [
        {
          title: '🖨 Printing Services',
          items: ['Visiting Cards (Matte, Glossy, Premium)', 'Letterheads & Envelopes', 'Brochures, Flyers & Pamphlets', 'Posters & Standee Prints', 'Flex & Vinyl Printing', 'Banners, Stickers & Labels', 'ID Cards & Lanyards'],
          features: ['Sharp printing', 'Long-lasting colors', 'Professional finishing'],
        },
        {
          title: '🎨 Branding Services',
          items: ['Office & Shop Branding', 'Wall Graphics & Displays', 'Promotional & Event Branding', 'Product Branding & Labels'],
        },
      ],
    },
  },
  {
    icon: Layers,
    title: 'Signages & Acrylic Works',
    description: 'Custom signage solutions including glow signs, LED boards, and acrylic displays.',
    image: serviceSignage,
    expandedContent: {
      intro: 'High-quality signage and acrylic products for professional branding and wayfinding solutions.',
      sections: [
        {
          title: '🪧 Signages',
          items: ['Glow & LED Sign Boards', 'Acrylic & ACP Boards', 'Steel & Metal Boards', 'Reception & Wayfinding Signages', 'Safety & Informational Boards'],
        },
        {
          title: '✨ Acrylic & Custom Display Items',
          items: ['Acrylic Name Plates', 'Display Stands', 'Boxes & Frames', 'Custom Acrylic Branding Items'],
        },
      ],
    },
  },
  {
    icon: Wind,
    title: 'HVAC Supplies',
    description: 'Complete HVAC equipment and materials for all climate control needs.',
    image: serviceHvac,
    expandedContent: {
      intro: 'Comprehensive HVAC supplies for residential, commercial, and industrial applications.',
      sections: [
        {
          title: '❄️ Equipment',
          items: ['Split, Cassette & Ductable ACs', 'VRF / VRV Systems', 'AHUs & Ducting Materials', 'Diffusers, Dampers & Insulation'],
        },
        {
          title: '🏗 Application Areas',
          items: ['Residential Buildings', 'Offices & Commercial Spaces', 'Hospitals & Institutions', 'Hotels, Restaurants & Factories'],
        },
      ],
    },
  },
  {
    icon: Zap,
    title: 'Electrical Supplies',
    description: 'Quality electrical materials for safe and efficient installations.',
    image: serviceElectrical,
    expandedContent: {
      intro: 'Complete range of electrical supplies from trusted brands for all installation needs.',
      sections: [
        {
          title: '⚡ Products',
          items: ['Wires & Cables', 'Switches & Modular Accessories', 'Panels, MCBs & DBs', 'LED & Outdoor Lighting', 'Earthing & Safety Materials'],
        },
      ],
    },
  },
  {
    icon: Droplets,
    title: 'Plumbing Supplies',
    description: 'Professional plumbing materials and fittings for all requirements.',
    image: servicePlumbing,
    expandedContent: {
      intro: 'High-quality plumbing supplies for residential and commercial projects.',
      sections: [
        {
          title: '🚰 Products',
          items: ['PVC, CPVC, UPVC Pipes', 'GI & MS Pipes', 'Valves & Sanitary Fittings', 'Water Tanks & Accessories'],
        },
      ],
    },
  },
  {
    icon: BookOpen,
    title: 'Stationery & Office Supplies',
    description: 'Complete office stationery and consumables for everyday operations.',
    image: serviceStationery,
    expandedContent: {
      intro: 'Everything you need to keep your office running smoothly.',
      sections: [
        {
          title: '🖊 Stationery Items',
          items: ['Papers, Files & Registers', 'Pens, Markers & Accessories', 'Desk Organizers & Calculators'],
        },
        {
          title: '🖨 Office Consumables',
          items: ['Printer Toners & Cartridges', 'Labels, Sticky Notes', 'Cleaning & Power Accessories'],
        },
      ],
    },
  },
  {
    icon: Box,
    title: 'SS Materials Supply',
    description: 'High-grade stainless steel products for commercial and industrial use.',
    image: serviceSsMaterials,
    expandedContent: {
      intro: 'Premium stainless steel products with smooth finishing and strong welding, suitable for heavy-duty usage.',
      sections: [
        {
          title: '🔩 Products Include',
          items: ['SS Tables (Work Tables & Utility Tables)', 'SS Trays & Racks', 'SS Shelves & Storage Units', 'SS Kitchen Equipment', 'SS Cabinets & Counters', 'SS Trolleys & Stands', 'SS Handrails & Fabricated Items', 'Custom-Made Stainless Steel Products'],
          features: ['High-grade stainless steel', 'Smooth finishing & strong welding', 'Suitable for heavy-duty usage'],
        },
      ],
    },
  },
  {
    icon: Wrench,
    title: 'Custom SS Fabrication',
    description: 'Tailored stainless steel fabrication based on your specific requirements.',
    image: serviceSsFabrication,
    expandedContent: {
      intro: 'We offer custom stainless steel fabrication based on client requirements, designed for functionality, durability, and space optimization.',
      sections: [
        {
          title: '🛠 Custom Solutions',
          items: ['Size-specific tables & counters', 'Custom racks & storage solutions', 'Special-purpose SS equipment'],
        },
      ],
    },
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover-lift border border-border overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-gradient opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-navy-dark" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group/btn border-gold text-gold hover:bg-gold hover:text-navy-dark"
                  onClick={() => setSelectedService(service)}
                >
                  View More
                  <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-navy">
              {selectedService && (
                <>
                  <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
                    <selectedService.icon className="w-5 h-5 text-navy-dark" />
                  </div>
                  <span className="font-display text-2xl">{selectedService.title}</span>
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          
          {selectedService && (
            <div className="mt-4 space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {selectedService.expandedContent.intro}
              </p>

              {selectedService.expandedContent.sections.map((section, idx) => (
                <div key={idx} className="bg-muted/50 rounded-xl p-6">
                  <h4 className="font-display text-lg font-bold text-navy mb-4">{section.title}</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2 text-foreground">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {section.features && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex flex-wrap gap-3">
                        {section.features.map((feature, fIdx) => (
                          <span key={fIdx} className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-medium">
                            ✔ {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
