'use client';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>Stylish Portfolio - Anum</title>
        <meta name="description" content="Portfolio of Anum, Front-end Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="min-h-screen bg-black text-white flex flex-col">
        {/* Navigation Bar */}
        <header className="flex justify-between items-center p-6 bg-purple-600 text-white border-b-2 border-purple-800">
          <div className="text-2xl font-bold">Anum</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/about" className="hover:text-purple-300">About</Link>
            <Link href="#skills" className="hover:text-purple-300">Skills</Link>
            <Link href="/projects" className="hover:text-purple-300">Projects</Link>
            <Link href="/contact" className="hover:text-purple-300">Contact</Link>
          </nav>

          {/* Hamburger Menu Button for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none" aria-label="Menu">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586l4.95-4.95a1 1 0 011.414 0z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Navigation */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden bg-purple-600 text-white border-b-2 border-purple-800 transition duration-300 ease-in-out`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/about" className="hover:text-purple-300" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#skills" className="hover:text-purple-300" onClick={toggleMenu}>
              Skills
            </Link>
            <Link href="/projects" className="hover:text-purple-300" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="/contact" className="hover:text-purple-300" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
         {/* Skills Section */}
         <section id='skills' className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">Skills</h2>
            <ul className="list-disc list-inside text-gray-400">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Node js</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </section>

        <Link href="/">
              <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500">
                Go back to home
              </button>
            </Link>





         {/* Footer */}
 <footer className="py-6 bg-purple-600 text-white text-center">
          <p>&copy; 2024 Anum. All rights reserved.</p>
        </footer>

          </main></>)}