// range(start, end, step)

const range = function (start, end, step) {
  const cnt = arguments.length;

  switch (cnt) {
    case 3:
      if (step === 0) return [start];
      return Array.from(
        { length: (end - start) / step + 1 },
        (_, i) => start + i * step
      );
    case 2:
      if (start < end) {
        step = 1;
        return Array.from(
          { length: end - start + 1 },
          (_, i) => start + i * step
        );
      } else {
        step = -1;
        return Array.from(
          { length: start - end + 1 },
          (_, i) => start + i * step
        );
      }
    case 1:
      if (start === 0) return [0];
      if (start > 0) {
        return Array.from({ length: start }, (_, i) => i + 1);
      } else {
        return Array.from({ length: Math.abs(start) }, (_, i) => start + i);
      }
    default:
      throw new Error('argument Error');
  }
};

console.log(range());
console.log(range(0, 0, 5));
console.log(range(0, 0, 0));
console.log(range(0, -1, -5));
