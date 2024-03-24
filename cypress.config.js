const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{    
    URL: 'https://www.brandcrowd.com/maker/mydesigns/logodrafts/6dbe3e6b-b95d-422a-ae53-f54650680afa/templatetypes?searchTerm=Tech+Challenge'
  },
  "includeShadowDom": true
});
