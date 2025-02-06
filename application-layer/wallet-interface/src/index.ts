import express from 'express';
import { WalletService } from './services/wallet';
import { AuthService } from './services/auth';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const walletService = new WalletService();
const authService = new AuthService();

app.use(express.json());

app.post('/wallet/create', async (req, res) => {
    try {
        const wallet = await walletService.createWallet();
        res.json(wallet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/wallet/connect', authService.authenticate, async (req, res) => {
    try {
        const { address } = req.body;
        const connection = await walletService.connectWallet(address);
        res.json(connection);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});