function intersection(arr_1, arr_2) {
    if(!Array.isArray(arr_1) || !Array.isArray(arr_2)) {
        return;
    }
    
    if (arr_1.length === 0 || arr_2.length === 0) {
        return [];
    }

    const intersected_arr = [];
    let pivot = 0;
    const sm_array = arr_1.length > arr_2.length ? arr_2 : arr_1;
    const lg_array = arr_1.length > arr_2.length ? arr_1 : arr_2;

    for (let i = intersected_arr.length; i < lg_array.length; i++) {
        for (let j = pivot; j < sm_array.length; j++ ) {
            if (lg_array[i] === sm_array[j]) {
                intersected_arr.push(lg_array[i]);
                pivot = j + 1;
                break;
            }
        }
    }
    return intersected_arr;
}

module.exports = intersection;