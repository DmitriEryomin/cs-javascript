const intersection = require('../intersections/intersection');


const arr1 = [1, 2, 3, 5, 9, 18, 36, 99, 105, 369];
const arr2 = [-8, 2, 4, 9, 17, 22, 46, 99];

const intersectionResult = [2, 9, 99];

test('O(m+n) intersection', () => {
    expect(intersection(arr1, arr2)).toEqual(intersectionResult);
});