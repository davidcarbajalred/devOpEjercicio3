const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

describe("/test endpoint", () => {
  test("should return 200 OK", async () => {
    const response = await request.get("/");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello World");
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

