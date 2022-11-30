const { getPairs } = require('.');

const sort = (list) => list
  .map(items => items.sort())
  .sort((a, b) => a[1] - b[1]);

describe('getPairs', () => {
  it('test initial case', () => {
    const list = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    const sum = 12;

    const expected = [[12, 0], [5, 7], [16, -4]];
    const received = getPairs(list, sum);

    expect(sort(received)).toEqual(sort(expected));
  });

  it('5 items', () => {
    const list = [1, 11, 6, 12, 0];
    const sum = 12;

    const expected = [[1, 11], [12, 0]];
    const received = getPairs(list, sum);

    expect(sort(received)).toEqual(sort(expected));
  });

  it('Empty', () => {
    const list = [];
    const sum = 12;

    const expected = [];
    const received = getPairs(list, sum);

    expect(sort(received)).toEqual(sort(expected));
  });

  it('3 items', () => {
    const list = [5, 12, 6];
    const sum = 11;

    const expected = [[5, 6]];
    const received = getPairs(list, sum);

    expect(sort(received)).toEqual(sort(expected));
  });
});