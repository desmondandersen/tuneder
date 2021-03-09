import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/users';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(cors());

// Specify routes
app.use('/api/users', userRoutes);

// Connect to mongoDB cluster
const CONNECTION_URL =
  'mongodb+srv://dbAdmin:eggert97@cluster0.nayet.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
