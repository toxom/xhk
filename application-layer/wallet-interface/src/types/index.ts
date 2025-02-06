export interface WalletConnection {
    address: string;
    balance: string;
    connected: boolean;
}

export interface User {
    userId: string;
    address: string;
}