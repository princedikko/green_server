import express from "express";
import cors from "cors";

// Importing the routes
import jool_routes from "./back_end_data_services/server_routes/server_routes.js";

const app = express();

// CORS configuration
app.use(
  cors({
    origin: [
      "https://universeinventory.com",
      // "http://localhost:3000",
    ], // allow frontend domains
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://jool365.com");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.sendStatus(200);
});

app.use(express.json());

app.use("/api/v1/jool", jool_routes);
app.use("*", (req, res) => {
  res.status(404).json("error: route does not exist or invalid");
});

export default app;
