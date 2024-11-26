import React from "react";

const ForexSignals = () => {
    return (
        <div className="bg-white py-12 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto space-y-16">
                {/* Section 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="relative">
                        <img
                            src="/b2.jpg" // Replace with your image path
                            alt="Forex Signals"
                            className="rounded-lg shadow-lg"
                        />
                        {/* Overlay Card */}
                        <div className="absolute top-4 left-4 bg-blue-900 text-white p-4 rounded-lg shadow-md">
                            <h4 className="font-bold">High performance</h4>
                            <p className="text-sm">Consistent signals delivered direct to your phone</p>
                            <p className="text-sm underline">Weekly pips</p>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What are <span className="text-orange-500">Forex signals?</span>
                            <br />
                            And how they can help you?
                        </h2>
                        <hr className="w-16 border-orange-500 mb-4" />
                        <p className="text-gray-700">
                            Are you new to trading and want to get a head start? Or, maybe you have been trading
                            for a while but have never made a profit? If so, then daily Forex signals could be
                            exactly what you need to fast-track your learning curve. The truth is that Forex
                            trading is hard, it requires years of experience and every trade requires detailed
                            analysis of technical and fundamental factors. This is why only a handful of traders
                            ever achieve their goals. But don’t worry, 1000pip Builder was...
                        </p>
                        <p className="mt-4 font-semibold text-blue-500 cursor-pointer">
                            Read More →
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            24/5 signals
                        </h3>
                        <hr className="w-16 border-orange-500 mb-4" />
                        <p className="text-gray-700">
                            Daily Forex signals for all time zones. Bob is based in London, UK and trades the
                            Asian, US and European sessions. There are normally trading signals throughout the
                            24 hour period. So, whatever time zone you are in, there should be signals for you
                            to follow. Many members are only able to follow for part of the day and still
                            receive plenty of Forex trading signals.
                        </p>
                    </div>

                    {/* Image */}
                    <div>
                        <img
                            src="/b3.jpg" // Replace with your image path
                            alt="Forex Chart"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForexSignals;
