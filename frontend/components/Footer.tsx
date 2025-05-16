import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaChevronRight, FaCode, FaShieldAlt, FaLink, FaBrain, FaRobot, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/static/images/Innovation Club New Logo- Primary Logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-lg font-semibold">Karatina University Innovation Club</span>
            </Link>
            <p className="text-gray-400">
              Empowering innovators and creators through collaboration and technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="flex items-center text-gray-400 hover:text-white transition">
                  <FaChevronRight className="mr-2 text-xs" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center text-gray-400 hover:text-white transition">
                  <FaChevronRight className="mr-2 text-xs" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="flex items-center text-gray-400 hover:text-white transition">
                  <FaChevronRight className="mr-2 text-xs" /> Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex items-center text-gray-400 hover:text-white transition">
                  <FaChevronRight className="mr-2 text-xs" /> Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="flex items-center text-gray-400 hover:text-white transition">
                  <FaChevronRight className="mr-2 text-xs" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Communities</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/communities" className="flex items-center text-gray-400 hover:text-white transition">
                  <FaCode className="mr-2" /> Web Development
                </Link>
              </li>
              <li>
                <Link href="/communities" className="flex items-center text-gray-400 hover:text-white transition">
                  <FaShieldAlt className="mr-2" /> Cyber Security
                </Link>
              </li>
              <li>
                <Link href="/communities" className="flex items-center text-gray-400 hover:text-white transition">
                  <FaLink className="mr-2" /> Blockchain & Web3
                </Link>
              </li>
              <li>
                <Link href="/communities" className="flex items-center text-gray-400 hover:text-white transition">
                  <FaBrain className="mr-2" /> AI/ML/Data Science
                </Link>
              </li>
              <li>
                <Link href="/communities" className="flex items-center text-gray-400 hover:text-white transition">
                  <FaRobot className="mr-2" /> Android Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                Karatina University, Main Campus
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 flex-shrink-0" />
                innovationclub@karu.ac.ke
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="mt-1 mr-3 flex-shrink-0" />
                +254 7XX XXX XXX
              </li>
              <li className="flex items-start">
                <FaClock className="mt-1 mr-3 flex-shrink-0" />
                Mon-Fri: 8:00 AM - 5:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Karatina University Innovation Club. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacypolicy" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/termsofservice" className="text-gray-400 hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}