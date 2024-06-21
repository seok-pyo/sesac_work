function once(f) {
  let flag = 0;
  return (a, b) => {
    if (flag === 0) {
      setTimeout(function () {
        flag = 0;
      }, 1000);
      flag = 1;
      return f(a, b);
    } else {
      //flag += 1;
      return;
    }
  };
}

const fn = once((x, y) => `${x}, ${y}`);
// setInterval(() => console.log(fn(1, 2)), 100);
