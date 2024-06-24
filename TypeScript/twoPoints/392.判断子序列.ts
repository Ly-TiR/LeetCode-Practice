/**
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 */

function isSubsequence(s: string, t: string): boolean {
  if(!s.length) return true;
  if(!t.length) return false;
  let i = 0,j = 0;
  while(t[i]!==s[0]){
    i++;
    if(i === t.length) return false;
  }
  for (; i < t.length; i++) {
    if(t[i] === s[j]){
      j++;
    }
    if(j === s.length){
      return true;
    }
  }
  return false;
};

const s = "abc", t = "";
console.log(isSubsequence(s, t)); // true