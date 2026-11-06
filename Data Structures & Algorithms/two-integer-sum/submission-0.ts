class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map()
        
        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]
            if(map.has(nums[i])) {
                return [map.get(nums[i]), i]
            } else {
                map.set(diff, i)
            }
        }

        return [0, 1]
    }
}
