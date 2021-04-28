import express from 'express';

const app = express();
const port = process.env.PORT || 3131;


app.get('/', (req, res) => res.send('Server Chat Api'))

app.listen(port, () => console.log(`Server is up on PORT ${port}`))