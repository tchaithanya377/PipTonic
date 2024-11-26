import React from "react";
import { FaChartLine } from "react-icons/fa";

const TradingStrategies = () => {
    return (
        <div className="bg-blue-900 py-16 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto text-center">
                {/* Title Section */}
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Our Powerful Trading Strategies
                </h2>
                <hr className="w-16 border-orange-500 mt-4 mb-12 mx-auto" />

                {/* Strategies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Strategy 1 */}
                    <div className="bg-blue-800 text-white rounded-lg shadow-lg p-6">
                        <FaChartLine className="text-orange-500 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-4">Trend Capture</h3>
                        <p className="text-gray-300 text-sm">
                            Our primary strategy is focused on using technical and fundamental analysis to
                            identify and follow the long-term trend of a Forex pair. Trade entries are
                            determined by combining support/resistance zones, chart patterns, and short-term
                            momentum. Only when all these factors combine with the long-term trend do we
                            consider entering a trade.
                        </p>
                    </div>

                    {/* Strategy 2 */}
                    <div className="bg-blue-800 text-white rounded-lg shadow-lg p-6">
                        <FaChartLine className="text-orange-500 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-4">Range Trap</h3>
                        <p className="text-gray-300 text-sm">
                            The Forex markets are ranging the majority of the time, and although the potential
                            profits are lower in a ranging market, there are still some good opportunities.
                            Our short-medium term range trading strategy focuses on identifying clear
                            support/resistance zones and using unique chart and candle pattern analysis to
                            trade bounces from the top and bottom of the range.
                        </p>
                    </div>

                    {/* Strategy 3 */}
                    <div className="bg-blue-800 text-white rounded-lg shadow-lg p-6">
                        <FaChartLine className="text-orange-500 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-4">Momentum Rider</h3>
                        <p className="text-gray-300 text-sm">
                            Often following news events, political events, or clear changes in market
                            sentiment, the markets enter a period of strong price movement. To profit from
                            these moves, it is important to enter the move early and exit before the momentum
                            fades. We use a specialist strategy that analyzes divergent activity between
                            short-term price movement and the longer-term trend.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradingStrategies;
