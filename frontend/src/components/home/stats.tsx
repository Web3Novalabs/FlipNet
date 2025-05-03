import React from "react";

const Stats = () => {
  return (
    <div>
      {/* Statistics Section */}
      <section className="py-8 md:py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">
                $2.5M+
              </div>
              <div className="text-gray-400">Total Volume</div>
            </div>
            <div className="transform hover:scale-105 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">
                10K+
              </div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="transform hover:scale-105 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">
                250+
              </div>
              <div className="text-gray-400">Active Markets</div>
            </div>
            <div className="transform hover:scale-105 transition duration-300">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">
                99.8%
              </div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
