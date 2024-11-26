import React from "react";

const WinningTrades = () => {
    return (
        <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto text-center">
                {/* Title Section */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Sample winning trades
                </h2>
                <hr className="w-16 border-orange-500 mt-4 mb-12 mx-auto" />

                {/* Images Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <img
                        src="/b5.jpg" // Replace with your image path
                        alt="Trade 1"
                        className="rounded-lg shadow-md"
                    />
                    <img
                        src="/b6.jpg" // Replace with your image path
                        alt="Trade 2"
                        className="rounded-lg shadow-md"
                    />
                    <img
                        src="/b7.jpg" // Replace with your image path
                        alt="Trade 3"
                        className="rounded-lg shadow-md"
                    />
                    
                </div>

                {/* Description Section */}
                <p className="mt-8 text-gray-600 text-sm">
                    Obviously not all our trades have been winners. That would be unrealistic. We aim for
                    strong growth but when trading on your own account, you will do so at your own risk. Please
                    make sure that you have a good risk management plan. We will provide details on risk
                    management in our welcome pack.
                </p>
            </div>
        </div>
    );
};

export default WinningTrades;
