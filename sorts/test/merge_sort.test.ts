import { MergeSort } from "../merge_sort";

describe("Merge Sort", () => {
    it("generating array with variable length and comparing with sorted array", () => {
        let arrLenArr = [10, 200, 40000];

        arrLenArr.forEach((arrLen: number) => {

            let inBuiltSortArr = Array<number>(arrLen)
            for (let i = 0; i < arrLen; i++) { inBuiltSortArr[i] = Math.random() * 10000 }
            let mergeSortArray = inBuiltSortArr.slice();

            inBuiltSortArr.sort((a, b) => a - b);
            expect(MergeSort(mergeSortArray)).toStrictEqual(inBuiltSortArr);

        })
    });
});

