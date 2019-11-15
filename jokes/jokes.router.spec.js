const request = require("supertest");
const server = require("../api/server.js");

describe("jokes-router", () => {
  describe("GET /api/jokes", () => {
    it("should respond with 401 without authorization", () => {
      return (
        request(server)
          .get("/api/jokes")
          .then(res => {
            expect(res.status).toBe(401);
          })
      );
    });

    it("should contain JSON", () => {
      return (
        request(server)
          .get("/api/jokes")
          .then(res => {
            expect(res.type).toBe("application/json");
          })
      );
    });
  });
});