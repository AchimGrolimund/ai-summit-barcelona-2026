import { test } from "node:test";
import assert from "node:assert/strict";
import { updateTaskTitle } from "./handlers.js";

function call(id, body) {
  const res = {
    writeHead(status) { this.status = status; },
    end(data) { this.body = JSON.parse(data); },
  };
  updateTaskTitle({ headers: {} }, res, id, body);
  return res;
}

test("updates the title of an existing task", () => {
  const res = call("1", JSON.stringify({ title: "renamed" }));
  assert.equal(res.status, 200);
  assert.equal(res.body.title, "renamed");
});

test("rejects bad input with typed 400 errors", () => {
  assert.equal(call("abc", '{"title":"x"}').body.error.code, "invalid_id");
  assert.equal(call("1", "not json").body.error.code, "invalid_json");
  assert.equal(call("1", '{"title":"  "}').body.error.code, "invalid_title");
  assert.equal(call("1", JSON.stringify({ title: "x".repeat(141) })).body.error.code, "invalid_title");
  assert.equal(call("1", "{}").status, 400);
});

test("returns 404 for an unknown task", () => {
  const res = call("999", '{"title":"x"}');
  assert.equal(res.status, 404);
  assert.equal(res.body.error.code, "not_found");
});
