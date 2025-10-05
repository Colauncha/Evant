import { 
  MapPin, 
  Clock, 
  Battery, 
  CreditCard, 
  Star, 
  Bell,
  Users,
  BarChart3,
  Gift,
  Leaf,
  Shield,
  Smartphone
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const coreFeatures = [
    {
      icon: MapPin,
      title: "Station Locator",
      description: "GPS-enabled map and list view of nearby charging stations with detailed information",
      features: ["Real-time location tracking", "Distance calculation", "Station details & photos", "Navigation integration"]
    },
    {
      icon: Clock,
      title: "Real-time Availability",
      description: "Live updates showing which chargers are free or occupied every 30 seconds",
      features: ["Live status updates", "Occupancy tracking", "Estimated wait times", "Queue management"]
    },
    {
      icon: Battery,
      title: "Smart Booking System",
      description: "Reserve charging slots in advance with confirmation and QR code access",
      features: ["Advance reservations", "QR code access", "Booking confirmations", "Flexible scheduling"]
    },
    {
      icon: CreditCard,
      title: "Seamless Payments",
      description: "Multiple payment options including cards, bank transfer, USSD, and mobile wallets",
      features: ["Multiple payment methods", "Secure transactions", "Instant confirmations", "Payment history"]
    },
    {
      icon: Star,
      title: "User Reviews & Ratings",
      description: "Rate and review charging stations to help the community make informed decisions",
      features: ["Station ratings", "User reviews", "Photo uploads", "Community feedback"]
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Intelligent alerts for bookings, charging sessions, payments, and more",
      features: ["Booking confirmations", "Session completion", "Payment alerts", "Status updates"]
    }
  ];

  const premiumFeatures = [
    {
      icon: Users,
      title: "Fleet Dashboard",
      description: "Comprehensive management tools for corporate accounts and fleet operators",
      features: ["Multi-vehicle tracking", "Cost analytics", "Centralized billing", "Usage reports"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detailed insights into charging patterns, costs, and usage optimization",
      features: ["Usage analytics", "Cost tracking", "Performance metrics", "Custom reports"]
    },
    {
      icon: Gift,
      title: "Loyalty Program",
      description: "Earn points and rewards for frequent charging sessions",
      features: ["Points system", "Free charging rewards", "Member discounts", "Referral bonuses"]
    },
    {
      icon: Leaf,
      title: "Carbon Footprint Tracker",
      description: "Track your environmental impact and CO₂ savings from electric driving",
      features: ["CO₂ savings tracking", "Environmental reports", "Green certificates", "Impact metrics"]
    }
  ];

  const technicalSpecs = [
    {
      title: "Performance",
      specs: ["App loads within 3 seconds", "99.9% uptime guarantee", "Real-time data sync", "Offline mode support"]
    },
    {
      title: "Security",
      specs: ["End-to-end encryption", "PCI DSS compliance", "Secure payment processing", "Data protection"]
    },
    {
      title: "Scalability",
      specs: ["1000+ concurrent users", "Multi-region support", "Auto-scaling infrastructure", "Load balancing"]
    },
    {
      title: "Integration",
      specs: ["Google Maps API", "Paystack/Flutterwave", "Charging hardware APIs", "Mobile platforms"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive EV charging solutions designed to make electric vehicle ownership 
            simple, convenient, and accessible for everyone in Nigeria.
          </p>
        </div>

        {/* Core Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Core Features</h2>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Available in MVP
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-electric transition-all duration-300 border-0 bg-gradient-card">
                <CardHeader>
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg w-fit group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Premium Features</h2>
            <Badge variant="outline" className="text-lg px-4 py-2 border-secondary text-secondary">
              Coming Soon
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {premiumFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-electric transition-all duration-300 border-0 bg-gradient-card">
                <CardHeader>
                  <div className="bg-gradient-to-br from-secondary to-primary p-3 rounded-lg w-fit group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-muted-foreground">
              Built with performance, security, and scalability in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, index) => (
              <Card key={index} className="border-0 bg-gradient-card shadow-card hover:shadow-electric transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg text-primary">{spec.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {spec.specs.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {item}
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Availability */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Multi-Platform Experience</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Access EVANT services across all your devices with native apps and web portal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 bg-card rounded-lg px-6 py-3 shadow-card">
                <Smartphone className="h-6 w-6 text-primary" />
                <span className="font-medium">iOS & Android Apps</span>
              </div>
              <div className="flex items-center space-x-2 bg-card rounded-lg px-6 py-3 shadow-card">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-medium">Web Portal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;