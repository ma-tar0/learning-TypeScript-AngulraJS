exports.config = {
  seleniumServerJar: 'lib/selenium-server-standalone-2.43.1.jar',
  capabilities: {
    'browserName': 'phantomjs'
  },
  specs: ['e2e/**/*.js'],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
