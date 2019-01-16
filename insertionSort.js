function insertionSort(arr = []) {
    let copiedArr = arr.slice();

    for (let i = 0; i < copiedArr.length - 1; i++) {
        let currentIdx = i;
        while (copiedArr[currentIdx + 1] < copiedArr[currentIdx] && currentIdx >= 0) {
            let first = copiedArr[currentIdx];
            let second = copiedArr[currentIdx + 1];
            copiedArr[currentIdx] = second;
            copiedArr[currentIdx + 1] = first;

            --currentIdx;
        }
    }
    return copiedArr;
}