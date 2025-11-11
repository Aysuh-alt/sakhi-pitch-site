import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: "About", href: "#" },
      { label: "Mission", href: "#" },
      { label: "Team", href: "#" },
      { label: "Blog", href: "#" },
    ],
    support: [
      { label: "FAQs", href: "#" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer id="contact" className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                MySAKHi
              </h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
                Building India's women empowerment movement through safe mobility and entrepreneurship.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:hello@mysakhi.in"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4" />
                  hello@mysakhi.in
                </a>
                <a
                  href="tel:+91"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4" />
                  +91 XXXXX XXXXX
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4 text-base sm:text-lg">Company</h4>
              <ul className="space-y-3">
                {links.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold mb-4 text-base sm:text-lg">Support</h4>
              <ul className="space-y-3">
                {links.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} MySAKHi. Building India's women empowerment movement.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
