import { 
  Battery, 
  MapPin, 
  Clock, 
  CreditCard, 
  Star, 
  Bell,
  Users,
  TrendingUp,
  Shield,
  Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-evant.jpg";

const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: "Station Locator",
      description: "Find nearby charging stations with GPS-enabled map and list view"
    },
    {
      icon: Clock,
      title: "Real-time Availability",
      description: "See which chargers are free or occupied in real-time"
    },
    {
      icon: Battery,
      title: "Smart Booking",
      description: "Reserve charging slots in advance with our booking system"
    },
    {
      icon: CreditCard,
      title: "Seamless Payments",
      description: "Pay with cards, bank transfer, USSD, or mobile wallet"
    },
    {
      icon: Star,
      title: "User Reviews",
      description: "Rate and review charging stations after each session"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get alerts for bookings, charging completion, and payments"
    }
  ];

  const stats = [
    { number: "1,000+", label: "Target Downloads", icon: Smartphone },
    { number: "70%", label: "Booking Success Rate", icon: TrendingUp },
    { number: "80%", label: "User Satisfaction", icon: Star },
    { number: "10+", label: "Partner Stations", icon: MapPin }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Electric vehicle charging stations in Nigeria" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Charge
              </span>{" "}
              Your Future with{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                EVANT
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Nigeria's first EV charging marketplace. Find, book, and pay for charging stations 
              with ease. Making electric vehicle adoption simple and accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-full">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EV Charging
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to find, book, and pay for EV charging in one platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-electric transition-all duration-300 border-0 bg-gradient-card">
                <CardHeader>
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg w-fit group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Go Electric?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of EV owners who trust EVANT for their charging needs. 
            Download our app and start your electric journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              <Smartphone className="mr-2 h-5 w-5" />
              Download App
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;