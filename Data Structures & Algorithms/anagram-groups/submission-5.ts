class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>()
        for(const str of strs) {
            const sortedStr = str.split("").sort().join("")
            // console.log(`str: ${str}, sortedStr: ${sortedStr}`)
            map.set(sortedStr, map.has(sortedStr) ? [...map.get(sortedStr), str] : [str])
        }
        // console.log("Map: ", map)
        return [...map.values()]
    }
}
