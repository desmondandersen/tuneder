import mongoose from 'mongoose';

const venueSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  location: String,
  audience_size: String,
  description: String,
  //likeCount: { type: Number, default: 0 },
  //date: { type: Date, default: new Date() },
});

const Venues = mongoose.model('Venues', venueSchema);

export default Venues;
