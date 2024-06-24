/**
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

  字母异位词字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 */

/**
 *
 *思路：
 * 1. 创建一个哈希表hashMap 
 * 2. for of循环遍历字符串数组，先将每个字符串sort一下
 * 3. 然后将排序后的字符串用""连接作为key，字符串数组作为value存入hashMap
 * 4.对strs中每个字符串str,判断在hashMap中是否已有相同key的value
 * 5.如果有，则将str push进对应key的value数组中，如果没有，则创建新的value数组并将str加入其中
 */

 var groupAnagrams = function (strs) {
  let hashMap = new Map()
  for (let str of strs) {
      let arr = Array.from(str).sort();
      if (!hashMap.get(arr.join(''))) {
          hashMap.set(arr.join(''), [str])
      } else {
          hashMap.get(arr.join('')).push(str)
      }
  }
  return Array.from(hashMap.values())
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));