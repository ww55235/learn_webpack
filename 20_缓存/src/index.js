import './index.less';

function add(...args) {
  return args.reduce((prev, data) => prev + data, 0);
}

// eslint-disable-next-line
console.log(add(2, 3, 5));
