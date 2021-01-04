import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import {
  deleteTaskById,
  getTaskById,
  updateTaskById,
  createTask,
} from "./controllers";

const { PORT } = process.env;
var app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var Tasks = [];
app.get("/check/healthz", (req, res) => {
  res.send("pong!");
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const result = getTaskById(id, Tasks);

  if (result.hasOwnProperty("name")) {
    res.status(200).send(`${JSON.stringify(result, undefined, 2)}`);
  } else {
    res.status(400).send(result);
  }
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { complete, name } = req.body;

  const result = updateTaskById(id, Tasks, { complete, name });

  if (Array.isArray(result)) {
    Tasks = result;
    res.status(200).send(`Task with ${id} updated`);
  } else {
    res.status(400).send(result);
  }
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const result = deleteTaskById(id, Tasks);
  if (Array.isArray(result)) {
    Tasks = result;
    res.status(200).send(`Task with ${id} deleted`);
  } else {
    res.status(400).send(result);
  }
});

app.post("/create", (req, res) => {
  const { name } = req.body;
  const result = createTask(name, Tasks);
  if (Array.isArray(result)) {
    Tasks = result;
    const temp = Tasks.filter((task) => task.name == name)[0];
    res.status(201).send("Created" + JSON.stringify(temp, undefined, 2));
  } else {
    res.status(400).send(result);
  }
});

app.get("/", (req, res) => {
  res.status(200).send(Tasks);
});

app.get("/1", (req, res) => {
  res.status(200).send(1);
});

app.get("/2", (req, res) => {
  res.status(200).send(2);
});

app.get("/3", (req, res) => {
  res.status(200).send(3);
});

app.get("/4", (req, res) => {
  res.status(200).send(4);
});

app.get("/5", (req, res) => {
  res.status(200).send(5);
});

app.get("/6", (req, res) => {
  res.status(200).send(6);
});

app.get("/7", (req, res) => {
  res.status(200).send(7);
});

app.get("/8", (req, res) => {
  res.status(200).send(8);
});

app.get("/9", (req, res) => {
  res.status(200).send(9);
});

app.get("/10", (req, res) => {
  res.status(200).send(10);
});

app.get("/11", (req, res) => {
  res.status(200).send(11);
});

app.get("/12", (req, res) => {
  res.status(200).send(12);
});

app.get("/13", (req, res) => {
  res.status(200).send(13);
});

app.get("/14", (req, res) => {
  res.status(200).send(14);
});

app.get("/15", (req, res) => {
  res.status(200).send(15);
});

app.get("/16", (req, res) => {
  res.status(200).send(16);
});

app.get("/17", (req, res) => {
  res.status(200).send(17);
});

app.get("/18", (req, res) => {
  res.status(200).send(18);
});

app.get("/19", (req, res) => {
  res.status(200).send(19);
});

app.get("/20", (req, res) => {
  res.status(200).send(20);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
