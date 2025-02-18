const rearrangePlayList = (songs) => {
  // step1: count the frequency of each track
  const freqMap = new Map();

  songs.forEach((song) => {
    const key = song.track;
    freqMap.set(key, (freqMap.get(key) || 0) + 1);
  });

  // step 2: Build a max-heap(sorted array for simplicity here)
  let maxHeap = [];
  for (const [key, freq] of freqMap.entries()) {
    maxHeap.push({ key, freq });
  }
  maxHeap.sort((a, b) => b.freq - a.freq); // sort by frequency in descending order

  // Step 3: check if it is possible to rearrange

  const maxFreq = maxHeap[0].freq;
  if (maxFreq > Math.ceil(songs.length / 2)) {
    return []; // not possible to rearrange;
  }

  // step 4: build the rearranged playlist

  const result = [];
  let prev = null;

  while (maxHeap.length > 0) {
    const current = maxHeap.shift(); // Get the most frequent track
    result.push(current.track); // Add it to the result

    // Decrease the frequency and prepare to reinsert it
    current.freq -= 1;

    // Reinsert the previous track if it still has frequency
    if (prev && prev.freq > 0) {
      maxHeap.push(prev);
    }

    // Update previous track
    prev = current;

    // Re-sort the heap to maintain max-heap property
    maxHeap.sort((a, b) => b.freq - a.freq);
  }

  // Step 5: Attach durations back to the tracks in the final playlist
  const output = [];
  const trackDurations = songs.reduce((acc, song) => {
    acc[song.track] = acc[song.track] || [];
    acc[song.track].push(song.duration);
    return acc;
  }, {});

  result.forEach((track) => {
    output.push({ track, duration: trackDurations[track].shift() });
  });

  return output;
};
