import "dotenv/config";
import express from "express";
import router from "./routes/indexRoutes";

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get("/", (req, res) => {
  res.send("Selemat Belajar Javascript");
});

// app.get("/:name", (req, res) => {
//   res.send("Selemat Belajar Javascript " + req.params.name);
// });

app.get("/name", (req, res) => {
  res.send("Selemat Belajar Javascript rustam");
});

app.listen(port, () => {
  console.log(`Succes running  on port ${port}`);
});
