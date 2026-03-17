import express from "express";
import cors from "cors";

// Importing the routes
import router from "./back_end_data_services/server_routes/server_routes.js";

const app = express();

app.use(cors());
app.options("*", cors());

app.use(express.json());

app.use("/api/v1/jool", router);
app.use("*", (req, res) => {
  res.status(404).json("error: route does not exist or invalid");
});

export default app;
