let userInput: unknown;
let userName: string;

// with unknown we have to check the type currently stored in userInput before assigned it to variable once a string

userInput = 5;
userInput = "max";

if (typeof userInput === "string") {
  userName = userInput;
}
