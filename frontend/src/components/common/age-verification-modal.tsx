"use client";

import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const AgeVerificationModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const hasVerified = localStorage.getItem("ageVerified");
    if (!hasVerified) {
      setIsVisible(true);
    }
  }, []);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }
    localStorage.setItem("ageVerified", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-[#23293b] rounded-xl p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-1">Age Verification</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded mb-4" />
        <p className="text-gray-200 mb-6 text-sm">
          You must be at least 18 years old to play. Please enter your full name
          as it appears on your ID.
        </p>
        <form onSubmit={handleVerify}>
          <label
            className="block text-gray-300 text-sm mb-1"
            htmlFor="fullName"
          >
            Your full name
          </label>
          <input
            id="fullName"
            type="text"
            className="w-full px-4 py-3 rounded-lg bg-[#1a1f2b] text-white border border-gray-700 focus:border-purple-500 focus:outline-none mb-2 placeholder-gray-400"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              setError("");
            }}
            autoComplete="off"
          />
          {error && <div className="text-red-400 text-xs mb-2">{error}</div>}
          <p className="text-xs text-gray-400 mb-4">
            By clicking "Verify Age", you agree to the game's{" "}
            <a
              href="#"
              className="text-purple-400 underline hover:text-indigo-400"
            >
              terms of service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-400 underline hover:text-indigo-400"
            >
              privacy policy
            </a>
            .
          </p>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Verify Age
            <ChevronRight size={20} className="ml-1" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgeVerificationModal;
