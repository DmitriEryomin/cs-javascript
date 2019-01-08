function skipIntersection(arr_1, arr_2) {
    if(!Array.isArray(arr_1) || !Array.isArray(arr_2)) {
        return;
    }
    if (arr_1.length === 0 || arr_2.length === 0) {
        return [];
    }

    let ind_1 = 0;
    let ind_2 = 0;
    let step_1 = Math.floor(Math.sqrt(arr_1.length));
    const intersected_arr = [];

    while(ind_1 < arr_1.length && ind_2 < arr_2.length) {
        if (arr_1[ind_1] === arr_2[ind_2]) {
            intersected_arr.push(arr_1[ind_1]);
            ind_1++;
            ind_2++;
        } else if (arr_1[ind_1] < arr_2[ind_2]) {
            if (arr_1[ind_1 + step_1] <= arr_2[ind_2]) {
                while(arr_1[ind_1 + step_1] <= arr_2[ind_2]) {
                    ind_1 += step_1;
                }
                for (let i = ind_1 + 1; i < ind_1 + step_1; i++) {
                    if (arr_1[i] === arr_2[ind_2]) {
                        intersected_arr.push(arr_1[i]);
                        break;
                    }
                }
                ind_1+= step_1;
                ind_2++;
            } else {
                ind_1++;
            }
        } else {
            ind_2++;
        }
    }

    console.log(ops);
    return intersected_arr;
}

module.exports = skipIntersection;