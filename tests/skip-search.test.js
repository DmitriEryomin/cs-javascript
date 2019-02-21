const skipSearch = require('../search/skip-search');

const arr = [1, 2, 3, 5, 9, 18, 36, 99, 105, 369];

test('Skip search', () => {
    const searchIndex = 5;
    const searchEl = arr[searchIndex];
    expect(skipSearch(arr, searchEl)).toEqual(searchIndex);
});