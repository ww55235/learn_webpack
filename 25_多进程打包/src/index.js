

const p = new Promise((resolve) => {
  setTimeout(() => {
    // eslint-disable-next-line
    console.log('你好吗?');
    resolve('我很好');
  }, 1000);
});

p.then((res) => {
  // eslint-disable-next-line
  console.log(res);
});
