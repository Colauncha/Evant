import { Zap, Leaf, Globe, TrendingUp, Users, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Mission = () => {
  const goals = [
    {
      icon: TrendingUp,
      title: "Increase Accessibility",
      description: "Make EV charging stations easily discoverable and accessible to all Nigerian drivers through our comprehensive marketplace platform."
    },
    {
      icon: Zap,
      title: "Drive EV Adoption",
      description: "Accelerate electric vehicle adoption by removing barriers and making charging as convenient as traditional refueling."
    },
    {
      icon: Building2,
      title: "Empower Station Owners",
      description: "Enable petroleum stations and charging infrastructure owners to monetize their EV charging investments effectively."
    }
  ];

  const impact = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Reducing carbon emissions by promoting clean transportation and supporting Nigeria's climate goals."
    },
    {
      icon: Globe,
      title: "Economic Growth",
      description: "Creating new business opportunities and supporting the growth of Nigeria's green economy."
    },
    {
      icon: Users,
      title: "Social Change",
      description: "Democratizing access to clean transportation technology for all socioeconomic levels."
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
              Mission
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To revolutionize Nigeria's transportation landscape by creating the most comprehensive, 
            user-friendly, and accessible EV charging marketplace that accelerates the adoption 
            of clean, sustainable mobility solutions.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="border-0 bg-gradient-to-r from-primary/10 to-secondary/10 shadow-electric">
            <CardContent className="p-12 text-center">
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full w-fit mx-auto mb-6">
                <Zap className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission Statement</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                EVANT exists to bridge the gap between Nigeria's electric vehicle potential and reality. 
                We provide EV owners, fleet operators, and charging station providers with a unified 
                platform that makes finding, booking, and paying for charging services as simple as 
                using a smartphone app. Our mission is to eliminate range anxiety, reduce charging 
                friction, and accelerate Nigeria's transition to sustainable transportation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Goals Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Goals</h2>
            <p className="text-xl text-muted-foreground">
              The strategic objectives driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <Card key={index} className="group hover:shadow-electric transition-all duration-300 border-0 bg-gradient-card">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full w-fit mx-auto group-hover:shadow-glow transition-all duration-300">
                    <goal.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-center leading-relaxed">
                    {goal.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Success Metrics</h2>
            <p className="text-xl text-muted-foreground">
              How we measure our progress toward achieving our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">1,000+</div>
                <div className="text-sm text-muted-foreground">App Downloads</div>
                <div className="text-xs text-muted-foreground mt-1">First 6 months</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">70%</div>
                <div className="text-sm text-muted-foreground">Booking Completion</div>
                <div className="text-xs text-muted-foreground mt-1">Success rate target</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">80%</div>
                <div className="text-sm text-muted-foreground">User Satisfaction</div>
                <div className="text-xs text-muted-foreground mt-1">Rating target</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Active Stations</div>
                <div className="text-xs text-muted-foreground mt-1">First year target</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground">
              The positive change we're creating in Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impact.map((item, index) => (
              <Card key={index} className="group hover:shadow-electric transition-all duration-300 border-0 bg-gradient-card">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-full w-fit mx-auto group-hover:shadow-glow transition-all duration-300">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-center leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;