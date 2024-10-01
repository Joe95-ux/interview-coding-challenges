/** Reverse Words in a String

Problem: Given a string, reverse the order of characters in each word 
while maintaining the word order.

Example:

Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Solution: We can split the string by spaces, reverse each word, 
and then join them back together.

**/

function reverseWords(s) {
  return s
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}

/** Explanation:

    We split the string by spaces to get an array of words.
    Each word is reversed using split, reverse, and join.
    Finally, we join the reversed words back into a string.
    Time complexity: O(n).

**/
