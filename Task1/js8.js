function validateCredentials(username, password) {
    if (!username || !password) {
        console.log("Validation Error");
    } else if (username === "admin" && password === "admin123") {
        console.log("Hey!"); 
    } else if (username === "admin") {
        console.log("Incorrect Password");
    } else {
        console.log("Incorrect username");
    }
}