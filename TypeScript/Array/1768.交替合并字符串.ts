/**
 * 给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。

返回 合并后的字符串 。
 */

function mergeAlternately(word1: string, word2: string): string {
  const len = Math.max(word1.length, word2.length)
  let res = ""
  for(let i = 0; i<len; i++) {
      if( i < word1.length) {
          res+=word1[i]
      }
      if( i < word2.length) {
          res+=word2[i]
      }
  }
  return res
};

const word1 = "ab" ,word2 = "pqrs";
console.log(mergeAlternately(word1,word2)); // "apbqrs"