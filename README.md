
# Nightwatch-Test-Beginner

## How to automate using Nightwatch.js

> Nightwatch.js is an integrated, easy to use End-to-End testing solution for web applications, written in Node.js. It uses the W3C WebDriver API to drive browsers to perform commands and assertions on DOM elements.


### Implementation for TestCases/APIs in node.js.

-  Download and install [Node.js](https://nodejs.org)
-  For writing code use Sublime, VS Code, WebStorm or Notepad++ (WebStorm is best)

### Usage:
- Clone this repo to your local machine 

### Commands to install the necessary modules:

- Go to the project path
- Run the command to install necessary modules/dependencies to run the project: `npm install`
- Run the command to install dependencies for a particular package like `npm install -g nightwatch`

### Run the Test cases:

#### Run the whole test cases at once

- Run the command `node nightwatch.js`. it will execute all the test cases even in the sub-directories for the given environment server.
- For getting HTML report after completing whole tests, use the following command: `node nightwatch.js --reporter html-reporter.js`

  

#### Run individual test cases**

- Go to the directory path in all the cases you want to execute i.e. `/test`
- Run the command `node nightwatch.js` it will execute all the test cases even in the sub-directories for the given environment server.
- Example command: `node nightwatch.js --test test\testgoogle.js`.


#### Run individual file**

1. Run the command `node nightwatch filePath.js` it will execute all the test cases present in the file.

2. Example command: `node nightwatch test\testgoogle.js`.

> *Nightwatch includes a command-line test runner, which makes it easy to run tests and generate useful output. Please refer to the [Installation](https://nightwatchjs.org/guide/running-tests/) section for details on how to get the runner installed. There are a few different options on how to use the test runner, depending on your installation type.*

> note: User can remove unwanted package from the package.json because we use some additional package for things gets more easier.

#### Parallel Running:
The Test Case can also be run in parallel, as the test files will be triggered at once. Each test file will fill a test worker slot. Individual tests/steps in a test file will not run concurrently.
- Open `nightwatch.json` file and look for below code
````
"test_workers": {
	"enabled": false,
	"workers": "auto"
}
````
- The `workers` option configures how many child processes can run concurrently.
- "auto" - determined by number of CPUs e.g. 4 CPUs means 4 workers
- {number} - specifies an exact number of workers

The more details on parallel run can be found [here](https://nightwatchjs.org/guide/running-tests).

### Configure Headless Mode:
Search for `--headless-none` in `nightwatch.json` and replace it by `headless` like below code:
````
"chromeOptions": {
	"args": [
		"headless" ]
}
````
> *A [headless](https://en.wikipedia.org/wiki/Headless_browser) browser is a web browser without a graphical user interface. _Headless browsers_ provide automated control of a web page in an environment similar to popular web browsers, but are executed via a command-line interface or using network communication.*
