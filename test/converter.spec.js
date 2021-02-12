let { expect } = require("chai");
let converter = require("../src/index");

describe("Convert from Roman to Decimal", function() {
  it("Empty argument", function() {
    expect(() => converter.romanToDecimal()).to.throw(Error, 'Empty argument!');
  });
  it("The argument is an empty string", function() {
    expect(() => converter.romanToDecimal("")).to.throw(Error, 'Empty argument!');
  });
  it("Convert CMXCRX (contains invalid character) to decimal", function() {
    expect(() => converter.romanToDecimal("CMXCRX")).to.throw(Error, 'Invalid roman number!');
  });
  it("Convert -M (negative numbers are not accepted) to decimal", function() {
    expect(() => converter.romanToDecimal("-M")).to.throw(Error, 'Invalid roman number!');
  });
  it("Convert XxIV (combination uppercase and lowercase) to decimal", function() {
    let decimal = converter.romanToDecimal("XxIV");
    expect(decimal).to.equal(24);
  });
  it("Convert IIII (Syntax invalid) to decimal", function() {
    expect(() => converter.romanToDecimal("IIII")).to.throw(Error, 'Invalid roman number!');
  });
  it("Convert CCCC (Syntax invalid) to decimal", function() {
    expect(() => converter.romanToDecimal("XXXX")).to.throw(Error, 'Invalid roman number!');
  });
  it("Convert XXXX (Syntax invalid) to decimal", function() {
    expect(() => converter.romanToDecimal("VVVV")).to.throw(Error, 'Invalid roman number!');
  });
  it("Convert VX (Syntax invalid) to decimal", function() {
    expect(() => converter.romanToDecimal("VX")).to.throw(Error, 'Invalid roman number!');
  });
  it("Convert XLX (Syntax invalid) to decimal", function() {
    expect(() => converter.romanToDecimal("XLX")).to.throw(Error, 'Invalid roman number!');
  });
  it("Convert IIX (Syntax invalid) to decimal", function() {
    expect(() => converter.romanToDecimal("IIX")).to.throw(Error, 'Invalid roman number!');
  });
  it("Convert IVI (Syntax invalid) to decimal", function() {
    expect(() => converter.romanToDecimal("IVI")).to.throw(Error, 'Invalid roman number!');
  });
  it("Convert IXI (Syntax invalid) to decimal", function() {
    expect(() => converter.romanToDecimal("IXI")).to.throw(Error, 'Invalid roman number!');
  });
  it("Convert I to decimal", function() {
    let decimal = converter.romanToDecimal("I");
    expect(decimal).to.equal(1);
  });
  it("Convert II to decimal", function() {
    let decimal = converter.romanToDecimal("II");
    expect(decimal).to.equal(2);
  });
  it("Convert III to decimal", function() {
    let decimal = converter.romanToDecimal("III");
    expect(decimal).to.equal(3);
  });
  it("Convert IV to decimal", function() {
    let decimal = converter.romanToDecimal("IV");
    expect(decimal).to.equal(4);
  });
  it("Convert iii (lowercase) to decimal", function() {
    let decimal = converter.romanToDecimal("iii");
    expect(decimal).to.equal(3);
  });
  it("Convert V to decimal", function() {
    let decimal = converter.romanToDecimal("V");
    expect(decimal).to.equal(5);
  });
  it("Convert VI to decimal", function() {
    let decimal = converter.romanToDecimal("VI");
    expect(decimal).to.equal(6);
  });
  it("Convert VII to decimal", function() {
    let decimal = converter.romanToDecimal("VII");
    expect(decimal).to.equal(7);
  });
  it("Convert VIII to decimal", function() {
    let decimal = converter.romanToDecimal("VIII");
    expect(decimal).to.equal(8);
  });
  it("Convert IX to decimal", function() {
    let decimal = converter.romanToDecimal("IX");
    expect(decimal).to.equal(9);
  });
  it("Convert X to decimal", function() {
    let decimal = converter.romanToDecimal("X");
    expect(decimal).to.equal(10);
  });
  it("Convert XIV to decimal", function() {
    let decimal = converter.romanToDecimal("XIV");
    expect(decimal).to.equal(14);
  });
  it("Convert XIX to decimal", function() {
    let decimal = converter.romanToDecimal("XIX");
    expect(decimal).to.equal(19);
  });
  it("Convert XXIV to decimal", function() {
    let decimal = converter.romanToDecimal("XXIV");
    expect(decimal).to.equal(24);
  });
  it("Convert XXIX to decimal", function() {
    let decimal = converter.romanToDecimal("XXIX");
    expect(decimal).to.equal(29);
  });
  it("Convert XL to decimal", function() {
    let decimal = converter.romanToDecimal("XL");
    expect(decimal).to.equal(40);
  });
  it("Convert XLIV to decimal", function() {
    let decimal = converter.romanToDecimal("XLIV");
    expect(decimal).to.equal(44);
  });
  it("Convert C to decimal", function() {
    let decimal = converter.romanToDecimal("C");
    expect(decimal).to.equal(100);
  });
  it("Convert D to decimal", function() {
    let decimal = converter.romanToDecimal("D");
    expect(decimal).to.equal(500);
  });
  it("Convert M to decimal", function() {
    let decimal = converter.romanToDecimal("M");
    expect(decimal).to.equal(1000);
  });
  it("Convert CCXXXV to decimal", function() {
    let decimal = converter.romanToDecimal("CCXXXV");
    expect(decimal).to.equal(235);
  });
  it("Convert DCCXXXV to decimal", function() {
    let decimal = converter.romanToDecimal("DCCXXXV");
    expect(decimal).to.equal(735);
  });
  it("Convert CCCLVII to decimal", function() {
    let decimal = converter.romanToDecimal("CCCLVII");
    expect(decimal).to.equal(357);
  });
});