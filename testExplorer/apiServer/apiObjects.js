const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai
const baseUrl = require("../globalVariable/baseUrl");

const url = `${baseUrl}`; //define global variable

async function postMethod() {
  const response = await request(url)
    .post("/objects")
    .send({
      name: "Fitriatul Maulidiyah",
      data: {
        job: "Jr Quality Assurance",
        age: "20 years old",
      },
    }); //request body
  //assertation response body after POST
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("Fitriatul Maulidiyah");
  expect(response.body.data.job).to.equal("Jr Quality Assurance");
  expect(response.body.data.age).to.equal("20 years old");

  expect(response.body.createdAt).to.not.be.null;
  //save ID after POST
  const id = response.body.id;
  console.log("ID after POST:", id);
  return id; //return the ID so it can be called in another method
}

async function getMethod(id) {
  const response = await request(url).get(`/objects/${id}`);
  //assertation response body after GET
  expect(response.status).to.equal(200);
  expect(response.body.id).to.equal(id);
  expect(response.body.name).to.equal("Fitriatul Maulidiyah");
  expect(response.body.data.job).to.equal("Jr Quality Assurance");
  expect(response.body.data.age).to.equal("20 years old");

  console.log(response.body);
}

async function putMethod(id) {
  const response = await request(url)
    .put(`/objects/${id}`)
    .send({
      name: "Fitriatul Maulidiyah PUT",
      data: {
        job: "Jr Quality Assurance",
        age: "20 years old",
        city: "Malang",
      },
    }); //request body
  //assertation response body after PUT
  expect(response.status).to.equal(200);
  expect(response.body.data.city).to.equal("Malang");
  expect(response.body.name).to.equal("Fitriatul Maulidiyah PUT");
}

async function patchMethod(id) {
  const response = await request(url)
    .patch(`/objects/${id}`)
    .send({
      data: {
        job: "Sr Quality Assurance",
      },
    }); //request body
  //assertation response body after PATCH
  expect(response.status).to.equal(200);
  expect(response.body.data.job).to.equal("Sr Quality Assurance");
}

module.exports = { postMethod, getMethod, putMethod, patchMethod };
