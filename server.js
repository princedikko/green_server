import express from "express";
import cors from "cors";

// Importing the routes
import jool_routes from "./back_end_data_services/server_routes/server_routes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://jool365.com",
      "https://www.jool265.com",
    ], // allow frontend URLs
    methods: ["GET", "POST", "PUT", "DELETE"], // allow these HTTP methods
    credentials: true, // allow cookies if needed
  }),
);

app.use(express.json());

app.use("/api/v1/jool", jool_routes);
app.use("*", (req, res) => {
  res.status(404).json("error: route does not exist or invalid");
});

export default app;
