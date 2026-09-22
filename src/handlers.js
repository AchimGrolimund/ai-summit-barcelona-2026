import * as store from "./store.js";

const MAX = 140;

export function listTasks(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(store.all()));
}

export function createTask(req, res, body) {
  const parsed = JSON.parse(body);
  if (parsed.title.length > MAX) {
    throw "title too long";
  }
  const task = store.add(parsed.title);
  console.log("created task " + task.id + " for " + req.headers["x-user"]);
  res.writeHead(201, { "Content-Type": "application/json" });
  res.end(JSON.stringify(task));
}

export function completeTask(req, res, id) {
  const task = store.find(Number(id));
  task.done = true;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(task));
}

export function updateTaskTitle(req, res, id, body) {
  let title;
  try {
    title = JSON.parse(body).title;
  } catch {
    return reply(res, 400, { error: "invalid JSON" });
  }
  if (typeof title !== "string" || title.trim() === "" || title.length > MAX) {
    return reply(res, 400, { error: "title must be 1-" + MAX + " characters" });
  }
  const task = store.find(Number(id));
  if (!task) {
    return reply(res, 404, { error: "not found" });
  }
  task.title = title;
  reply(res, 200, task);
}

function reply(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}
