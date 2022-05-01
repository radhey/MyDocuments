const debounce = (fn, delay) => {
  let timer;
  return (...arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...arg), delay;
    });
  };
};

const myFunc = (text) => console.log(text);
const myDebounceFunc = debounce(myFunc, 1000);

for (let i = 0; i < 10; i++) myFunc("Not Debounce"); // called 10times because loop executed 10 times
for (let i = 0; i < 10; i++) myDebounceFunc("Debounced!"); //called 1 time even loop executed 10times
