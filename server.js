// import config from "./config/config.js";
// import dotenv from "dotenv";
// dotenv.config();

// //import "dotenv/config.js";

// import app from "./server/express.js";
// import mongoose from "mongoose";

// mongoose.Promise = global.Promise;
// mongoose
//   .connect(config.mongoUri, {
//     //useNewUrlParser: true,
//     //useCreateIndex: true,
//     //useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   });
// mongoose.connection.on("error", () => {
//   throw new Error(`unable to connect to database: ${config.mongoUri}`);
// });
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to User application." });
// });
// app.listen(config.port, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.info("Server started on port %s.", config.port);
// });
////// //////////// New code ///////////////////////

// import dotenv from "dotenv";
// dotenv.config();
// import config from "./config/config.js";
// import authRoutes from './server/routes/auth.routes.js';
// app.use('/api', authRoutes);

// import express from 'express';
// import mongoose from "mongoose";
// import app from "./server/express.js"; // app must be imported before it's used

// import contactRoutes from './server/routes/contactRoutes.js';
// import projectRoutes from './server/routes/projectRoutes.js';
// import qualificationRoutes from './server/routes/qualificationRoutes.js';
// import userRoutes from './server/routes/userRoutes.js';
// dotenv.config();
// // Middleware and routes
// app.use(express.json());
// app.use('/api/contacts', contactRoutes);
// app.use('/api/projects', projectRoutes);
// app.use('/api/qualifications', qualificationRoutes);
// app.use('/api/users', userRoutes);

// // Connect to MongoDB
// mongoose.connect(config.mongoUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log(" Connected to the database!");
// })
// .catch((err) => {
//   console.error(" MongoDB connection error:", err);
// });

// mongoose.connection.on("error", () => {
//   throw new Error(`unable to connect to database: ${config.mongoUri}`);
// });

// // Basic route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to Suha's Portfolio application." });
// });

// // Start the server
// app.listen(config.port, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.info(" Server started on port %s.", config.port);
// });

// export default app;

///////////////another code ///////////////////////////////
import dotenv from "dotenv";
dotenv.config(); // Load environment variables at the very top

import express from "express";
import mongoose from "mongoose";
import config from "./config/config.js";

import authRoutes from './server/routes/auth.routes.js';
import contactRoutes from './server/routes/contactRoutes.js';
import projectRoutes from './server/routes/projectRoutes.js';
import qualificationRoutes from './server/routes/qualificationRoutes.js';
import userRoutes from './server/routes/userRoutes.js';

const app = express();

// Middleware
app.use(express.json()); // Must be before routes

// Routes
app.use('/api', authRoutes); // login/register routes
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes); // protected with authMiddleware inside projectRoutes
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(" Connected to the MongoDB database!"))
.catch(err => console.error("❌ MongoDB connection error:", err));

mongoose.connection.on("error", () => {
  throw new Error(`Unable to connect to database: ${config.mongoUri}`);
});

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Suha's Portfolio application." });
});

// Start server
app.listen(config.port, (err) => {
  if (err) console.error(err);
  console.info(`🚀 Server started on port ${config.port}`);
});

export default app;
