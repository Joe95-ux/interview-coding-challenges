/**
 * Regular Expression Matching

    Problem:
    Implement regular expression matching with support for '.' and '*'.

        '.' matches any single character.
        '*' matches zero or more of the preceding element.

    For example:

        Input: s = "aab", p = "c*a*b"
        Output: true
        Explanation: The pattern c* can match zero cs, and a* can match two as, so it 
        becomes "aab" which matches "aab".

    Solution: We can use Dynamic Programming to solve this.
 */

function isMatch(s, p) {
  const dp = Array(s.length + 1)
    .fill()
    .map(() => Array(p.length + 1).fill(false));
  dp[0][0] = true; // Empty pattern matches empty string

  // Initialize dp for patterns like a*, a*b*, etc.
  for (let j = 1; j <= p.length; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === "." || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 2]; // Ignore the '*' and preceding element
        if (p[j - 2] === "." || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j]; // Match multiple characters
        }
      }
    }
  }

  return dp[s.length][p.length];
}

console.log(isMatch("aab", "c*a*b")); // Output: true

/**
 * Explanation
 * Dynamic Programming: We use a 2D DP table where dp[i][j] represents whether the first i characters of s match the first j characters of p. We handle the cases of normal character matching, . wildcard matching, and * wildcard matching.
 * Key Transitions:

    If p[j-1] is . or matches s[i-1], we check the previous match dp[i-1][j-1].
    If p[j-1] is *, we either ignore * and its preceding element, or we match multiple characters.

 * Time Complexity: O(m * n), where m is the length of the string s and n is the length of the pattern p.
 */
