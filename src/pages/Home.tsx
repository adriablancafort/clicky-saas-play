import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your business with powerful analytics and reporting tools."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and compliance standards."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with global CDN and real-time data synchronization."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with advanced collaboration and permission controls."
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Build Better with SaaSApp
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The complete platform for modern businesses. Streamline operations, 
            gain insights, and scale your team with our comprehensive suite of tools.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/dashboard">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Learn More
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <Card key={index} className="border-border/50 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-accent border-accent/20 shadow-lg">
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-accent-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-accent-foreground/80 mb-6 max-w-2xl mx-auto">
            Join thousands of companies already using SaaSApp to streamline their operations and drive growth.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}