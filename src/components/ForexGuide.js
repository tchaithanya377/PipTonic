import React from "react";
import { FaThumbsUp, FaStar, FaHeart, FaUser, FaSearch } from "react-icons/fa";

const ForexGuide = () => {
    return (
        <div className="bg-white py-12 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                {/* Title Section */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Meet your <span className="text-orange-500">Forex</span> guide
                </h2>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    {/* Text Content */}
                    <div className="flex-1 text-gray-700 space-y-4">
                        <h3 className="text-xl font-bold text-gray-900">
                            Bob James – Lead Trader
                        </h3>
                        <hr className="border-orange-500 w-12" />
                        <p>
                            Over <span className="font-semibold">10 years Forex trading experience</span>
                        </p>
                        <p>
                            Bob is the lead trader behind 1000pip Builder. He worked for one of the leading
                            financial services institutions in London and has over 10 years of experience as
                            a skilled Forex trader and mentor. He now wants to bring his expertise to a
                            wider audience and help home traders get a better sense of FX trading.
                        </p>
                        <p className="font-semibold text-blue-500 cursor-pointer">
                            Read More →
                        </p>
                    </div>

                    {/* Illustration */}
                    <div className="flex-1 mt-8 md:mt-0 md:ml-8 flex justify-center">
                        <img
                            src="/b1.jpg" // Replace with your illustration path
                            alt="Bob at desk"
                            className="w-64 md:w-80"
                            
                        />
                    </div>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                       {/* Feature 1 */}
            <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaThumbsUp className="text-blue-500 text-xl" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900">Proven performance</h4>
                    <p className="text-sm text-gray-600">
                        High performance signals verified by MyFXBook
                    </p>
                </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaStar className="text-yellow-500 text-xl" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900">5 star rated</h4>
                    <p className="text-sm text-gray-600">
                        Recommended by happy members
                    </p>
                </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaHeart className="text-red-500 text-xl" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900">Extensive experience</h4>
                    <p className="text-sm text-gray-600">
                        Trusted guidance for new and advanced traders
                    </p>
                </div>
            </div>

            {/* Feature 4: Expert Analysis */}
            <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaSearch className="text-blue-500 text-xl" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900">Expert analysis</h4>
                    <p className="text-sm text-gray-600">
                        Reliable signals from an experienced trader
                    </p>
                </div>
            </div>

            {/* Feature 5: Full Support */}
            <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaUser className="text-blue-500 text-xl" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900">Full support</h4>
                    <p className="text-sm text-gray-600">
                        We are here to support you all the way
                    </p>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ForexGuide;
