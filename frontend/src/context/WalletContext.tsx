"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { connect, disconnect } from "get-starknet";
import { AccountInterface, ProviderInterface } from "starknet";

interface WalletContextType {
  account: AccountInterface | null;
  provider: ProviderInterface | null;
  address: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
  error: string | null;
}

const WalletContext = createContext<WalletContextType>({
  account: null,
  provider: null,
  address: null,
  isConnected: false,
  isConnecting: false,
  connectWallet: async () => {},
  disconnectWallet: async () => {},
  error: null,
});

export const useWallet = () => useContext(WalletContext);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [account, setAccount] = useState<AccountInterface | null>(null);
  const [provider, setProvider] = useState<ProviderInterface | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      setIsConnecting(true);
      setError(null);

      const starknet = await connect();

      if (!starknet) {
        throw new Error("No wallet found. Please install a Starknet wallet.");
      }

      await starknet.enable();

      setAccount(starknet.account);
      setProvider(starknet.provider);
      setAddress(starknet.selectedAddress || null);
      setIsConnected(true);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to connect wallet"
      );
      console.error("Wallet connection error:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = async () => {
    try {
      await disconnect();
      setAccount(null);
      setProvider(null);
      setAddress(null);
      setIsConnected(false);
    } catch (error) {
      console.error("Wallet disconnection error:", error);
    }
  };

  useEffect(() => {
    // Check if wallet is already connected
    const checkConnection = async () => {
      try {
        const starknet = await connect();
        if (starknet?.isConnected) {
          setAccount(starknet.account);
          setProvider(starknet.provider);
          setAddress(starknet.selectedAddress || null);
          setIsConnected(true);
        }
      } catch (error) {
        console.error("Error checking wallet connection:", error);
      }
    };

    checkConnection();
  }, []);

  return (
    <WalletContext.Provider
      value={{
        account,
        provider,
        address,
        isConnected,
        isConnecting,
        connectWallet,
        disconnectWallet,
        error,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
