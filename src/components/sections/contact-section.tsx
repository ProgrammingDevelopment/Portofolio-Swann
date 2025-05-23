
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const contactDetails = [
  { icon: <Mail className="h-5 w-5 text-primary" />, text: "swandarudika16@gmail.com", href: "mailto:swandarudika16@gmail.com", label: "Email" },
  { icon: <Phone className="h-5 w-5 text-primary" />, text: "087782380077", href: "tel:087782380077", label: "Mobile" },
  { icon: <MapPin className="h-5 w-5 text-primary" />, text: "Central Jakarta, Jakarta, Indonesia", label: "Location" },
];

const socialLinks = [
    { icon: <Linkedin className="h-6 w-6" />, href: "https://www.linkedin.com/in/swandaru-tirta-sandhika", label: "LinkedIn Profile", name: "LinkedIn" },
    { icon: <Github className="h-6 w-6" />, href: "https://github.com/student", label: "GitHub Profile", name: "GitHub" }, // Replace with actual GitHub link if available
];

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
        </p>
      </div>
      <Card className="max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="space-y-4">
            {contactDetails.map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <span className="flex-shrink-0">{item.icon}</span>
                {item.href ? (
                  <Link href={item.href} target="_blank" rel="noopener noreferrer" className="text-foreground/90 hover:text-primary transition-colors" aria-label={item.label}>
                    {item.text}
                  </Link>
                ) : (
                  <span className="text-foreground/90">{item.text}</span>
                )}
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-4 pt-4 border-t">
            {socialLinks.map((social) => (
                 <Button key={social.name} variant="outline" size="lg" asChild className="transition-transform hover:scale-105">
                    <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        {social.icon}
                        <span className="ml-2">{social.name}</span>
                    </Link>
                 </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
