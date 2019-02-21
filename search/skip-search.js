function skipSearch(arr, searchValue) {
    if (!(arr instanceof Array)) {
        return;
    }

    if (arr.length === 0) {
        return -1;
    }

    const arrSize = arr.length;
    let skipStep = Math.floor(Math.sqrt(arrSize));

    let stepStart = 0;
    let stepEnd = skipStep;

    while(searchValue > arr[Math.min(stepEnd, arrSize) - 1]) {
        stepStart = stepEnd;
        stepEnd += skipStep;
        if (stepStart > arrSize) {
            return -1;
        }
    }

    for (let i = stepStart; i < stepEnd; i++) {
        if (arr[i] === searchValue) {
            return i;
        }
    }
    return -1;
}

module.exports = skipSearch;