import express from 'express';


const HOSTNAME = 'localhost';
const PORT = 8000;


const app = express();

app.use(express.static('./client/'));

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running on ${HOSTNAME}${(PORT === 80) ? '' : `:${PORT}`}...`);
});