import { FaCode, FaShieldAlt, FaLink, FaBrain, FaRobot, FaMicrochip, FaUserTie, FaUsers, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function Communities() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Tech Communities</h1>
          <p className="text-xl md:text-2xl">Join specialized groups to collaborate and innovate</p>
        </div>
      </section>

      {/* Communities List Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore Our Communities</h2>
            <p className="text-gray-600">Connect with like-minded innovators in your field of interest</p>
          </div>

          {/* Communities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development Community */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 p-4 flex items-center">
                <div className="bg-white p-3 rounded-full mr-4">
                  <FaCode className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Web Development</h3>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-4">
                  <p className="flex items-center text-gray-700"><FaUserTie className="mr-2" /> Lead: Brian Kiprop</p>
                  <p className="flex items-center text-gray-700"><FaUsers className="mr-2" /> 85 Members</p>
                  <p className="flex items-center text-gray-700"><FaMapMarkerAlt className="mr-2" /> CS Lab 2</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Meeting Schedule:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Saturday:</strong> 10AM - 12PM (Frontend Fundamentals)</li>
                    <li><strong>Monday:</strong> 3PM - 5PM (Backend Development)</li>
                    <li><strong>Thursday:</strong> 4PM - 6PM (Project Collaboration)</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="mb-2 text-gray-800">Our web development community focuses on modern full-stack development:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>HTML5, CSS3, JavaScript (ES6+)</li>
                    <li>React, Vue, and Angular frameworks</li>
                    <li>Node.js, Express, and Django backends</li>
                    <li>RESTful APIs and GraphQL</li>
                    <li>Database design with MongoDB and PostgreSQL</li>
                  </ul>
                </div>

                <a 
                  href="https://chat.whatsapp.com/examplewebdev" 
                  className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  <FaWhatsapp className="mr-2" /> Join WhatsApp Group
                </a>
              </div>
            </div>

            {/* Cybersecurity Community */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-red-600 p-4 flex items-center">
                <div className="bg-white p-3 rounded-full mr-4">
                  <FaShieldAlt className="text-red-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Cybersecurity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-4">
                  <p className="flex items-center text-gray-700"><FaUserTie className="mr-2" /> Lead: Grace Muthoni</p>
                  <p className="flex items-center text-gray-700"><FaUsers className="mr-2" /> 62 Members</p>
                  <p className="flex items-center text-gray-700"><FaMapMarkerAlt className="mr-2" /> Security Lab</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Meeting Schedule:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Saturday:</strong> 10AM - 12PM (CTF Challenges)</li>
                    <li><strong>Monday:</strong> 3PM - 5PM (Ethical Hacking)</li>
                    <li><strong>Thursday:</strong> 4PM - 6PM (Security Research)</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="mb-2 text-gray-800">Our cybersecurity community explores:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Network penetration testing</li>
                    <li>Cryptography and encryption</li>
                    <li>Digital forensics techniques</li>
                    <li>Security compliance standards</li>
                    <li>Vulnerability assessment</li>
                  </ul>
                  <p className="mt-2 text-gray-700">We compete in national cybersecurity competitions.</p>
                </div>

                <a 
                  href="https://chat.whatsapp.com/examplecybersec" 
                  className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  <FaWhatsapp className="mr-2" /> Join WhatsApp Group
                </a>
              </div>
            </div>

            {/* Blockchain & Web3 Community */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-600 p-4 flex items-center">
                <div className="bg-white p-3 rounded-full mr-4">
                  <FaLink className="text-purple-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Blockchain & Web3</h3>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-4">
                  <p className="flex items-center text-gray-700"><FaUserTie className="mr-2" /> Lead: James Mwai</p>
                  <p className="flex items-center text-gray-700"><FaUsers className="mr-2" /> 48 Members</p>
                  <p className="flex items-center text-gray-700"><FaMapMarkerAlt className="mr-2" /> Blockchain Lab</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Meeting Schedule:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Saturday:</strong> 10AM - 12PM (Smart Contracts)</li>
                    <li><strong>Monday:</strong> 3PM - 5PM (DApp Development)</li>
                    <li><strong>Thursday:</strong> 4PM - 6PM (Blockchain Theory)</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="mb-2 text-gray-800">Our blockchain community focuses on:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Ethereum and Solidity programming</li>
                    <li>Smart contract development</li>
                    <li>Decentralized finance (DeFi) concepts</li>
                    <li>NFT and token standards</li>
                    <li>Web3.js and Ethers.js integration</li>
                  </ul>
                  <p className="mt-2 text-gray-700">We build real-world blockchain solutions.</p>
                </div>

                <a 
                  href="https://chat.whatsapp.com/exampleblockchain" 
                  className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  <FaWhatsapp className="mr-2" /> Join WhatsApp Group
                </a>
              </div>
            </div>

            {/* AI/ML & Data Science Community */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-indigo-600 p-4 flex items-center">
                <div className="bg-white p-3 rounded-full mr-4">
                  <FaBrain className="text-indigo-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">AI/ML & Data Science</h3>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-4">
                  <p className="flex items-center text-gray-700"><FaUserTie className="mr-2" /> Lead: Sarah Wanjiku</p>
                  <p className="flex items-center text-gray-700"><FaUsers className="mr-2" /> 73 Members</p>
                  <p className="flex items-center text-gray-700"><FaMapMarkerAlt className="mr-2" /> Data Lab</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Meeting Schedule:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Saturday:</strong> 10AM - 12PM (Kaggle Competitions)</li>
                    <li><strong>Monday:</strong> 3PM - 5PM (Algorithm Deep Dives)</li>
                    <li><strong>Thursday:</strong> 4PM - 6PM (Research Papers)</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="mb-2 text-gray-800">Our AI/ML community explores:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Python for data science (NumPy, Pandas)</li>
                    <li>Machine learning algorithms</li>
                    <li>Neural networks and deep learning</li>
                    <li>Natural language processing</li>
                    <li>Computer vision applications</li>
                  </ul>
                  <p className="mt-2 text-gray-700">We work with real-world datasets.</p>
                </div>

                <a 
                  href="https://chat.whatsapp.com/exampleaiml" 
                  className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  <FaWhatsapp className="mr-2" /> Join WhatsApp Group
                </a>
              </div>
            </div>

            {/* Android Development Community */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-600 p-4 flex items-center">
                <div className="bg-white p-3 rounded-full mr-4">
                  <FaRobot className="text-green-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Android Development</h3>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-4">
                  <p className="flex items-center text-gray-700"><FaUserTie className="mr-2" /> Lead: David Ochieng</p>
                  <p className="flex items-center text-gray-700"><FaUsers className="mr-2" /> 56 Members</p>
                  <p className="flex items-center text-gray-700"><FaMapMarkerAlt className="mr-2" /> Mobile Lab</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Meeting Schedule:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Saturday:</strong> 10AM - 12PM (Kotlin Basics)</li>
                    <li><strong>Monday:</strong> 3PM - 5PM (App Development)</li>
                    <li><strong>Thursday:</strong> 4PM - 6PM (Play Store Publishing)</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="mb-2 text-gray-800">Our Android community focuses on:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Kotlin programming language</li>
                    <li>Jetpack components</li>
                    <li>Material design principles</li>
                    <li>API integration</li>
                    <li>App monetization strategies</li>
                  </ul>
                  <p className="mt-2 text-gray-700">We publish apps on the Play Store.</p>
                </div>

                <a 
                  href="https://chat.whatsapp.com/exampleandroid" 
                  className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  <FaWhatsapp className="mr-2" /> Join WhatsApp Group
                </a>
              </div>
            </div>

            {/* IoT Community */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-yellow-600 p-4 flex items-center">
                <div className="bg-white p-3 rounded-full mr-4">
                  <FaMicrochip className="text-yellow-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Internet of Things</h3>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-4">
                  <p className="flex items-center text-gray-700"><FaUserTie className="mr-2" /> Lead: Peter Kamau</p>
                  <p className="flex items-center text-gray-700"><FaUsers className="mr-2" /> 42 Members</p>
                  <p className="flex items-center text-gray-700"><FaMapMarkerAlt className="mr-2" /> IoT Lab</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Meeting Schedule:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Saturday:</strong> 10AM - 12PM (Sensor Networks)</li>
                    <li><strong>Monday:</strong> 3PM - 5PM (Embedded Systems)</li>
                    <li><strong>Thursday:</strong> 4PM - 6PM (Smart Devices)</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="mb-2 text-gray-800">Our IoT community builds:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Arduino and Raspberry Pi projects</li>
                    <li>Home automation systems</li>
                    <li>Environmental monitoring devices</li>
                    <li>Wireless sensor networks</li>
                    <li>Edge computing solutions</li>
                  </ul>
                  <p className="mt-2 text-gray-700">We create practical IoT applications.</p>
                </div>

                <a 
                  href="https://chat.whatsapp.com/exampleiot" 
                  className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  <FaWhatsapp className="mr-2" /> Join WhatsApp Group
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}