"use client";

import React from "react";
import { useWallet } from "../../context/WalletContext";
import { WalletConnect } from "../WalletConnect";
import Link from "next/link";

const Cta = () => {
  const { isConnected } = useWallet();

  return (
    <div>
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {isConnected
                  ? "Ready to Make Predictions?"
                  : "Ready to Start Predicting?"}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {isConnected
                  ? "Browse available markets and start making your predictions today."
                  : "Join thousands of users already making predictions and earning rewards on FlipNet."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {!isConnected ? (
                  <WalletConnect />
                ) : (
                  <>
                    <Link
                      href="/markets"
                      className="bg-white text-indigo-900 py-3 px-8 rounded-full font-semibold transition transform hover:scale-105 hover:shadow-lg text-center"
                    >
                      Explore Markets
                    </Link>
                    <Link
                      href="/portfolio"
                      className="bg-transparent border border-white py-3 px-8 rounded-full font-semibold transition hover:bg-white/10 text-center"
                    >
                      View Portfolio
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
