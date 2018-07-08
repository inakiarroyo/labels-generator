/**
 * Capitalizes an string passed as parameter
 * @param value
 * @returns capitalized string
 */
export const capitalize = (value: string): string => {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};

/**
 * Gets a redeable color text depending of the background color.
 * @param color - hexadecimal color
 * @return hexadecimal redeable color text.
 */
export const getTextColorFromBackground = (color: string): string => {
  let standarizedColor = color;

  // if only first half of color is defined, repeat it
  if (color.length < 5) {
    standarizedColor = color + color.slice(1);
  }

  standarizedColor = standarizedColor.replace('#', '0x');

  return Number(standarizedColor) > 0xffffff / 2 ? '#000' : '#fff';
};

/**
 * Converts an array of objects into an object.
 * @param list
 * @param keyField
 * @returns object
 */
export const arrayToObject = (list: {[key: string]: any}[], keyField: string) => {
  return Object.assign({}, ...list.map((item) => ({ [item[keyField]]: item })));
};
