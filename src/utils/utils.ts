export const capitalize = (value: string): string => {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

export const getTextColorFromBackground = (color: string): string => {
  let standarizedColor = color;

  // if only first half of color is defined, repeat it
  if(color.length < 5) {
    standarizedColor = color + color.slice(1);
  }

  standarizedColor = standarizedColor.replace('#','0x');

  return Number(standarizedColor) > (0xffffff/2) ? '#000' : '#fff';
}
