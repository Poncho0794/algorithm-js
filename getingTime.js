const { performance } = require('perf_hooks');
const getExtecutionTime = (callback, arguments) => {
  let t1 = performance.now()
  callback(...arguments)
  let t2 = performance.now()
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
}

module.exports = getExtecutionTime
