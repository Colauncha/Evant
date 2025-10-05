import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "info@evant.ng",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+234 (0) 123 456 7890",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Lagos, Nigeria",
      description: "Come say hello at our office"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your electric journey? Have questions about our platform? 
            We'd love to hear from you. Get in touch with our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <div>
            <Card className="border-0 bg-gradient-card shadow-electric">
              <CardHeader>
                <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg w-fit">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 bg-gradient-card shadow-card hover:shadow-electric transition-all duration-300">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                      <p className="text-primary font-medium">{info.info}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Hours */}
            <Card className="border-0 bg-gradient-card shadow-card">
              <CardHeader>
                <div className="bg-gradient-to-br from-secondary to-primary p-3 rounded-lg w-fit">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Office Hours</CardTitle>
                <CardDescription>When you can reach us</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="border-0 bg-gradient-card shadow-card">
              <CardHeader>
                <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg w-fit">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Quick Links</CardTitle>
                <CardDescription>Useful resources and information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="#" className="block text-primary hover:text-primary/80 transition-colors">
                    Download Mobile App
                  </a>
                  <a href="#" className="block text-primary hover:text-primary/80 transition-colors">
                    Station Partner Program
                  </a>
                  <a href="#" className="block text-primary hover:text-primary/80 transition-colors">
                    Fleet Solutions
                  </a>
                  <a href="#" className="block text-primary hover:text-primary/80 transition-colors">
                    Support Center
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Can't find what you're looking for? Check out our most common questions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 bg-gradient-card shadow-card text-left">
              <CardHeader>
                <CardTitle className="text-lg">How do I book a charging session?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Simply open our app, find a nearby charging station, check availability, 
                  and book your slot. You'll receive a QR code for easy access.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-card shadow-card text-left">
              <CardHeader>
                <CardTitle className="text-lg">What payment methods are accepted?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We accept cards, bank transfers, USSD, and mobile wallets including 
                  all major Nigerian payment platforms.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-card shadow-card text-left">
              <CardHeader>
                <CardTitle className="text-lg">Is there a fleet management option?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Yes! We offer comprehensive fleet management solutions with centralized 
                  billing and detailed analytics for corporate accounts.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-card shadow-card text-left">
              <CardHeader>
                <CardTitle className="text-lg">How can I become a station partner?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Contact us through this form or call our partnership team. We'll help 
                  you integrate your charging stations into our network.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;