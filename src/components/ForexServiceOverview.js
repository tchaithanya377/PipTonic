import React from "react";
import { FaChartLine, FaSignal, FaCheckCircle, FaEnvelope, FaHandHoldingUsd } from "react-icons/fa";

const ForexServiceOverview = () => {
    return (
        <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Image */}
                <div className="flex justify-center">
                    <img
                        src="/b12.jpg" // Replace with your image path
                        alt="Forex Monitor"
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Content */}
                <div className="bg-blue-900 text-white rounded-lg p-8 shadow-lg">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        Everything you need from a Forex signal service and more ...
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <FaChartLine className="text-orange-500 text-xl mr-4" />
                            <span>Outstanding performance</span>
                        </li>
                        <li className="flex items-center">
                            <FaSignal className="text-orange-500 text-xl mr-4" />
                            <span>Leading technical analysis</span>
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-orange-500 text-xl mr-4" />
                            <span>Proven results</span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-orange-500 text-xl mr-4" />
                            <span>Email and SMS signals</span>
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-orange-500 text-xl mr-4" />
                            <span>On-going expert support</span>
                        </li>
                        <li className="flex items-center">
                            <FaHandHoldingUsd className="text-orange-500 text-xl mr-4" />
                            <span>The power to trade remains in your hands</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ForexServiceOverview;
