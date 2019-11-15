const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");

describe("POST /api/auth/register", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  it("should return 201 when registered", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({
        username: "user1",
        password: "1234"
      });

    expect(res.status).toBe(201);
  });

  it("should return an item of type json when registered", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({
        username: "user1",
        password: "1234"
      });

    expect(res.type).toMatch(/json/i);
  });
});

describe("POST /api/auth/login", () => {
  it("should return 200 when logged in", async () => {
    await request(server)
      .post("/api/auth/register")
      .send({
        username: "user1",
        password: "1234"
      });

    const res = await request(server)
      .post("/api/auth/login")
      .send({
        username: "user1",
        password: "1234"
      });

    expect(res.status).toBe(200);
  });

  it("should return json when logged in", async () => {
    await request(server)
      .post("/api/auth/register")
      .send({
        username: "user1",
        password: "1234"
      });

    const res = await request(server)
      .post("/api/auth/login")
      .send({
        username: "user1",
        password: "1234"
      });

    expect(res.type).toMatch(/json/i);
  });
});