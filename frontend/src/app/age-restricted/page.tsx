import React from "react";
import Link from "next/link";

export default function AgeRestricted() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Age Restriction Notice</h1>
        <p className="text-gray-600 mb-6">
          We apologize, but this website is only accessible to users who are 18
          years of age or older. This restriction is in place to comply with
          legal requirements and to ensure the safety of our users.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
