class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>()
        const alphabetArray = new Array(26).fill(0).map((_, i) => String.fromCharCode(97 + i))
        const freqAlphabetMap = new Map(alphabetArray.map((alphabet) => [alphabet, 0]))
        for(const str of strs) {
            const freqAlphabetMapTemp = new Map(freqAlphabetMap)
            for(const char of str) {
                freqAlphabetMapTemp.set(char, freqAlphabetMapTemp.get(char) + 1)
            }
            const freqAlphabetArray = [...freqAlphabetMapTemp.values()].join()
            map.set(freqAlphabetArray, map.has(freqAlphabetArray) 
                ? [...map.get(freqAlphabetArray), str] 
                : [str])
        }
        return [...map.values()]
    }
}
