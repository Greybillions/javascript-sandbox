const intervalStart = setInterval(
  () => console.log(`will run every 1 seconds`),
  1000
);

setTimeout(() => {
  clearInterval(intervalStart);
  console.log(`interval stopped`);
}, 10000);
