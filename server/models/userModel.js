import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  type: String,
  name: String,
  email: String,
  password: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  audience_size: String,
  description: String,
  instrument_1: String,
  expertise_1: Number,
  instrument_2: String,
  expertise_2: Number,
  genre: String,
  portfolio: String,
  bio: String,

  //likeCount: { type: Number, default: 0 },
  //date: { type: Date, default: new Date() },
});

const Users = mongoose.model('Users', userSchema);

export default Users;
