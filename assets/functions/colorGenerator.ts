const randomize = (value: number) => Math.round(Math.random() * value);

export const colorGenerator = (type: string) => {
  if (type === 'hex') {
    return `#${randomize(255).toString(16).padStart(2, '0')}${randomize(255)
      .toString(16)
      .padStart(2, '0')}${randomize(255).toString(16).padStart(2, '0')}`;
  }
  if (type === 'rgb') {
    return `rgb(${randomize(255)},${randomize(255)},${randomize(255)})`;
  }
  if (type === 'hsl') {
    const brightness = randomize(100);
    return `hsl(${randomize(360)},${randomize(100)}%,${brightness >= 20 && brightness <= 90 ? brightness : 50}%)`;
  }
  return '#000';
};
