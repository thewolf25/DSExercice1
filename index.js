const express = require('express');
const comic_router = require('./routers/comics')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/comics', comic_router);

app.listen(port, () => console.log(`Server on ${port}`));