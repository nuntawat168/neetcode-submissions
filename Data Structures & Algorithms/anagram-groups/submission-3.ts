class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>()
        const alphabetArray = new Array(26).fill(0).map((_, i) => String.fromCharCode(97 + i))
        // let freqAlphabetMap = new Map(alphabetArray.map((alphabet) => [alphabet, 0]))
        // console.log("freqAlphabetMap: ", freqAlphabetMap)
        for(const str of strs) {
            const freqAlphabetMap = new Map(alphabetArray.map((alphabet) => [alphabet, 0]))
            for(const char of str) {
                freqAlphabetMap.set(char, freqAlphabetMap.get(char) + 1)
            }
            const freqAlphabetArray = [...freqAlphabetMap.values()].join()
            // console.log(`freqAlphabetMap of ${str}: `, freqAlphabetMap)
            // console.log(`freqAlphabetArray of ${str}: `, freqAlphabetArray)
            map.set(freqAlphabetArray, map.has(freqAlphabetArray) 
                ? [...map.get(freqAlphabetArray), str] 
                : [str])
        }
        // console.log("map", map)
        return [...map.values()]
    }
}
