const expect = require ("chai").expect;
const kphToMps = require  ("./function");

describe("kphToMps", () => {
    it("should return metres per second", () => {
        expect(kphToMps(1)).to.equal(0.2777777777777778);
    })
})