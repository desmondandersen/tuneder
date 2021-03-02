import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import venueRoutes from './routes/venues';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(cors());

// Specify routes
app.use('/venues', venueRoutes);

// Connect to mongoDB cluster
const CONNECTION_URL =
  'mongodb+srv://dbAdmin:eggert97@cluster0.nayet.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

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
