function getBotResponse(input) {

  // Simple responses
  if (input == "hello") {
    return "Hey";
  } else if (input == "bye") {
    return "bye";
  } else if (input == "how are you") {
    return "fine";
  } else if (input == "goodbye") {
    return "Talk to you later!";
  } else {
    return "Try asking something else!";
  }
}