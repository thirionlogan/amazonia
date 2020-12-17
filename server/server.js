const app = require('./app');

const port = process.env.port || 3001;

app.listen(port, () => console.log(`app listening at port ${port}`));
