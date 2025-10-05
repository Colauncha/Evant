import { Users, Target, Award, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We leverage cutting-edge technology to solve real-world EV charging challenges in Nigeria."
    },
    {
      icon: Users,
      title: "Accessibility", 
      description: "Making EV charging accessible to everyone, from individual drivers to large fleet operators."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional user experience and reliable charging solutions."
    },
    {
      icon: Lightbulb,
      title: "Sustainability",
      description: "Driving Nigeria's transition to clean energy and sustainable transportation."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EVANT
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're pioneering the electric vehicle revolution in Nigeria by creating 
            the most comprehensive and user-friendly EV charging marketplace.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              EVANT was born from a simple observation: Nigeria's electric vehicle adoption 
              was being hindered by the lack of accessible and reliable charging infrastructure. 
              While EV technology was advancing rapidly, the charging experience remained 
              fragmented and inconvenient.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded by Boluwatife Ajibola, EVANT bridges this gap by creating a unified 
              platform that connects EV owners with charging stations, making the entire 
              process seamless from discovery to payment.
            </p>
          </div>
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become Nigeria's leading EV charging marketplace, accelerating the transition 
              to sustainable transportation by making electric vehicle charging as convenient 
              as refueling at a traditional gas station.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-electric transition-all duration-300 border-0 bg-gradient-card">
                <CardHeader>
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full w-fit mx-auto group-hover:shadow-glow transition-all duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Meet Our Founder</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 bg-gradient-card shadow-card">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl">Boluwatife Ajibola</CardTitle>
                <CardDescription className="text-lg">Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A visionary entrepreneur passionate about sustainable technology and clean energy solutions. 
                  Boluwatife recognized the need for accessible EV charging infrastructure in Nigeria and 
                  created EVANT to democratize electric vehicle adoption across the country.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;