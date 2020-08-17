beforeEach(() => console.log("1 - beforeEach"));
afterEach(() => console.log("1 - afterEach"));

test("", () => console.log("1 - test"));

describe("Scoped / Nested block", () => {
  beforeEach(() => console.log("2 - beforeEach"));
  afterEach(() => console.log("2 - afterEach"));

  test("", () => console.log("2 - test"));
});

/*
1 - beforeEach
1 - test
1 - afterEach
1 - beforeEach
2 - beforeEach
2 - test
2 - afterEach
1 - afterEach
*/