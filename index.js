// core function
const getPairs = (list = [], sum = 0) => {
  const stringList = list.map(item => `${item}`); // o(n)
  const mapped = stringList.map(item => [item, item]); // o(n)
  const map = new Map(mapped)

  const res = stringList.reduce((accum, item) => { // o(n)
    const opt = Number(item) - Number(sum) // = - x;
    const x = `${(opt * -1)}`;

    if (x !== item && map.has(x) && accum[x] !== item) {
      accum[item] = x;
    };

    return accum;
  }, {});

  const result = [];

  for (const property in res) { // o(n)
    result.push([Number(property), Number(res[property])]);
  }

  return result;
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`input:`, input => {
  try {
    const [list, sum] = input.split(' ');

    const newList = list
      .split(',')
      .map(item => Number(item.trim()));

    const newSum = Number(sum);

    // core function
    const res = getPairs(newList, newSum);

    res.forEach(item => {
      console.log(`${item[0]}, ${item[1]}`);
    });
  } catch (error) {
    console.error('Please write correctly the input', error);
  }
  readline.close();
});

module.exports = {
  getPairs
};