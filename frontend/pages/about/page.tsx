"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, Target, Eye, Lightbulb, Handshake, GraduationCap, Users, TrendingUp, Globe } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  // Value icons mapping
  const valueIcons: Record<string, LucideIcon> = {
    Innovation: Lightbulb,
    Collaboration: Handshake,
    "Continuous Learning": GraduationCap,
    Inclusivity: Users,
    Excellence: TrendingUp,
    Impact: Globe
  };

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Innovation Club</h1>
          <p className="text-xl md:text-2xl">
            Empowering the next generation of tech leaders through collaboration
            and hands-on learning
          </p>
        </div>
      </section>

      {/* Club Description */}
      <section className="about-section py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center mb-12">
            <div className="club-logo relative w-40 h-40">
              <Image
                src="/images/Innovation-Club-New-Logo-Primary-Logo.png"
                alt="Innovation Club Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="section-title text-3xl font-bold text-center mb-12">Who We Are</h2>
          <div className="description-content flex flex-col md:flex-row gap-12 items-center">
            <div className="description-text flex-1">
              <p className="mb-4 text-lg">
                The Karatina University Innovation Club is a student-led
                organization dedicated to fostering technological innovation and
                entrepreneurship among students. Founded in 2018, we bring
                together students from all faculties who share a passion for
                technology and problem-solving.
              </p>
              <p className="text-lg">
                Our club serves as a platform for students to collaborate on
                projects, participate in hackathons, attend workshops led by
                industry experts, and develop skills that prepare them for the
                tech industry.
              </p>
            </div>
            <div className="description-image relative w-full md:w-1/3 aspect-square">
              <Image
                src="/images/Innovation-Club-New-Logo-Secondary-Logo.png"
                alt="Innovation Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-section py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="mv-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="mission hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="mv-icon bg-blue-100 p-3 rounded-full">
                  <Target className="text-blue-600 w-6 h-6" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To create an inclusive environment where students can explore,
                  innovate, and develop technological solutions to real-world
                  problems while building professional networks and essential
                  skills for their future careers.
                </p>
              </CardContent>
            </Card>

            <Card className="vision hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="mv-icon bg-purple-100 p-3 rounded-full">
                  <Eye className="text-purple-600 w-6 h-6" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To be the leading student innovation hub in Kenya, recognized
                  for producing tech-savvy graduates who drive digital
                  transformation in various industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-section py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries({
              "Innovation": "We encourage creative thinking and novel approaches to problem-solving.",
              "Collaboration": "We believe in the power of teamwork and diverse perspectives.",
              "Continuous Learning": "We promote a culture of constant skill development and knowledge sharing.",
              "Inclusivity": "We welcome students from all backgrounds and disciplines.",
              "Excellence": "We strive for high-quality outputs in all our projects and events.",
              "Impact": "We focus on solutions that create positive change in our community."
            }).map(([value, description]) => {
              const Icon = valueIcons[value];
              return (
                <Card key={value} className="value-card hover:shadow-lg transition-shadow h-full">
                  <CardHeader className="flex flex-col items-center text-center">
                    <div className="value-icon bg-blue-100 p-4 rounded-full mb-4">
                      <Icon className="text-blue-600 w-6 h-6" />
                    </div>
                    <CardTitle>{value}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p>{description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title text-3xl font-bold text-center mb-12">Meet Our Team</h2>

          {/* Patron */}
          <div className="team-category mb-16">
            <h3 className="category-title text-2xl font-semibold mb-8 text-center">Club Patron</h3>
            <div className="team-members flex justify-center">
              <Card className="member-card max-w-2xl hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="member-image relative w-full md:w-1/3 aspect-square">
                    <Image
                      src="/images/team/patron.jpg"
                      alt="Club Patron"
                      fill
                      className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                    />
                  </div>
                  <div className="member-info p-6 flex-1">
                    <h4 className="text-xl font-bold">Dr. Jane Muthoni</h4>
                    <p className="position text-gray-600 mb-2">
                      Senior Lecturer, Computer Science Department
                    </p>
                    <p className="bio">
                      With over 15 years of experience in technology education,
                      Dr. Muthoni provides guidance and connects the club with
                      industry partners.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Executive Committee */}
          <div className="team-category mb-16">
            <h3 className="category-title text-2xl font-semibold mb-8 text-center">Executive Committee</h3>
            <div className="team-members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Alex Mwangi",
                  position: "President",
                  bio: "BSc. Computer Science, oversees club operations and represents the club in university forums.",
                  image: "/images/team/president.jpg"
                },
                {
                  name: "Sarah Wambui",
                  position: "Vice President",
                  bio: "BSc. Software Engineering, assists the president and coordinates inter-community activities.",
                  image: "/images/team/vice-president.jpg"
                },
                {
                  name: "David Omondi",
                  position: "Organizing Secretary",
                  bio: "BSc. Information Technology, plans and coordinates all club events and meetings.",
                  image: "/images/team/organizing-secretary.jpg"
                },
                {
                  name: "Grace Njeri",
                  position: "Secretary",
                  bio: "BSc. Computer Science, maintains club records and handles official correspondence.",
                  image: "/images/team/secretary.jpg"
                },
                {
                  name: "Michael Kamau",
                  position: "Vice Secretary",
                  bio: "BSc. Information Technology, assists the secretary and manages digital records.",
                  image: "/images/team/vice-secretary.jpg"
                },
                {
                  name: "Linda Atieno",
                  position: "Auditor",
                  bio: "BSc. Business Information Technology, oversees club finances and budgeting.",
                  image: "/images/team/auditor.jpg"
                }
              ].map((member) => (
                <Card key={member.name} className="member-card hover:shadow-lg transition-shadow h-full">
                  <div className="member-image relative w-full aspect-square">
                    <Image
                      src={member.image}
                      alt={member.position}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold">{member.name}</h4>
                    <p className="position text-gray-600 text-sm mb-2">{member.position}</p>
                    <p className="bio text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Leads */}
          <div className="team-category">
            <h3 className="category-title text-2xl font-semibold mb-8 text-center">Community Leads</h3>
            <div className="team-members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Brian Kiprop",
                  position: "Web Development Lead",
                  bio: "Coordinates web development projects and learning sessions.",
                  image: "/images/team/web-lead.jpg"
                },
                {
                  name: "Susan Mwende",
                  position: "Android Community Lead",
                  bio: "Leads mobile app development initiatives using Kotlin and Jetpack Compose.",
                  image: "/images/team/android-lead.jpg"
                },
                {
                  name: "James Mutua",
                  position: "Cyber Security Lead",
                  bio: "Organizes CTF competitions and security workshops.",
                  image: "/images/team/cyber-lead.jpg"
                },
                {
                  name: "Patricia Adhiambo",
                  position: "Blockchain & Web3 Lead",
                  bio: "Champions decentralized applications and smart contract development.",
                  image: "/images/team/blockchain-lead.jpg"
                },
                {
                  name: "Daniel Kimani",
                  position: "IoT Community Lead",
                  bio: "Leads projects on embedded systems and smart devices.",
                  image: "/images/team/iot-lead.jpg"
                },
                {
                  name: "Winnie Chebet",
                  position: "Data Science/AI/ML Lead",
                  bio: "Coordinates machine learning projects and data analysis workshops.",
                  image: "/images/team/ai-lead.jpg"
                }
              ].map((member) => (
                <Card key={member.name} className="member-card hover:shadow-lg transition-shadow h-full">
                  <div className="member-image relative w-full aspect-square">
                    <Image
                      src={member.image}
                      alt={member.position}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold">{member.name}</h4>
                    <p className="position text-gray-600 text-sm mb-2">{member.position}</p>
                    <p className="bio text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Club History & Milestones */}
      <section className="about-section py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="hm-grid grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="history">
              <h2 className="section-title text-3xl font-bold text-center mb-12">Our History</h2>
              <div className="timeline relative pl-8 border-l-2 border-blue-200">
                {[
                  {
                    year: "2018",
                    title: "Club Founding",
                    content: "Founded by a group of 12 Computer Science students to foster innovation beyond classroom learning."
                  },
                  {
                    year: "2019",
                    title: "First Hackathon",
                    content: "Hosted our first university-wide hackathon with 50 participants from 5 departments."
                  },
                  {
                    year: "2020",
                    title: "Community Expansion",
                    content: "Formalized our tech communities structure with dedicated leads for each specialization."
                  },
                  {
                    year: "2022",
                    title: "National Recognition",
                    content: "Won 2nd place in the National University Innovation Challenge."
                  },
                  {
                    year: "2023",
                    title: "Industry Partnerships",
                    content: "Established partnerships with 3 tech companies for internships and mentorship."
                  }
                ].map((item, index) => (
                  <div key={index} className="timeline-item mb-8 relative">
                    <div className="timeline-year absolute -left-8 top-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {item.year}
                    </div>
                    <div className="timeline-content ml-4">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="milestones">
              <h2 className="section-title text-3xl font-bold text-center mb-12">Key Milestones</h2>
              <div className="milestones-list space-y-6">
                {[
                  {
                    icon: Users,
                    title: "500+ Members",
                    content: "Grown from 12 founders to over 500 active members across all faculties"
                  },
                  {
                    icon: Lightbulb,
                    title: "120+ Projects",
                    content: "Completed projects addressing real-world problems"
                  },
                  {
                    icon: Trophy,
                    title: "15 Awards",
                    content: "Won in various tech competitions and hackathons"
                  },
                  {
                    icon: Briefcase,
                    title: "80+ Internships",
                    content: "Secured for members with partner organizations"
                  },
                  {
                    icon: BookOpen,
                    title: "200+ Workshops",
                    content: "Conducted on emerging technologies"
                  }
                ].map((milestone, index) => (
                  <Card key={index} className="milestone-card hover:shadow-lg transition-shadow">
                    <CardContent className="flex items-center p-6">
                      <div className="milestone-icon bg-blue-100 p-3 rounded-full mr-4">
                        <milestone.icon className="text-blue-600 w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{milestone.title}</h3>
                        <p className="text-gray-600 text-sm">{milestone.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}