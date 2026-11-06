class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false
        
        const sStringMap = new Map()


        for(const sChar of s) {
            sStringMap.set(sChar, sStringMap.has(sChar) ? sStringMap.get(sChar) + 1 : 1)
            // sStringMap.set(sChar,0)
        }
        for(const tChar of t) {
            if(!sStringMap.has(tChar) || sStringMap.get(tChar) < 1) {
                return false
            } else if (sStringMap.has(tChar)){
                sStringMap.set(tChar, sStringMap.get(tChar) - 1)
            }
            // console.log(sStringMap)
        }
        return true
    }
}
