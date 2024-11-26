import React from "react";

const HighPerformanceSignals = () => {
    return (
        <div className="bg-blue-50 py-16 px-4 md:px-8 lg:px-16 relative">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Left Image */}
                <div className="flex justify-center">
                    <img
                        src="/phone-dashboard.png" // Replace with your image path
                        alt="Phone Dashboard"
                        className="w-4/5 md:w-3/4 lg:w-3/5 drop-shadow-lg"
                    />
                </div>

                {/* Right Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                        High Performance Signals
                    </h2>
                    <hr className="w-16 border-orange-500 mt-4 mb-6 mx-auto md:mx-0" />
                    <p className="text-lg text-gray-800">
                        Signals are sent by{" "}
                        <span className="text-orange-500 font-semibold">Telegram app</span>, Email and SMS
                    </p>
                    <p className="mt-4 text-gray-500">
                        Following our verified Forex Signals is easy but please remember you will be trading
                        at your own risk, so use good risk management.
                    </p>
                    <button className="mt-6 bg-orange-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                        Join Us Now
                    </button>
                </div>
            </div>
            <div className="container mx-auto mt-16">
                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                            Perfect for beginners
                        </h2>
                        <hr className="w-16 border-orange-500 mt-4 mb-6" />
                        <p className="text-gray-700">
                            If you are new to Forex, then our trading signals could give you the head start
                            you need. Once you sign up, you will receive detailed information explaining how
                            the Forex signals work and the key information you need to start trading Forex.
                            You are in charge of your funds at all times, and placing the trades is entirely
                            up to you. We are always available to provide any help and assistance that you
                            may require. You can email us with any questions that you have, and we will guide
                            you.
                        </p>
                        <p className="mt-4 font-semibold text-blue-500 cursor-pointer">
                            Read More →
                        </p>
                    </div>

                    {/* Right Illustration */}
                    <div className="flex justify-center relative">
                        {/* Background Path */}
                        <svg
                            className="absolute inset-0 w-full h-full"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500 200"
                            fill="none"
                        >
                            <path
                                d="M0 150 C 150 100, 350 200, 500 150"
                                stroke="#A2A2A2"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                        <img
                            src="/b4.jpg" // Replace with your image path
                            alt="Forex Signals"
                            className="rounded-lg shadow-lg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighPerformanceSignals;
