process.env.TZ = "Europe/London";

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "<rootDir>**/*.{spec,test}.{js,ts}",
  ],
};
