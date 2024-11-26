import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen bg-black">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/bg4.mp4"
                autoPlay
                loop
                muted
                playsInline
            ></video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                    Trusted Forex Signals
                </h1>
                <p className="text-lg md:text-xl mb-6 animate-fade-in-delay">
                    Your Journey Starts Here
                </p>
                <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                    Send Me Proven Forex Signals
                </button>
                <p className="text-yellow-400 mt-4 text-sm md:text-base animate-fade-in-delay-2">
                    75% OFF BLACK FRIDAY SALE – Ends 1 December
                </p>
            </div>
        </div>
    );
};

export default Hero;
