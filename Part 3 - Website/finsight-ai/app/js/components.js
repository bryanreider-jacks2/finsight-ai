export function formatDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  console.log(`${year}/${day}/${month}`);
  return `${year}/${month}/${day}`;
}

export const removeText = element => {
  element.placeholder = '';
};
export const randomNumber = () => {
  const random = Math.random();
  const symbol = random <= 0.5 ? '-' : '+';
  let color;
  if (symbol === '-') {
    color = 'red';
  } else {
    color = 'green';
  }
  const string = `${symbol}${Math.ceil(Math.random() * 10)}%`;
  return [color, string];
};
