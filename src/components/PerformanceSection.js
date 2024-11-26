import React from "react";

const PerformanceSection = () => {
    return (
        <div className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                {/* Title Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Outstanding performance
                    </h2>
                    <p className="text-lg text-gray-600">
                        We aim to produce strong results in all conditions
                    </p>
                    <hr className="mt-4 w-16 mx-auto border-orange-500" />
                </div>

                {/* Main Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-lg font-bold text-gray-800 flex items-center">
                            <span className="h-3 w-3 bg-orange-500 rounded-full inline-block mr-2"></span>
                            High Performance Signals
                        </h3>
                        <p className="mt-4 text-gray-600">
                            Our trading plan aims to produce strong and consistent results with minimal
                            drawdown. Whilst past performance is no guarantee of future results, we use
                            a number of trading strategies that are specially tailored to different market
                            conditions. Professional Forex traders are experts at managing risk and we make
                            sure that each trade is very carefully controlled. We always use tight stop losses
                            and closely monitor our positions to maximize our results but the choice to trade
                            will always be yours.
                        </p>
                    </div>

                    {/* Right Chart */}
                    <div className="flex justify-center">
                        <img
                            src="/chart.jpg" // Replace with your chart image path
                            alt="Performance Chart"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Footer Section */}
                <div className="text-center mt-12">
                    <h3 className="text-xl font-bold text-gray-800">
                        Independently verified
                    </h3>
                    <p className="text-gray-600">
                        Trades have been monitored and tracked by MyFXBook
                    </p>
                    <hr className="mt-4 w-16 mx-auto border-orange-500" />
                </div>
            </div>
        </div>
    );
};

export default PerformanceSection;
