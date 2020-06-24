"use strict";


/**
 * Converts decimal to another base, eg. hex, octal, or binary
 * @function decimalToBase
 * @param {number|string} decimal
 * @param {number|string} radix - default `16`
 * @param {boolean} verbose - default `false`
 * @param {string[]} symbols_list - default `[...'0123456789abcdefghijklmnopqrstuvwxyz']`
 * @returns {string}
 * @throws {SyntaxError|RangeError}
 * @author S0AndS0
 * @license AGPL-3.0
 * @see {link} - https://www.tutorialspoint.com/how-to-convert-decimal-to-hexadecimal
 * @see {link} - https://www.ecma-international.org/ecma-262/6.0/#sec-literals-numeric-literals
 * @example
 * decimalToBase(540, 16);
 * //> "0x21C"
 */
const decimalToBase = (
  decimal: number,
  radix: number = 16,
  verbose: boolean = false,
  symbols_list: string[] = [...'0123456789abcdefghijklmnopqrstuvwxyz']
): string => {
  decimal = Number(decimal);
  radix = Number(radix);
  const max_base: number = symbols_list.length;

  if (isNaN(decimal)) {
    throw new SyntaxError('First argument is Not a Number');
  } else if (isNaN(radix)) {
    throw new SyntaxError('radix is Not a Number');
  } else if (radix > max_base) {
    throw new RangeError(`radix must be less than max base -> ${max_base}`);
  } else if (radix < 2) {
    throw new RangeError(`radix must be greater than 2`);
  }

  let prefix: string = '';
  switch (radix) {
    case 16: // Hexadecimal
      prefix = '0x';
      break;
    case 8:  // Octal
      prefix = '0o';
      break;
    case 2:  // Binary
      prefix = '0b';
      break;
  }

  if (radix >= 10 && decimal < 10) {
    return `${prefix}${symbols_list[decimal]}`;
  }

  let converted: string = '';
  let dividend: number = decimal;
  while (dividend > 0) {
    const remainder: number = dividend % radix;
    const quotient: number = (dividend - remainder) / radix;

    /* istanbul ignore next */
    if (verbose) {
      console.log(`dividend -> ${dividend}`,
                  `remainder -> ${remainder}`,
                  `quotient -> ${quotient}`);
    }

    converted = `${symbols_list[remainder]}${converted}`;
    dividend = quotient;
  }

  return `${prefix}${converted.toUpperCase()}`;
}


/* istanbul ignore next */
if (typeof module !== 'undefined') {
  module.exports = decimalToBase;
}
