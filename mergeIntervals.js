// Problem Description: Given an array of intervals 
// where intervals[i] = [starti, endi], merge all overlapping intervals
// and return an array of the non-overlapping intervals that cover all 
// the intervals in the input.

// Example
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Solution

function merge(intervals) {
    if (intervals.length === 0) return [];
  
    // Sort the intervals by their start times
    intervals.sort((a, b) => a[0] - b[0]);
  
    const merged = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
      const lastMerged = merged[merged.length - 1];
      const current = intervals[i];
  
      if (current[0] <= lastMerged[1]) {
        lastMerged[1] = Math.max(lastMerged[1], current[1]);
      } else {
        merged.push(current);
      }
    }
  
    return merged;
  }
  
  // Test case
  console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Output: [[1,6],[8,10],[15,18]]

  
// Explanation


// Sort intervals by the starting time.
// Iterate through the intervals and merge overlapping intervals.
// If intervals overlap, update the end time; otherwise, add the interval to the result list.

// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(n)