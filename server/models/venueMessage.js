import mongoose from 'mongoose';

const venueSchema = mongoose.Schema({
  name: String,
  email: String,
  // location: String,
  // sponsor: String,
  // likeCount: { type: Number, default: 0 },
  // date: { type: Date, default: new Date() },
});

const VenueMessage = mongoose.model('VenueMessage', venueSchema);

export default VenueMessage;
