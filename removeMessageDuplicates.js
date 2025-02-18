const processMessages = (messages) => {
    const result = [];
    const messageTracker = new Map(); // Map to track messages and their timestamps
  
    messages.forEach(({ content, timestamp }) => {
      if (messageTracker.has(content)) {
        const lastTimestamp = messageTracker.get(content);
        // Check if the message is within 10 seconds
        if (timestamp - lastTimestamp <= 10) {
          return; // Ignore duplicate message
        }
      }
  
      // Process the message
      result.push({ content, timestamp });
      messageTracker.set(content, timestamp); // Update the timestamp in the tracker
    });
  
    return result;
  };
  
  // Example usage
  const messages = [
    { content: "Hello", timestamp: 1 },
    { content: "Hello", timestamp: 5 },
    { content: "Hello", timestamp: 12 },
    { content: "Hi", timestamp: 13 },
  ];
  
  console.log(processMessages(messages));
  // Output: [{ content: "Hello", timestamp: 1 }, { content: "Hello", timestamp: 12 }, { content: "Hi", timestamp: 13 }]
  