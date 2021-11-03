const express = require('express');
const cors = require('cors');

const { port } = require('./config');

const usersRouter = require('./routes/users');
const accountsRouter = require('./routes/accounts');
const billsRouter = require('./routes/bills');


const app = express();

app.use(express.json());
app.use(cors());

app.use('/routes/users', usersRouter);
app.use('/routes/accounts', accountsRouter);
app.use('/routes/bills', billsRouter);


app.get('/', (req, res) => {
  res.send({ msg: 'Server is running' });
});

app.all('*', (req, res) => {
  res.status(404).send({ error: 'Page not found' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
