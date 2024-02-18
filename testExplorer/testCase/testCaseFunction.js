const {
  postMethod,
  getMethod,
  putMethod,
  patchMethod,
} = require("../apiServer/apiObjects");

//test suites
describe("Testing API Automation", function () {
  let id;
  //Test case for POST method
  it("POST method using Function", async function () {
    id = await postMethod();
  });
  //Test case for GET method
  it("GET method using Function", async function () {
    await getMethod(id);
  });
  //Test case for PUT method
  it("PUT method using Function", async function () {
    await putMethod(id);
  });
  //Test case for PATCH method
  it("PATCH method using Function", async function () {
    await patchMethod(id);
  });
});
