import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { saveContactSubmission } from '@/lib/contactStorage';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: '123, Business Hub, Gachibowli, Hyderabad, Telangana 500032',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 98765 43210',
    link: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@primesolutions.in',
    link: 'mailto:info@primesolutions.in',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon - Sat: 9:00 AM - 7:00 PM',
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      saveContactSubmission(formData);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">Get in Touch</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy font-bold mt-2 mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Reach out to us and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-bold text-navy mb-6">
              Reach Out to Prime Solutions
            </h3>
            <p className="text-muted-foreground mb-8">
              Whether you need electrical work, plumbing services, printing solutions, or custom signage, we're here to help. Contact us today for a free consultation and quote.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-muted-foreground hover:text-gold transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="font-display text-2xl font-bold text-navy mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 border-border focus:border-gold focus:ring-gold"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 border-border focus:border-gold focus:ring-gold"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 border-border focus:border-gold focus:ring-gold"
                />
              </div>
              <div>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full h-12 px-3 rounded-md border border-border bg-background text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                >
                  <option value="">Select Service Required</option>
                  <option value="electrical">Electrical</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="printing">Printing</option>
                  <option value="signages">Signages</option>
                  <option value="acrylic">Acrylic</option>
                  <option value="stationery">Stationery</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px] border-border focus:border-gold focus:ring-gold resize-none"
                  required
                />
              </div>
              <Button type="submit" variant="gold" size="xl" className="w-full group" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
