// Arrow function
setTimeout(() => {
  console.log(`hey`);
  setTimeout(() => {
    console.log(`my baby`);
    setTimeout(() => {
      console.log(`How u doing today?`);
      setTimeout(() => {
        console.log(`Have you poopoo?`);
        setTimeout(() => {
          console.log(`bye babe`);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
