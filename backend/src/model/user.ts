import { Schema, model, Document, Model, Query } from 'mongoose';

interface IUser {
  username: string;
  password: string;
  email: string;
  status: string; // To authentication status (default: "pending")

}

export interface UserDocument extends IUser, Document {};
interface UserModel extends Model<UserDocument> {};

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  }
});

// CUSTOM METHODs
userSchema.methods.test = () => {};
userSchema.statics.findWithsth = () => {};

// MODEL : Responsible for CRUD
// MODEL로 생성한 객체는 Document 
export default model<UserDocument, UserModel>('User', userSchema);