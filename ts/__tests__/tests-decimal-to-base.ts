"use strict";


/**
 * Enables static methods to be called from within class methods
 * @see {link} - https://github.com/Microsoft/TypeScript/issues/3841
 */
interface decimalToBase_Test {
  constructor: typeof decimalToBase_Test;
}


/**
 * @author S0AndS0
 * @copyright AGPL-3.0
 * @example <caption>Jest Tests for decimalToBase</caption>
 * // Initialize new class instance and run tests
 * const test_decimalToBase = new decimalToBase_Test();
 * test_decimalToBase.runTests();
 */
class decimalToBase_Test {
  decimalToBase: Function;
  base_configs: Array<{base: number, name: string}>;
  decimal_limits: {min: number, max: number};

  constructor() {
    this.decimalToBase = require('../decimal-to-base.js');
    this.decimal_limits = {min: 1, max: 16};
    this.base_configs = [
      {
        base: 2,
        name: 'Binary'
      },
      {
        base: 3,
        name: 'Trinary'
      },
      {
        base: 4,
        name: 'Quaternary'
      },
      {
        base: 5,
        name: 'Quinary AKA Pental'
      },
      {
        base: 6,
        name: 'Senary AKA Heximal or Seximal'
      },
      {
        base: 7,
        name: 'Septenary'
      },
      {
        base: 8,
        name: 'Octal'
      },
      {
        base: 9,
        name: 'Nonary'
      },
      {
        base: 10,
        name: 'Decimal AKA Denary'
      },
      {
        base: 11,
        name: 'Undecimal'
      },
      {
        base: 12,
        name: 'Duodecimal AKA Dozenal or Uncial'
      },
      {
        base: 13,
        name: 'Tridecimal'
      },
      {
        base: 14,
        name: 'Tetradecimal'
      },
      {
        base: 15,
        name: 'Pentadecimal'
      },
      {
        base: 16,
        name: 'Hexadecimal'
      }
    ];
  }

  /**
   *
   */
  runTests() {
    this.testsErrors();
    this.testsConversion();
  }

  /**
   * Uses `(Number).toString()` to check conversions, note this will only work for radix between `2` though `36`, and default `symbols_list`
   */
  static doubleChecker(decimal: (number | string), radix: (number | string)): string {
    decimal = Number(decimal);
    radix = Number(radix);
    let prefix = '';
    switch (radix) {
      case 2:
        prefix = '0b';
        break;
      case 8:
        prefix = '0o';
        break;
      case 16:
        prefix = '0x';
        break;
    }

    return `${prefix}${(decimal).toString(radix).toUpperCase()}`;
  }

  /**
   * Tests available error states
   */
  testsErrors() {
    test('Is a `SyntaxError` thrown, when `decimal` parameter is not a number?', () => {
      expect(() => {
        this.decimalToBase('spam!', 10);
      }).toThrow(SyntaxError);
    });

    test('Is a `SyntaxError` thrown, when `radix` parameter is not a number?', () => {
      expect(() => {
        this.decimalToBase(42, 'ham');
      }).toThrow(SyntaxError);
    });

    test('Is a `RangeError` thrown, when `symbols_list` is not long enough?', () => {
      expect(() => {
        this.decimalToBase(42, 37);
      }).toThrow(RangeError);
    });

    test('Is a `RangeError` thrown, when `radix` parameter is less than `2`?', () => {
      expect(() => {
        this.decimalToBase(42, 1);
      }).toThrow(RangeError);
    });

  }

  /**
   * Loops through `this.base_configs` and tests decimal integers between `this.decimal_limits['min']` and `this.decimal_limits['max']`
   */
  testsConversion() {
    const min: number = this.decimal_limits['min'];
    const max: number = this.decimal_limits['max'];
    this.base_configs.forEach((config) => {
      const {base} = config;
      const {name} = config;
      for (let decimal = min; decimal <= max; decimal++) {
        const expected_value: string = this.constructor.doubleChecker(decimal, base);
        test(`Base ${base}, does ${decimal} equal "${expected_value}" in ${name}?`, () => {
          expect(this.decimalToBase(decimal, base)).toEqual(expected_value);
        });
      }
    });
  }
}


const test_decimalToBase: decimalToBase_Test = new decimalToBase_Test();
test_decimalToBase.runTests();
