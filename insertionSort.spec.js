
describe('Insertion Sort', function () {
    it('is a function', function () {
        expect(typeof insertionSort).toBe('function');
    })

    it('accepts an array and returns an array', function () {
        expect(insertionSort([])).toEqual([]);
    })

    it('accepts an unsorted array and returns a sorted array', function () {
        let unsortedArr = Array.from({ length: 15 }, function () {
            return Math.round(Math.random() * 10);
        })

        let sortedArr = unsortedArr.slice();
        sortedArr.sort((current, next) => current - next);

        expect(insertionSort(unsortedArr)).toEqual(sortedArr);
    })
})