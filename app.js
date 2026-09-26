console.log("Application started");

if (!process.env.APP_NAME) {
    throw new Error("APP_NAME environment variable is missing");
}

console.log("Application Name:", process.env.APP_NAME);
console.log("Application completed successfully");