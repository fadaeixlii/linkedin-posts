const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app"); // Your Express app

chai.use(chaiHttp);
const { expect } = chai;

describe("User API Tests", () => {
  it("should fetch all users", (done) => {
    chai
      .request(app)
      .get("/users")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  it("should create a new user", (done) => {
    chai
      .request(app)
      .post("/users")
      .send({ name: "John Doe", email: "john@example.com" })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property("id");
        done();
      });
  });
});
