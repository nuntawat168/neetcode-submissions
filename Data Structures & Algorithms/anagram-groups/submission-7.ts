class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>()

        for(const str of strs) {
            const freqCharArr = new Array(26).fill(0)
            for(const char of str) {
                freqCharArr[char.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }
            const freqCharString = freqCharArr.join()
            map.set(freqCharString, map.has(freqCharString) 
                ? [...map.get(freqCharString), str]
                : [str])
        }

        return [...map.values()]
    }
}
