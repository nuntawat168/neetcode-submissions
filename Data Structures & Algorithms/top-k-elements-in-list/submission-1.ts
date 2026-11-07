class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const result = []
        const map = new Map()
        for(const num of nums) {
            map.set(num, map.has(num) ? map.get(num) + 1 : 1)
        }
        const freqArr = [...map.entries()].sort((a, b) => b[1] - a[1])
        // console.log("freqArr: ", freqArr)
        for(let i = 0; i < k; i++) {
            result.push(freqArr[i][0])
            // console.log("result: ", result)
        }
        return result
    }
}
