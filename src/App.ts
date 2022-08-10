import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());

//MIDDLEWARE TO PREVENT ATTACK AND HIDE INFORMATION ABOUT THE POWERED ENGINES
app.use(helmet());

//MIDDLEWARE TO PLACE THE BODY OBJECT ON THE REQUEST BODY
app.use(bodyParser.json());

// LOGGER MIDDLEWARE
app.use(morgan('combined'));

// HOME ROUTER

// app.get('/')

// VERSIONS CONTROLLER, incase the company want to release different versions

// app.use(version1)

// TO CATCH UNHANDLED ROUTES
// app.use(undefinedRoutes)

//GENERAL ERROR HANDLER FOR THE APPLICATION
// app.use(errorHandler)
export default app;
