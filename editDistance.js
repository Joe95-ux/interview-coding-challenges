// Edit Distance (Levenshtein Distance)

/** Problem:
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
 You have the following operations permitted:

    Insert a character
    Delete a character
    Replace a character

For example:

    Input: word1 = "horse", word2 = "ros"
    Output: 3
    Explanation: horse -> rorse (replace 'h' with 'r') -> rose (remove 'r') -> ros (remove 'e').

Solution: This problem is best solved using Dynamic Programming.
*/

function minDistance(word1, word2) {
  const dp = Array(word1.length + 1).fill().map(() => Array(word2.length + 1).fill(0));

  for (let i = 0; i <= word1.length; i++) {
    for (let j = 0; j <= word2.length; j++) {
      if (i === 0) {
        dp[i][j] = j;  // Insert all characters of word2
      } else if (j === 0) {
        dp[i][j] = i;  // Remove all characters of word1
      } else if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];  // No operation needed if characters match
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],    // Delete from word1
          dp[i][j - 1],    // Insert into word1
          dp[i - 1][j - 1] // Replace in word1
        );
      }
    }
  }

  return dp[word1.length][word2.length];
}

console.log(minDistance("horse", "ros"));  // Output: 3

// Explanation:

//     Dynamic Programming: We create a 2D DP table dp where dp[i][j] represents the minimum number of operations to 
//     convert word1[0...i-1] to word2[0...j-1]. The transitions depend on the three possible operations (insert, delete, replace).
//     Time Complexity: O(m * n), where m and n are the lengths of word1 and word2