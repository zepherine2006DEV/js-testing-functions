var testSuite = function() {
  console.log("SAMPLE TEST SUITE");
  describe("Number", function() {
    it("should be equal when 3 is compared with 3", function() {
      assertEqual(3,3);
    });
  });
}