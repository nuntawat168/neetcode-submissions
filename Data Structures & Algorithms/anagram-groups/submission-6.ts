class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>()
        
        for(const str of strs) {
            const sortedStr = str.split("").sort().join("")
            map.set(sortedStr, map.has(sortedStr) ? [...map.get(sortedStr), str] : [str])
        }

        return [...map.values()]
    }
}
