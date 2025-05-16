'use client'; // This component uses client-side features (state, modals)

import { useState } from 'react';
import Image from 'next/image';

// Event data
const events = [
    {
        id: 1,
        title: "Annual Inter-University Hackathon",
        description: "48 hours of intense coding, innovation, and teamwork competing with other universities to solve real-world problems.",
        status: "upcoming",
        community: "web-dev",
        date: { day: "24", month: "May", year: "2024" },
        time: "9:00 AM - 5:00 PM",
        location: "CS Building",
        price: "Free",
        images: [
            "/static/images/hero-3.png",
            "/static/images/events/hackathon.jpg",
            "/static/images/events/hackathon-2.jpg",
            "/static/images/events/hackathon-3.jpg"
        ],
        fullDescription: `Our Annual Inter-University Hackathon is back! Join us for 48 hours of intense coding, innovation, and teamwork as we compete with other universities to solve real-world problems. This event brings together the brightest minds from across the region to collaborate, learn, and create impactful solutions.`,
        details: [
            { label: "Theme", value: "Sustainable Development Goals (SDGs)" },
            { label: "Team Size", value: "3-5 members (can register as a team or individually)" },
            { label: "Prizes", value: "Cash prizes, internships, and tech gadgets for top teams" },
            { label: "Mentors", value: "Industry experts will be available throughout the event" },
            { label: "Food", value: "All meals and snacks provided" }
        ],
        schedule: [
            {
                day: "Day 1 - Friday",
                items: [
                    { time: "9:00 AM", activity: "Registration & Breakfast" },
                    { time: "10:00 AM", activity: "Opening Ceremony" },
                    { time: "11:00 AM", activity: "Problem Statements Revealed" },
                    { time: "12:00 PM", activity: "Hacking Begins!" }
                ]
            },
            {
                day: "Day 2 - Saturday",
                items: [
                    { time: "All Day", activity: "Hacking Continues" },
                    { time: "2:00 PM", activity: "Mentorship Sessions" }
                ]
            },
            {
                day: "Day 3 - Sunday",
                items: [
                    { time: "12:00 PM", activity: "Hacking Ends" },
                    { time: "1:00 PM", activity: "Project Presentations" },
                    { time: "4:00 PM", activity: "Awards Ceremony" }
                ]
            }
        ],
        requirements: [
            "Bring your laptop and charger",
            "Basic programming knowledge recommended",
            "Open to all university students (bring student ID)"
        ],
        organizers: [
            {
                name: "Alex Mwangi",
                role: "Club President",
                image: "/static/images/team/president.jpg"
            },
            {
                name: "Sarah Wambui",
                role: "Event Coordinator",
                image: "/static/images/team/vice-president.jpg"
            }
        ]
    },
    {
        id: 2,
        title: "AI for Beginners Workshop",
        description: "Hands-on session on machine learning concepts with Python practicals. No prior experience required.",
        status: "in-progress",
        community: "ai-ml",
        date: { day: "15", month: "May", year: "2024" },
        time: "2:00 PM - 5:00 PM",
        location: "Lab 3",
        price: "KES 500",
        images: ["/static/images/events/ai-workshop.jpg"]
    },
    {
        id: 3,
        title: "Cyber Security Awareness",
        description: "Learn about the latest cyber threats and how to protect yourself online in this interactive workshop.",
        status: "past",
        community: "cyber-security",
        date: { day: "10", month: "Apr", year: "2024" },
        time: "10:00 AM - 1:00 PM",
        location: "Lecture Hall B",
        price: "Free",
        images: ["/static/images/events/cyber-workshop.jpg"]
    }
];

// Community labels
const communityLabels = {
    "web-dev": "Web Development",
    "ai-ml": "AI/ML",
    "cyber-security": "Cyber Security"
};

