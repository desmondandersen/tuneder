import mongoose from 'mongoose';

const venueSchema = mongoose.Schema({
  type: String,
  name: String,
  email: String,
  password: String,
  location: String,
  audience_size: String,
  description: String,
  instrument1: String,
  instrument2: String,
  genre: String

  //likeCount: { type: Number, default: 0 },
  //date: { type: Date, default: new Date() },
});

const Venues = mongoose.model('Venues', venueSchema);

export default Venues;