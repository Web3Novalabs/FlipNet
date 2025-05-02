import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import price_prediction from "@/assets/images/crypto-price-prediction.jpg";

const MarketsPreview = () => {
  return (
    <div>
      {/* Markets Preview Section */}
      <section id="markets" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Popular Markets
            </h2>
            <p className="text-gray-300 text-lg">
              Explore some of our most active prediction markets and start
              placing your stakes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Crypto Price Prediction",
                description: "Will ETH reach $5,000 by end of Q2 2025?",
                category: "Crypto",
                liquidity: "$128,450",
                endTime: "3d 5h",
              },
              {
                title: "Sports Outcome",
                description: "Lakers to win NBA Championship 2025",
                category: "Sports",
                liquidity: "$245,780",
                endTime: "2mo 15d",
              },
              {
                title: "Market Trends",
                description: "S&P 500 to close above 6,000 next month",
                category: "Finance",
                liquidity: "$89,230",
                endTime: "28d 12h",
              },
            ].map((market, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700/50 group"
              >
                <div className="h-36 bg-gradient-to-r from-indigo-800/30 to-purple-800/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Image
                      src={price_prediction}
                      alt={market.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity object-top"
                    />
                    <div className="absolute top-3 left-3 bg-indigo-600/80 text-xs py-1 px-3 rounded-full">
                      {market.category}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                    {market.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{market.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <div>
                      Liquidity:{" "}
                      <span className="text-indigo-400">
                        {market.liquidity}
                      </span>
                    </div>
                    <div>
                      Ends in:{" "}
                      <span className="text-indigo-400">{market.endTime}</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 transition-colors border border-indigo-600/50 text-indigo-400">
                    View Market
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-300 inline-flex items-center transition-colors font-medium"
            >
              View All Markets <ChevronRight size={18} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketsPreview;
