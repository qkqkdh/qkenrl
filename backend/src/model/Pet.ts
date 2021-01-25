import { Schema, model, Document, Model, Query } from 'mongoose';
import { UserDocument } from './User';

// Document Interface Definition
enum Gender { male = 0, female = 1};

interface IPet {
  owner: UserDocument["_id"];
  name: string;
  gender: Gender;
  birth: Date;
}

export interface PetDocument extends IPet, Document {};
interface PetModel extends Model<PetDocument> {};

const petSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, required: true},
  name: { type: String, required: true},
  gender: { type: Number, enum: [0,1], default: 0, required: true},
  birth: { type: Date, default: Date.now, required: true},
});


export default model<PetDocument, PetModel>('Pet', petSchema);
