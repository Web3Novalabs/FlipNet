import React from "react";
import { Globe, TrendingUp, Shield } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About FlipNet
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              FlipNet is revolutionizing prediction markets by leveraging
              Starknet's powerful Layer 2 scaling solution. Our platform allows
              users to stake tokens on the outcomes of various events, from
              sports and politics to crypto markets and global events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition duration-300 transform hover:scale-105 hover:bg-gray-800/70 border border-gray-700">
              <div className="bg-indigo-600/30 p-3 rounded-lg inline-block mb-4">
                <Globe size={24} className="text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Markets</h3>
              <p className="text-gray-400">
                Access prediction markets for events happening all around the
                world across multiple categories.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition duration-300 transform hover:scale-105 hover:bg-gray-800/70 border border-gray-700">
              <div className="bg-indigo-600/30 p-3 rounded-lg inline-block mb-4">
                <TrendingUp size={24} className="text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Stake & Earn</h3>
              <p className="text-gray-400">
                Stake your tokens on outcomes you believe in and earn rewards
                for correct predictions.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition duration-300 transform hover:scale-105 hover:bg-gray-800/70 border border-gray-700">
              <div className="bg-indigo-600/30 p-3 rounded-lg inline-block mb-4">
                <Shield size={24} className="text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Secure & Transparent
              </h3>
              <p className="text-gray-400">
                All transactions and market resolutions are handled through
                smart contracts, ensuring fairness and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
