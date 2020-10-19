
# Nightwatch-Test-Beginner

## How to automate using Nightwatch.js

> Nightwatch.js is an integrated, easy to use End-to-End testing solution for web applications and websites, written in Node.js. It uses the W3C WebDriver API to drive browsers to perform commands and assertions on DOM elements.


1. Implementation for APIs in node.js.

2. Download and install node.js.

3. For writing code use Sublime, VS Code, WebStorm or Notepad++ (WebStorm is best).
> Commands to install the necessary modules:

1. Go to the project path.

2. Run the command to install necessary modules to run the project: npm install.

3. Run the command to install nightwatch globally: npm install nightwatch -g

  

## Run the Test cases:

### Run the whole test cases at once

  

1. Run the command `node nightwatch.js`. it will

execute all the test cases even in the sub-directories for the given

environment server.

2. Getting HTML report after completing whole tests

Use the following command: `node nightwatch.js --reporter html-reporter.js`

  

### Run individual test cases**

1. Go to the directory path in all the cases you want to execute i.e. `/test`

2. Run the command `node nightwatch.js` it will execute all the test cases even in the

sub-directories for the given environment server.

3. Example command: `node nightwatch.js --test test\testgoogle.js`.


### Run individual file**

1. Run the command `node nightwatch filePath.js` it will execute all the test cases present in the file.

2. Example command: `node nightwatch test\testgoogle.js`.


> note: User can remove unwanted package from the package.json because we use some additional package for things gets more easier.
