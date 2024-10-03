/** Word Ladder

Problem:
Given two words, beginWord and endWord, and a dictionary wordList, find the length of the shortest 
transformation sequence from beginWord to endWord, such that:

    Only one letter can be changed at a time.
    Each transformed word must exist in the word list.

For example:

    Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
    Output: 5
    Explanation: The shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> "cog".

Solution: We can solve this problem using Breadth-First Search (BFS) since it guarantees the shortest path in 
an unweighted graph-like structure.

**/

function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];

  while (queue.length > 0) {
    let [currentWord, level] = queue.shift();

    if (currentWord === endWord) return level;

    // Try all possible one-letter transformations
    for (let i = 0; i < currentWord.length; i++) {
      for (let char = 97; char <= 122; char++) {
        let nextWord = currentWord.slice(0, i) + String.fromCharCode(char) + currentWord.slice(i + 1);
        if (wordSet.has(nextWord)) {
          queue.push([nextWord, level + 1]);
          wordSet.delete(nextWord); // Mark word as visited
        }
      }
    }
  }

  return 0;  // No valid transformation found
}

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));  // Output

/**
 * Explanation:

    BFS: We use BFS to explore all possible transformations level by level. Each transformation is considered a 
    "step" in the sequence.
    WordSet: We use a set to store the dictionary for O(1) lookup times and to ensure words are only visited once.
    Transformations: For each word, we try changing one letter at a time and check if the new word is in the dictionary.
    Time Complexity: O(n * m * 26), where n is the number of words in the word list, m is the length of each word, and 26 
    accounts for the possible alphabet replacements for each letter.
 */