import React from "react";
import { FaClipboardList, FaSmile, FaClock, FaCode } from "react-icons/fa";

const StatsSection = () => {
    return (
        <div className="bg-blue-900 py-12 text-white">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {/* Stat 1 */}
                <div className="flex flex-col items-center space-y-2">
                    <FaClipboardList className="text-orange-500 text-3xl" />
                    <h3 className="text-2xl font-bold">1-5</h3>
                    <p className="text-sm text-gray-400">TRADES PER DAY*</p>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center space-y-2">
                    <FaSmile className="text-orange-500 text-3xl" />
                    <h3 className="text-2xl font-bold">350</h3>
                    <p className="text-sm text-gray-400">PIPS - MONTHLY TARGET</p>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center space-y-2">
                    <FaClock className="text-orange-500 text-3xl" />
                    <h3 className="text-2xl font-bold">10+</h3>
                    <p className="text-sm text-gray-400">YEARS EXPERIENCE</p>
                </div>

                {/* Stat 4 */}
                <div className="flex flex-col items-center space-y-2">
                    <FaCode className="text-orange-500 text-3xl" />
                    <h3 className="text-2xl font-bold">15</h3>
                    <p className="text-sm text-gray-400">CURRENCY PAIRS</p>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
