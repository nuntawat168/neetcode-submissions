class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if(strs.length < 1) return ""

        let encodeStrs = ""
        for(const str of strs) {
            encodeStrs += str + ";:"
        }
        
        return encodeStrs
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(!str) return []
        const result = []

        let subResult = ""
        let prevChar = ""
        for(const char of str) {
            if(char === ":" && prevChar === ";") {
                result.push(subResult.slice(0, subResult.length - 1))
                subResult = ""
            } else {
                subResult += char
            }
            prevChar = char
        }

        return result
    }
}
