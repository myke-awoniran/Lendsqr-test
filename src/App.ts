import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';
import version_1 from './versions/versions';
import { undefinedRoutes, homeHandler } from './helpers/app.helper';
import { errorHandler } from './exceptions/global.errors';

const app = express();

app.use(cors());

//MIDDLEWARE TO PREVENT ATTACK AND HIDE INFORMATION ABOUT THE POWERED ENGINES
app.use(helmet());

//MIDDLEWARE TO PLACE THE BODY OBJECT ON THE REQUEST BODY
app.use(bodyParser.urlencoded({ extended: true }));

// LOGGER MIDDLEWARE
app.use(morgan('combined'));

// HOME ROUTER
app.get('/', homeHandler);

// VERSIONS CONTROLLER, incase the company want to release different versions

app.use(version_1);

// TO CATCH UNHANDLED ROUTES
app.use(undefinedRoutes);

//GENERAL ERROR HANDLER FOR THE APPLICATION
app.use(errorHandler);

export default app;
