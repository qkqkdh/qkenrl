import { Schema, model, Document, Model, Query } from "mongoose";
import { UserDocument } from "./User";

interface Review {
	writer: UserDocument["_id"];
	star: number;
	desc: string;
}

interface IPlace { // Interface for Place
	writer: UserDocument["_id"];
	name: string;
	category: string; // to enum ?
	location: string;
	roadLocation: string; //  도로명주소
	geo: {
		type: "Point",
		coordinates: Number[],
	};
	phone: string;
	desc: string;
	timeInfo: String;// any[];
	reviews: Review[];
}

export interface PlaceDocument extends IPlace, Document {}
interface PlaceModel extends Model<PlaceDocument> {}

const placeSchema = new Schema<PlaceDocument, PlaceModel>({
	writer: {
		type: Schema.Types.ObjectId,
		required: false,
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
	roadLocation: {
		type: String,
		required: true,
	},
	geo: {
		type: {
			type: String,
			required: true,
			enum: ["Point"],
		},
		coordinates: {
			type: [Number],
			required: true,
		}
	},
	phone: {
		type: String,
		required: false,
	},
	desc: {
		type: String,
		required: false,
	},
	timeInfo: {
		type: String,
		// type: Schema.Types.Array,
		required: false,
	},
	reviews: {
		type: Schema.Types.Array,
		required: false,
	}
});
placeSchema.index({
	geo: "2dsphere"
});

export default model<PlaceDocument, PlaceModel>("Place", placeSchema);
