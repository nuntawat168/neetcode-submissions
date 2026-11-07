class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        
        const map = new Map()
        const freqArr = new Array(nums.length).fill([])
        for(const num of nums) {
            map.set(num, map.has(num) ? map.get(num) + 1 : 1)
        }
        console.log("map: ", map.entries())
        for(const [key, value] of map.entries()) {
            // console.log("key", key)
            freqArr[value - 1] = [...freqArr[value - 1], key]
        }
        // console.log("freqArr: ", freqArr)
        const ans = []
        for(let i = nums.length - 1; i > -1; i-- ) {
            // console.log("i: ",i)
            // console.log(freqArr[i])
            for(const item of freqArr[i]) {
                ans.push(item)
                
                // console.log(`freqArr[${i}]: ${freqArr[i]} = item: ${item}`)

                if(ans.length > k - 1) return ans
            }
        }
        
        return []
    }
}
