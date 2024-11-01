const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createESbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.{cy.js,feature}",
    supportFile: "cypress/support/index.{js,jsx,ts,tsx}",

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      const bundler = createBundler({
        plugins: [createESbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);

      return config;
    },
  },
});