export default function EventsSection() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showEventModal, setShowEventModal] = useState(false);
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const filteredEvents = activeFilter === "all"
        ? events
        : events.filter(event => event.status === activeFilter);

    const openEventModal = (event) => {
        setSelectedEvent(event);
        setCurrentSlide(0);
        setShowEventModal(true);
    };

    const openRegistrationModal = (event) => {
        setSelectedEvent(event);
        setShowRegistrationModal(true);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === selectedEvent.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? selectedEvent.images.length - 1 : prev - 1
        );
    };

    return (
        <main>
            {/* Events Main Section */}
            <section className="bg-white">
                {/* Events Header */}
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">Our Events</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Join our knowledge-sharing sessions, workshops, hackathons and more
                    </p>
                </div>

                {/* Events Filter */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => setActiveFilter("all")}
                            className={`px-6 py-2 rounded-full font-medium transition-colors ${activeFilter === "all"
                                ? "bg-green-500 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            All Events
                        </button>
                        <button
                            onClick={() => setActiveFilter("upcoming")}
                            className={`px-6 py-2 rounded-full font-medium transition-colors ${activeFilter === "upcoming"
                                ? "bg-green-500 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            Upcoming
                        </button>
                        <button
                            onClick={() => setActiveFilter("in-progress")}
                            className={`px-6 py-2 rounded-full font-medium transition-colors ${activeFilter === "in-progress"
                                ? "bg-green-500 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            In Progress
                        </button>
                        <button
                            onClick={() => setActiveFilter("past")}
                            className={`px-6 py-2 rounded-full font-medium transition-colors ${activeFilter === "past"
                                ? "bg-green-500 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            Past Events
                        </button>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredEvents.map((event) => (
                            <div key={event.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                {/* Event Image */}
                                <div className="relative h-48">
                                    <Image
                                        src={event.images[0]}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Date Tag */}
                                    <div className="absolute top-4 left-4 bg-white text-green-500 text-center rounded-md w-14">
                                        <div className="font-bold text-xl">{event.date.day}</div>
                                        <div className="text-xs font-medium uppercase -mt-1">{event.date.month}</div>
                                    </div>
                                    {/* Status Tag */}
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium text-white ${event.status === "upcoming" ? "bg-amber-400" :
                                        event.status === "in-progress" ? "bg-blue-500" :
                                            "bg-gray-500"
                                        }`}>
                                        {event.status === "upcoming" ? "Upcoming" :
                                            event.status === "in-progress" ? "In Progress" : "Past Event"}
                                    </div>
                                    {/* Price Tag */}
                                    <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-sm font-medium text-white ${event.price === "Free" ? "bg-green-500" : "bg-purple-500"
                                        }`}>
                                        {event.price}
                                    </div>
                                </div>

                                {/* Event Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>

                                    {/* Event Meta */}
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                                        <span className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {event.time}
                                        </span>
                                        <span className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {event.location}
                                        </span>
                                        <span className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                            {communityLabels[event.community]}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 mb-4">{event.description}</p>

                                    {/* Event CTA */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        {event.status === "past" ? (
                                            <button
                                                className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md cursor-not-allowed"
                                                disabled
                                            >
                                                Event Ended
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => openRegistrationModal(event)}
                                                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors"
                                            >
                                                Register
                                            </button>
                                        )}
                                        <button
                                            onClick={() => openEventModal(event)}
                                            className="w-full flex items-center justify-center border border-green-500 text-green-500 hover:bg-green-50 py-2 px-4 rounded-md transition-colors"
                                        >
                                            Details
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Details Modal */}
            {showEventModal && selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="relative">
                            <button
                                onClick={() => setShowEventModal(false)}
                                className="absolute top-4 right-4 bg-white rounded-full p-2 z-10 text-gray-700 hover:text-gray-900"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Event Carousel */}
                            <div className="relative h-64 md:h-96 bg-gray-200">
                                {selectedEvent.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-300 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${selectedEvent.title} - Image ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}

                                {/* Carousel Controls */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
                                    <button
                                        onClick={prevSlide}
                                        className="bg-white bg-opacity-80 rounded-full p-2 text-gray-700 hover:text-gray-900"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="bg-white bg-opacity-80 rounded-full p-2 text-gray-700 hover:text-gray-900"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Carousel Indicators */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                    {selectedEvent.images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Event Details Content */}
                            <div className="p-6 md:p-8">
                                <div className="flex flex-wrap gap-3 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${selectedEvent.status === "upcoming" ? "bg-amber-400" :
                                        selectedEvent.status === "in-progress" ? "bg-blue-500" :
                                            "bg-gray-500"
                                        }`}>
                                        {selectedEvent.status === "upcoming" ? "Upcoming" :
                                            selectedEvent.status === "in-progress" ? "In Progress" : "Past Event"}
                                    </span>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${selectedEvent.price === "Free" ? "bg-green-500" : "bg-purple-500"
                                        }`}>
                                        {selectedEvent.price}
                                    </span>
                                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                                        {communityLabels[selectedEvent.community]}
                                    </span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{selectedEvent.title}</h2>

                                {/* Event Meta */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                    <div className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <h4 className="text-sm text-gray-500">Date</h4>
                                            <p className="font-medium">{selectedEvent.date.day} {selectedEvent.date.month} {selectedEvent.date.year}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <h4 className="text-sm text-gray-500">Time</h4>
                                            <p className="font-medium">{selectedEvent.time}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <h4 className="text-sm text-gray-500">Location</h4>
                                            <p className="font-medium">{selectedEvent.location}, Karatina University</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <div>
                                            <h4 className="text-sm text-gray-500">Community</h4>
                                            <p className="font-medium">Open to all communities</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Event Body */}
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">About This Event</h3>
                                        <p className="text-gray-600">{selectedEvent.fullDescription || selectedEvent.description}</p>
                                    </div>

                                    {selectedEvent.details && (
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">Event Details</h3>
                                            <ul className="space-y-2">
                                                {selectedEvent.details.map((detail, index) => (
                                                    <li key={index} className="text-gray-600">
                                                        <strong>{detail.label}:</strong> {detail.value}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {selectedEvent.schedule && (
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">Schedule</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                {selectedEvent.schedule.map((day, index) => (
                                                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                                        <h4 className="font-bold text-green-500 mb-3">{day.day}</h4>
                                                        <ul className="space-y-2">
                                                            {day.items.map((item, itemIndex) => (
                                                                <li key={itemIndex} className="text-gray-600">
                                                                    <time className="font-medium">{item.time}</time> {item.activity}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {selectedEvent.requirements && (
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">Requirements</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                {selectedEvent.requirements.map((req, index) => (
                                                    <li key={index}>{req}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {selectedEvent.organizers && (
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-4">Organizers</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                {selectedEvent.organizers.map((organizer, index) => (
                                                    <div key={index} className="flex items-center space-x-4">
                                                        <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gray-200">
                                                            {organizer.image && (
                                                                <Image
                                                                    src={organizer.image}
                                                                    alt={organizer.name}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            )}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-gray-800">{organizer.name}</h4>
                                                            <p className="text-gray-600">{organizer.role}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Event Footer */}
                                <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                                    {selectedEvent.status !== "past" && (
                                        <button
                                            onClick={() => {
                                                setShowEventModal(false);
                                                openRegistrationModal(selectedEvent);
                                            }}
                                            className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-md transition-colors"
                                        >
                                            Register Now
                                        </button>
                                    )}
                                    <div className="flex items-center space-x-4">
                                        <span className="text-gray-600">Share:</span>
                                        <a href="#" className="text-gray-500 hover:text-green-500">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-green-500">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-green-500">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-green-500">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-500 hover:text-green-500">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Registration Modal */}
            {showRegistrationModal && selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg max-w-md w-full">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-gray-800">
                                    Register for <span className="text-green-500">{selectedEvent.title}</span>
                                </h3>
                                <button
                                    onClick={() => setShowRegistrationModal(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <p className="text-gray-600 mb-6">
                                Date: {selectedEvent.date.day} {selectedEvent.date.month} {selectedEvent.date.year}
                            </p>

                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="regName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="regName"
                                        name="name"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="regEmail" className="block text-sm font-medium text-gray-700 mb-1">
                                        University Email
                                    </label>
                                    <input
                                        type="email"
                                        id="regEmail"
                                        name="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="regProgram" className="block text-sm font-medium text-gray-700 mb-1">
                                        Programme of Study
                                    </label>
                                    <input
                                        type="text"
                                        id="regProgram"
                                        name="program"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="regNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                        Registration Number
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>)}
        </main>)
}
