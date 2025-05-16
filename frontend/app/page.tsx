"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SVGProps } from "react";
import HeroSection from "@/components/HeroSection";

// Icons
const CodeIcon = ({ className }: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const UsersIcon = ({ className }: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const NetworkIcon = ({ className }: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// Data
const FEATURES = [
  {
    title: "Hands-On Projects",
    description: "Work on real-world projects to sharpen your skills.",
    icon: CodeIcon,
  },
  {
    title: "Expert Mentorship",
    description: "Learn from industry professionals and alumni.",
    icon: UsersIcon,
  },
  {
    title: "Networking",
    description: "Connect with peers and tech leaders.",
    icon: NetworkIcon,
  },
];

const TESTIMONIALS = [
  {
    quote: "This club transformed my coding skills and helped me land my first internship!",
    name: "Jane Doe",
    role: "Computer Science Student",
  },
  {
    quote: "The collaborative environment is unmatched. I built my startup here.",
    name: "John Smith",
    role: "Founder, TechStart",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fefefe]">
      {/* Navigation */}
      
      {/* Hero Section */}
     
<HeroSection />
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0e7d44]">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <Card key={feature.title} className="border-[#90908e]/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-[#0e7d44]/10 p-3 rounded-full w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-[#0e7d44]" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#90908e]">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#fefefe]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0e7d44]">What Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.name} className="border-[#90908e]/20 p-6">
                <CardContent className="p-0">
                  <p className="text-[#90908e] mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#0e7d44]/10 rounded-full h-10 w-10 flex items-center justify-center">
                      <span className="text-[#0e7d44] font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-[#90908e]">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0e7d44] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of builders, creators, and problem-solvers.
          </p>
          <Button className="bg-[#b28d49] hover:bg-[#9a7b3d] text-white px-8 py-6 text-lg">
            <Link href="/join" className="flex items-center">
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
