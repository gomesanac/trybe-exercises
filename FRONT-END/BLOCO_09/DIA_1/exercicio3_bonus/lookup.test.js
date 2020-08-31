const lookup = require('./lookup');

describe("lookup()", () => {
  it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
    const actual = lookup("norvig", "likes");
    const expected = ["AI", "Search", "NASA", "Mars"];

    expect(actual).toEqual(expected);
  });
  it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
    const actual = lookup("knuth", "lastName");
    const expected = "Knuth";

    expect(actual).toEqual(expected);
  });
  it("with unknown user should throw an error with the correct message", () => {
    expect(() => {
      lookup("nobody", "likes");
    }).toThrow(/Could not find user/);
  });
  it("with unknown property should throw an error the correct message", () => {
    expect(() => {
      lookup("mfowler", "noprop");
    }).toThrow(/Could not find property/);
  });
});
