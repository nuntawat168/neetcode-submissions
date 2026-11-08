class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = "";
        for (const str of strs) {
            result += `${str.length}#${str}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result = [];
        if (!str) return [];
        let i = 0;
        while (i < str.length - 1) {
            let j = i + 1;
            while (str.at(j) !== "#") {
                j += 1;
            }
            const strLen = Number(str.slice(i, j));
            result.push(str.slice(j + 1, j + strLen + 1));
            i = j + strLen + 1;
        }

        return result;
    }
}
