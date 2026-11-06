class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map()

        for(const num of nums) {
            map.set( num, map.has(num) ? map.get(num) + 1 : 1)
            if(map.get(num) > 1) {
                return true
            }
        }

        return false
    }
}
