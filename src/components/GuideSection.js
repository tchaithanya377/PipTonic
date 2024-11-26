import React from "react";
import { FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

const GuideSection = () => {
    return (
        <div className="bg-blue-900 py-12 px-4 md:px-8 lg:px-16 text-white">
            <div className="container mx-auto space-y-16">
                {/* Section 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="flex items-center mb-4">
                            <FaQuoteLeft className="text-4xl text-orange-500 mr-2" />
                            <h2 className="text-3xl md:text-4xl font-bold">
                                How we’ll guide you in mastering Forex
                            </h2>
                        </div>
                        <p className="text-lg mb-8 text-gray-300">
                            Easy steps that could transform your trading
                        </p>

                        <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                            Learn how our Forex signals work
                        </h3>
                        <hr className="w-16 border-orange-500 mb-4" />
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FaCheckCircle className="text-orange-500 mr-2" />
                                <span>Easy step-by-step guidance</span>
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="text-orange-500 mr-2" />
                                <span>Everything you need to follow the signals</span>
                            </li>
                        </ul>
                        <p className="mt-4 text-gray-300">
                            When you sign up for our Forex signal service, we will send you
                            a detailed email explaining exactly how our Forex service works.
                            We make everything as easy as possible and will walk you through
                            everything you need to know.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div>
                        <img
                            src="/b8.jpg" // Replace with your image path
                            alt="Forex Signals Work"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Section 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Image */}
                    <div>
                        <img
                            src="/b9.jpg" // Replace with your image path
                            alt="Forex Trading"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                            Follow our Forex trading signals
                        </h3>
                        <hr className="w-16 border-orange-500 mb-4" />
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FaCheckCircle className="text-orange-500 mr-2" />
                                <span>Clear entry price, stop loss and take profit</span>
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="text-orange-500 mr-2" />
                                <span>Receive signals at home or on the go</span>
                            </li>
                        </ul>
                        <p className="mt-4 text-gray-300">
                            We rigorously analyse the Forex markets all day every day
                            searching for the best trading opportunities. Whenever a trade
                            is entered on our account, you will automatically receive an
                            email, Telegram, and SMS with all the key details: entry price,
                            stop loss, and take profit, etc. Follow anywhere, trade on your
                            own accord.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                            We support you all the way
                        </h3>
                        <hr className="w-16 border-orange-500 mb-4" />
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FaCheckCircle className="text-orange-500 mr-2" />
                                <span>Full help and support provided</span>
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="text-orange-500 mr-2" />
                                <span>Ask as many questions as you like</span>
                            </li>
                        </ul>
                        <p className="mt-4 text-gray-300">
                            Sadly, 74-89% of retail investors lose money when trading CFDs. Our primary goal
                            is to help you understand FX, and we will provide as much support as possible to
                            achieve that. You will have unequaled, direct access to our highly experienced
                            trader, Bob James. He will be there for you, to answer your questions and work
                            with you to make sure you have grasped the key principles. You will always have
                            the freedom to trade as you wish!
                        </p>
                    </div>

                    {/* Right Image */}
                    <div>
                        <img
                            src="/b10.jpg" // Replace with your image path
                            alt="Support"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Section 2: Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Image */}
                    <div>
                        <img
                            src="/b11.jpg" // Replace with your image path
                            alt="Experience"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                            Gain the benefit of years of experience
                        </h3>
                        <hr className="w-16 border-orange-500 mb-4" />
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FaCheckCircle className="text-orange-500 mr-2" />
                                <span>Achieve a better understanding</span>
                            </li>
                            <li className="flex items-center">
                                <FaCheckCircle className="text-orange-500 mr-2" />
                                <span>Grow into an independent Forex trader</span>
                            </li>
                        </ul>
                        <p className="mt-4 text-gray-300">
                            By joining our Forex signal service, you will be able to exactly follow the Forex
                            trades of a highly experienced trader, yet always remain in charge! You will
                            immediately gain the benefit of his years of experience and unrivaled fundamental
                            and technical knowledge. So sign up now and get on the FX fast track.
                        </p>
                    </div>
                </div>
        </div>
    );
};

export default GuideSection;
