"use client";

import React from "react";
import { useWallet } from "../context/WalletContext";

export const WalletConnect: React.FC = () => {
  const {
    isConnected,
    isConnecting,
    address,
    connectWallet,
    disconnectWallet,
    error,
  } = useWallet();

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

      {!isConnected ? (
        <button
          onClick={connectWallet}
          disabled={isConnecting}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </button>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <div className="text-sm font-medium">
            Connected: {formatAddress(address || "")}
          </div>
          <button
            onClick={disconnectWallet}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};
