import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent absolute top-0 left-0 w-full z-20">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="/logo.jpg" // Replace with your logo path
                        alt="Logo"
                        className="h-8 w-auto"
                    />
                    <h1 className="text-white text-lg font-bold ml-2">
                        PipTonic.com
                    </h1>
                </div>

                {/* Links for Larger Screens */}
                <ul className="hidden md:flex space-x-6 text-white">
                    <li>
                        <a
                            href="#home"
                            className="hover:text-blue-400 transition duration-300"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="hover:text-blue-400 transition duration-300"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#how-it-works"
                            className="hover:text-blue-400 transition duration-300"
                        >
                            How It Works
                        </a>
                    </li>
                    <li>
                        <a
                            href="#performance"
                            className="hover:text-blue-400 transition duration-300"
                        >
                            Performance
                        </a>
                    </li>
                    <li>
                        <a
                            href="#faq"
                            className="hover:text-blue-400 transition duration-300"
                        >
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-blue-400 transition duration-300"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>

                {/* Join Now Button */}
                <button className="hidden md:inline-block border border-white text-white px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
                    Join Now
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={
                                isOpen
                                    ? "M6 18L18 6M6 6l12 12" // X icon
                                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                            }
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black bg-opacity-90 text-white">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li>
                            <a href="#home" className="hover:text-blue-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-blue-400">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#how-it-works"
                                className="hover:text-blue-400"
                            >
                                How It Works
                            </a>
                        </li>
                        <li>
                            <a
                                href="#performance"
                                className="hover:text-blue-400"
                            >
                                Performance
                            </a>
                        </li>
                        <li>
                            <a href="#faq" className="hover:text-blue-400">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-blue-400">
                                Contact Us
                            </a>
                        </li>
                        <button className="mt-4 border border-white px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
                            Join Now
                        </button>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
