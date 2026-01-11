import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Printing & Branding', href: '#services' },
    { name: 'Signages & Acrylic', href: '#services' },
    { name: 'HVAC Solutions', href: '#services' },
    { name: 'Electrical Supplies', href: '#services' },
    { name: 'Plumbing Materials', href: '#services' },
    { name: 'SS Materials', href: '#services' },
    { name: 'Office Supplies', href: '#services' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-navy-gradient text-cream">
      {/* Main Footer */}
      <div className="section-padding pb-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <img src={logo} alt="Prime Solutions" className="h-14 mb-6" />
              <p className="text-cream/70 leading-relaxed mb-4">
                Prime Solutions is a Hyderabad-based multi-service company providing reliable Printing, Signage, Acrylic, HVAC, Electrical, Plumbing, SS Materials, and General Supplies.
              </p>
              <p className="text-cream/70 text-sm mb-6">
                We focus on quality products, professional service, timely delivery, and customer satisfaction.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-bold text-gold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-cream/70 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display text-lg font-bold text-gold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-cream/70 hover:text-gold transition-colors duration-300"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display text-lg font-bold text-gold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-cream/70">Hyderabad, Telangana</span>
                </li>
                <li>
                  <a href="tel:+919989120202" className="flex gap-3 text-cream/70 hover:text-gold transition-colors">
                    <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                    <span>9989120202</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info.primesolutionshyd@gmail.com" className="flex gap-3 text-cream/70 hover:text-gold transition-colors">
                    <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                    <span>info.primesolutionshyd@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.primesolutions4u.com" target="_blank" rel="noopener noreferrer" className="flex gap-3 text-cream/70 hover:text-gold transition-colors">
                    <Globe className="w-5 h-5 text-gold flex-shrink-0" />
                    <span>www.primesolutions4u.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="container-custom px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Prime Solutions. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;