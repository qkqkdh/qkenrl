import { Schema, model, Document, Model, Query } from "mongoose";
import { UserDocument } from "./User";

interface IPlace { // Interface for Place
	writer: UserDocument["_id"];
	name: string;
	category: string; // to enum ?
	location: string;
	x: string; // string으로 좌표 나타내기
	y: string;
	phone: string;
	timeInfo: any[];
}

export interface PlaceDocument extends IPlace, Document {}
interface PlaceModel extends Model<PlaceDocument> {}

const placeSchema = new Schema({
	writer: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	x: {
		type: String,
		required: true,
	},
	y: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	timeInfo: {
		type: Schema.Types.Array,
		required: false,
	}
});

export default model<PlaceDocument, PlaceModel>("Place", placeSchema);