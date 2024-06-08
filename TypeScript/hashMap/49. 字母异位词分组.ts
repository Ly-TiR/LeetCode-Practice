/**
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

  字母异位词字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 */

/**
 *
 *思路：
 * 1.
 * 2. 遍历字符数组，将每个字符作为key，将其下标作为value，存入哈希表中
 */
function groupAnagrams(strs: string[]): string[][] {
  let result: string[][] = [];
  if (strs.length === 0) return result;
  let hashMap: Map<string, string[]> = new Map();
  for (let str of strs) {
    let arr: string = Array.from(str).sort().join("");
    if (!hashMap.has(arr)) {
      hashMap.set(arr, [str]);
    } else {
      hashMap.get(arr).push(str);
    }
  }
  result = [...hashMap.values()];
  return result;
}