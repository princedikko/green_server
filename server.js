import express from "express";
import cors from "cors";

// Importing the routes
import institution_routes from "./back_end_data_services/server_routes/server_routes.js";

const app = express();

// CORS options

app.use(cors());
app.use(express.json());

app.use("/api/v1/green", institution_routes);
app.use("*", (req, res) => {
  res.status(404).json("error: route does not exist or invalid");
});

export default app;
