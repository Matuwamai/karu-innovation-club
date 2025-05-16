'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../public/images/Innovation Club New Logo-Website Logo.png"
import {
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaChevronDown,
  FaCode,
  FaShieldAlt,
  FaLink,
  FaBrain,
  FaRobot,
  FaMicrochip,
  FaLightbulb,
  FaCalendarAlt,
  FaBlog,
  FaEnvelope,
  FaUserCircle,
  FaBars
} from 'react-icons/fa';
import { useState } from 'react';
import {  useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommunitiesOpen, setIsCommunitiesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Innovation Club Logo"
            width={120}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li className="relative">
              <Link href="/" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                <FaHome className="mr-1" />
                <span>Home</span>
              </Link>
            </li>

            <li className="relative">
              <button
                onClick={() => router.push('/about')}
                className="flex items-center text-gray-700 hover:text-amber-400 transition"
              >
                <FaInfoCircle className="mr-1" />
                <span>About</span>
              </button>
            </li>

            <li className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-amber-400 transition"
                onClick={() => setIsCommunitiesOpen(!isCommunitiesOpen)}
              >
                <FaUsers className="mr-1" />
                <span>Communities</span>
                <FaChevronDown className="ml-1 text-xs" />
              </button>

              {/* Dropdown Menu */}
              <ul className={`absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-10 ${isCommunitiesOpen ? 'block' : 'hidden'} group-hover:block`}>
                <li>
                  <Link href="/communities" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <FaCode className="mr-2" />
                    <span>Web Development</span>
                  </Link>
                </li>
                <li>
                  <Link href="/communities" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <FaShieldAlt className="mr-2" />
                    <span>Cyber Security</span>
                  </Link>
                </li>
                <li>
                  <Link href="/communities" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <FaLink className="mr-2" />
                    <span>Blockchain & Web3</span>
                  </Link>
                </li>
                <li>
                  <Link href="/communities" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <FaBrain className="mr-2" />
                    <span>ML/DS/AI</span>
                  </Link>
                </li>
                <li>
                  <Link href="/communities" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <FaRobot className="mr-2" />
                    <span>Android Community</span>
                  </Link>
                </li>
                <li>
                  <Link href="/communities" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <FaMicrochip className="mr-2" />
                    <span>IoT</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative">
              <Link href="/projects" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                <FaLightbulb className="mr-1" />
                <span>Projects</span>
              </Link>
            </li>

            <li className="relative">
              <Link href="/events" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                <FaCalendarAlt className="mr-1" />
                <span>Events</span>
              </Link>
            </li>

            <li className="relative">
              <Link href="/blog" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                <FaBlog className="mr-1" />
                <span>Blog</span>
              </Link>
            </li>

            <li className="relative">
              <Link href="/contact-us" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                <FaEnvelope className="mr-1" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex items-center ml-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Login
            </button>
            <FaUserCircle className="ml-3 text-2xl text-gray-500 hover:text-blue-600 cursor-pointer" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars className="text-2xl" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="py-2 px-4 space-y-2">
          <li>
            <Link href="/" className="flex items-center py-2 text-gray-700 hover:text-blue-600">
              <FaHome className="mr-2" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex items-center py-2 text-gray-700 hover:text-blue-600">
              <FaInfoCircle className="mr-2" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <button
              className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsCommunitiesOpen(!isCommunitiesOpen)}
            >
              <div className="flex items-center">
                <FaUsers className="mr-2" />
                <span>Communities</span>
              </div>
              <FaChevronDown className={`transition-transform ${isCommunitiesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isCommunitiesOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link href="/communities" className="flex items-center py-2 text-gray-700 hover:text-blue-600">
                    <FaCode className="mr-2" />
                    <span>Web Development</span>
                  </Link>
                </li>
                <li>
                  <Link href="/communities" className="flex items-center py-2 text-gray-700 hover:text-blue-600">
                    <FaShieldAlt className="mr-2" />
                    <span>Cyber Security</span>
                  </Link>
                </li>
                <li>
                  <Link href="/communities" className="flex items-center py-2 text-gray-700 hover:text-blue-600">
                    <FaLink className="mr-2" />
                    <span>Blockchain & Web3</span>
                  </Link>
                </li>
                <li>
                  <Link href="/communities" className="flex items-center py-2 text-gray-700 hover:text-blue-600">
                    <FaBrain className="mr-2" />
                    <span>ML/DS/AI</span>
                  </Link>
                </li>
                <li>
                  <Link href="/communities" className="flex items-center py-2 text-gray-700 hover:text-blue-600">
                    <FaRobot className="mr-2" />
                    <span>Android Community</span>
                  </Link>
                </li>
                <li>
                  <Link href="/communities" className="flex items-center py-2 text-gray-700 hover:text-blue-600">
                    <FaMicrochip className="mr-2" />
                    <span>IoT</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/projects" className="flex items-center py-2 text-gray-700 hover:text-blue-600">
              <FaLightbulb className="mr-2" />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/events" className="flex items-center py-2 text-gray-700 hover:text-blue-600">
              <FaCalendarAlt className="mr-2" />
              <span>Events</span>
            </Link>
          </li>
          <li>
            <Link href="/blog" className="flex items-center py-2 text-gray-700 hover:text-blue-600">
              <FaBlog className="mr-2" />
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="flex items-center py-2 text-gray-700 hover:text-blue-600">
              <FaEnvelope className="mr-2" />
              <span>Contact</span>
            </Link>
          </li>
          <li className="pt-4 border-t border-gray-200">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Login
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}