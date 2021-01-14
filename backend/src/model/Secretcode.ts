import { Schema, model, Document, Model} from 'mongoose';
import { UserDocument } from './User';


interface ISecretCode {
  userid: UserDocument["_id"];
  code: string;
  createdAt: Date;
}

export interface SecretCodeDocument extends ISecretCode, Document {};
interface SecretCodeModel extends Model<SecretCodeDocument> {};

const secretCodeSchema = new Schema({
  userid: { type: Schema.Types.ObjectId, ref: 'User'},
  code: { type: String, required: true},
  createdAt: { type : Date, default: Date.now, required: true},
});


export default model<SecretCodeDocument, SecretCodeModel>('SecretCode', secretCodeSchema);
