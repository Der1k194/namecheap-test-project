import { Config, browser } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';

export let config: Config = {
  allScriptsTimeout: 110000,
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 150000,
    print: function() {}
  },
  maxSessions: 1,
  noGlobals: true,

  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    browser.driver.manage().window().setSize(1200, 900);
  },
  params: {
      baseUrl: 'https://www.sbzend.ssls.com/'
  },
  specs: [ 'specs/**/*spec.js' ],

  seleniumAddress: 'http://localhost:4444/wd/hub'
};
