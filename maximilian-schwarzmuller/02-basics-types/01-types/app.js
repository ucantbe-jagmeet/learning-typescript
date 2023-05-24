var userInput;
var userName;
// with unknown we have to check the type currently stored in userInput before assigned it to variable once a string
userInput = 5;
userInput = "max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An Error Occured", 500);
