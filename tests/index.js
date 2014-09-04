var compare   = require("./util/compare");
var basePath  = __dirname;

describe("span", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/span/span.scss",
        "functions/span/span.styl"
      ]
    });
  });
});

describe("column", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/column/column.scss",
        "functions/column/column.styl"
      ]
    });
  });
});

describe("shift", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/shift/shift.scss",
        "functions/shift/shift.styl"
      ]
    });
  });
});

describe("unshift", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/unshift/unshift.scss",
        "functions/unshift/unshift.styl"
      ]
    });
  });
});

describe("edit", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/edit/edit.scss",
        "functions/edit/edit.styl"
      ]
    });
  });
});

describe("center", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/center/center.scss",
        "functions/center/center.styl"
      ]
    });
  });
});

describe("uncenter", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/uncenter/uncenter.scss",
        "functions/uncenter/uncenter.styl"
      ]
    });
  });
});

describe("stack", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/stack/stack.scss",
        "functions/stack/stack.styl"
      ]
    });
  });
});

describe("unstack", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/unstack/unstack.scss",
        "functions/unstack/unstack.styl"
      ]
    });
  });
});
