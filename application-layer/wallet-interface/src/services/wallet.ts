import { ethers } from 'ethers';
import { WalletConnection } from '../types';

export class WalletService {
    private provider: ethers.providers.JsonRpcProvider;

    constructor() {
        this.provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    }

    async createWallet(): Promise<ethers.Wallet> {
        const wallet = ethers.Wallet.createRandom();
        return wallet.connect(this.provider);
    }

    async connectWallet(address: string): Promise<WalletConnection> {
        const balance = await this.provider.getBalance(address);
        return {
            address,
            balance: ethers.utils.formatEther(balance),
            connected: true
        };
    }
}