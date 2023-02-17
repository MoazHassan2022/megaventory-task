const app = require("./app");

// START SERVER
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});

// Subscribe to unhandled rejection of any promise
process.on("unhandledRejection", (err) => {
  console.log(`${err.name}. ${err.message}`);
  server.close(() => process.exit(1));
});

process.on("uncaughtException", (err) => {
  console.log(`${err.name}. ${err.message}`);
  server.close(() => process.exit(1));
});

process.on("SIGTERM", () => {
  console.log("SIGTERM RECEIVED, Shutting down...");
  server.close(() => console.log("Process terminated!"));
});
