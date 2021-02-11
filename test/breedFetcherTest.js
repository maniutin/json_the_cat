const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      assert.equal(err, null);
      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it("returns an error for invalid breed", (done) => {
    fetchBreedDescription("Blob", (err, desc) => {
      assert.equal(err, "sorry, no breed found");
      const expectedDesc = "Error fetch details: sorry, no breed found";
      assert.equal(expectedDesc, "Error fetch details: sorry, no breed found");

      done();
    });
  });
});
