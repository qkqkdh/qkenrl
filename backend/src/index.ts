/* eslint-disable no-restricted-syntax */
import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from 'passport';
import passportConfig from './utils/passport';
import api from "./api";
import { API_PORT } from "./utils/constants";
import getInfo from './utils/crawling/crawling';

require('dotenv').config();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

class App {
	app: express.Application;

	constructor() {
		this.app = express();
		this.config();
		this.middleware();
		this.route();
		getInfo(); //= > 처음 DB 데이터 불러올 때 사용
	}

	private config() {
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
		// TODO : DB CONFIG
		const connect = mongoose.connect(
			process.env.MONGO_URI as string,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				dbName: "abaotest"
			},
			() => {
				console.log("DB CONNECTED");
			}
		);
		mongoose.connection.on("error", (err) => {
			console.log(err);
		});
	}

	private middleware() {
		const corsOptions = {
			origin: process.env.FRONT_HOST,
			credentials: true
		};

		this.app.use(cors(corsOptions));
		this.app.use(
			"/docs",
			swaggerUi.serve,
			swaggerUi.setup(swaggerDocument)
		);
		this.app.use(passport.initialize());
		passportConfig(passport);
	}

	private route() {
		this.app.use("/", api);
	}
}

const { app } = new App();

app.listen(API_PORT, () => {
	console.log(`LISTEN ON PORT ${API_PORT}`);
});
