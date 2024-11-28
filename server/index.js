import { config } from 'dotenv';
import express from 'express';

config();

const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.PORT;


const app = express();

app.use(express.static('./client/'));

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running on ${HOSTNAME}${(PORT === 80) ? '' : `:${PORT}`}...`);
});