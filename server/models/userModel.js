import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  type: String,
  name: String,
  email: String,
  password: String,
  location: String,
  audience_size: String,
  description: String,
  instrument1: String,
  instrument2: String,
  genre: String,

  //likeCount: { type: Number, default: 0 },
  //date: { type: Date, default: new Date() },
});

const Users = mongoose.model('Users', userSchema);

export default Users;
