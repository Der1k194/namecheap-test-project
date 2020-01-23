import { Config } from 'protractor';
import { config as baseConfig} from './conf';

baseConfig.capabilities = undefined;
baseConfig.multiCapabilities = [
  {'browserName': 'chrome'},
  {'browserName': 'firefox'}
];

export let config: Config = baseConfig;
