import { Car, Users, Building, TrendingUp, MapPin, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Market = () => {
  const userPersonas = [
    {
      icon: Car,
      title: "EV Owners (Individual Drivers)",
      wants: ["Quick charging", "Transparent pricing", "Easy payment"],
      painPoints: ["Cannot find reliable charging stations", "Uncertain about availability", "Complex payment processes"],
      solution: "Comprehensive station locator with real-time availability and seamless payment integration"
    },
    {
      icon: Users,
      title: "Ride Hailing Drivers (Bolt/Uber)",
      wants: ["Affordable prices", "Fast charging", "Volume discounts"],
      painPoints: ["Downtime costs money", "Limited charging options", "No fleet pricing"],
      solution: "Dedicated driver pricing, priority booking, and fast-charging station network"
    },
    {
      icon: Building,
      title: "Fleet Managers (Corporate)",
      wants: ["Dashboard to manage EVs", "Cost tracking", "Centralized billing"],
      painPoints: ["No central billing system", "Complex fleet management", "Limited reporting"],
      solution: "Advanced fleet dashboard with comprehensive analytics and unified billing system"
    }
  ];

  const marketData = [
    {
      icon: TrendingUp,
      title: "Growing EV Market",
      description: "Nigeria's EV market is experiencing rapid growth with increasing government support for clean energy initiatives.",
      stats: "300% growth projected by 2030"
    },
    {
      icon: MapPin,
      title: "Infrastructure Gap",
      description: "Limited charging infrastructure is the primary barrier to EV adoption in Nigeria's major cities.",
      stats: "Less than 50 public charging stations nationwide"
    },
    {
      icon: DollarSign,
      title: "Economic Opportunity",
      description: "Rising fuel costs are driving interest in electric alternatives among Nigerian consumers and businesses.",
      stats: "₦500+ saved per 100km with EVs"
    }
  ];

  const targetMarkets = [
    {
      title: "Primary Market",
      description: "Lagos Metropolitan Area",
      details: [
        "20+ million population",
        "Highest EV adoption potential",
        "Government EV initiatives",
        "Major corporate headquarters"
      ]
    },
    {
      title: "Secondary Markets",
      description: "Abuja & Port Harcourt",
      details: [
        "Federal capital territory",
        "Oil industry headquarters",
        "Government fleet opportunities",
        "Growing tech ecosystem"
      ]
    },
    {
      title: "Future Expansion",
      description: "Major Nigerian Cities",
      details: [
        "Kano, Ibadan, Kaduna",
        "State capital cities",
        "University towns",
        "Industrial centers"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Market{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Opportunity
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Understanding Nigeria's EV market landscape and the diverse user personas 
            driving the demand for accessible charging solutions.
          </p>
        </div>

        {/* Market Overview */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Market Overview</h2>
            <p className="text-xl text-muted-foreground">
              Nigeria's electric vehicle market presents significant opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketData.map((data, index) => (
              <Card key={index} className="group hover:shadow-electric transition-all duration-300 border-0 bg-gradient-card">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full w-fit mx-auto group-hover:shadow-glow transition-all duration-300">
                    <data.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{data.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {data.description}
                  </CardDescription>
                  <div className="text-lg font-semibold text-primary">{data.stats}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* User Personas */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Target User Personas</h2>
            <p className="text-xl text-muted-foreground">
              Understanding our diverse user base and their unique needs
            </p>
          </div>

          <div className="space-y-8">
            {userPersonas.map((persona, index) => (
              <Card key={index} className="border-0 bg-gradient-card shadow-card hover:shadow-electric transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="text-center lg:text-left">
                      <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full w-fit mx-auto lg:mx-0 mb-4">
                        <persona.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{persona.title}</h3>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-secondary mb-3">What They Want:</h4>
                      <ul className="space-y-2">
                        {persona.wants.map((want, idx) => (
                          <li key={idx} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                            {want}
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="text-lg font-semibold text-destructive mb-3 mt-6">Pain Points:</h4>
                      <ul className="space-y-2">
                        {persona.painPoints.map((pain, idx) => (
                          <li key={idx} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-destructive rounded-full mr-3"></div>
                            {pain}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-primary mb-3">Our Solution:</h4>
                      <p className="text-muted-foreground leading-relaxed">{persona.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Target Markets */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Target Markets</h2>
            <p className="text-xl text-muted-foreground">
              Our strategic approach to market expansion across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetMarkets.map((market, index) => (
              <Card key={index} className="group hover:shadow-electric transition-all duration-300 border-0 bg-gradient-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">{market.title}</CardTitle>
                  <CardDescription className="text-lg font-medium">{market.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {market.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;