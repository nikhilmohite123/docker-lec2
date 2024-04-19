import mongoose, { Schema, model } from 'mongoose';

const mongoUrl: string = process.env.MONGO_URL || "mongodb://mongo:27017";


// Connect to MongoDB
mongoose.connect(mongoUrl)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', mongoUrl));

// Define a User schema
interface IUser {
  name: string;
  age: number;

}

const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true }
 
});

// Create a User model
export const User = model<IUser>('User', UserSchema);