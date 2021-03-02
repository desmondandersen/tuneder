import mongoose from 'mongoose';

const musicianSchema = mongoose.Schema({
  name: String,
  // instrument: String,
  // genre: String,
  email: String,
  // location: String,
  // sponsor: String,
  // likeCount: { type: Number, default: 0 },
  // date: { type: Date, default: new Date() },
});

const Musicians = mongoose.model('Musicians', musicianSchema);

export default Musicians;