# Want to make Nightwatch js work with BrowserStack?

Usually, we use Browserstack for running our scripts in multiple devices and browsers.
Let’s start integrating:
Go to browserstack(it has a free trial)
Get the access codes(user name and access key). Its available here
Create a new file called nightwatch.browserstack.js and add the below content. This information is available in browserstack documentation.

> nightwatch.browserstack.js
```
 nightwatch_config = {
  'src_folders': ['tests'],
  'page_objects_path': ['page-objects'],
    webdriver : {
      "start_process" : false,
      "host" : "hub-cloud.browserstack.com",
      "port" : 80
    },
  
    test_settings: {
      default: {
        desiredCapabilities: {
          'browserstack.user': 'yourusername',
          'browserstack.key': 'youraccesskey',
          'browser': 'chrome',
          'name': 'Bstack-[Nightwatch] Sample Test'
        }
      }
    }
  };
  
  // Code to copy seleniumhost/port into test settings
  for(var i in nightwatch_config.test_settings){
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.webdriver.host;
    config['selenium_port'] = nightwatch_config.webdriver.port;
  }
  
  module.exports = nightwatch_config;
```    
### In package.json add below under script tag:
>**test:browserstack**: `Nightwatch -c   nightwatch.browserstack.conf.js`

> **Run the script using** `npm run test:browserstack`
