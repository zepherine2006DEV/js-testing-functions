var assert = {
  equal: function(actual, expected) {
    if (!(actual === expected)) {
      console.log("    Fail!");
    } else {
      console.log("    Pass");
    }
  }
}