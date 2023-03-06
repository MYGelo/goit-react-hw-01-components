export function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(15)}`;
  }

export const randomBackgroundColor = {
  backgroundColor: getRandomColor(),
};