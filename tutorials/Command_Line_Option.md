# Command Line Options
> run: `nightwatch --help`
 
| Name           | Shortname | default           | description                                                                                                                                                                                                                                                           |
| -------------- | --------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --env          | -e        | default           | Which testing environment to use -  defined in nightwatch.json                                                                                                                                                                                                        |
| --config       | -c        | ./nightwatch.json | Path to  configuration file; nightwatch.conf.js or nightwatch. json are read by default if present. Check the  Configuration section.                                                                                                                                 |
| --test         | -t        |                   | Runs only the specified test suite/ module. By default the runner will attempt to run all  tests in the src_folders settings folder(s) and their  subfolders.                                                                                                         |
| --testcase     |           |                   | Used only together with --test.  Runs the specified testcase from the current suite/ module.                                                                                                                                                                          |
| --group        | -g        |                   | Runs only the specified group or  several (comma separated) of tests (subfolder). Tests  are grouped by being placed in the same subfolder.                                                                                                                           |
| --skipgroup    | -s        |                   | Skip one or several (comma  separated) group of tests.                                                                                                                                                                                                                |
| --filter       | -f        |                   | Specify a filter (glob expression)  as the file name format to use when loading the test  files.                                                                                                                                                                      |
| --tag          | -a        |                   | Filter test modules by tags. Only  tests that have the specified tags will be loaded.                                                                                                                                                                                 |
| --skiptags     |           |                   | Skips tests that have the  specified tag or tags (comma separated).                                                                                                                                                                                                   |
| --retries      |           |                   | Retries failed or errored  testcases up to the specified number of times.  Retrying a testcase will also retry the beforeEach and  afterEach hooks, if any.                                                                                                           |
| --suiteRetries |           |                   | Retries failed or errored  testsuites (test modules) up to the specified number  of times. Retrying a testsuite will also retry the  before and after hooks (in addition to the global  beforeEach and afterEach respectively), if any are  defined on the testsuite. |
| --timeout      |           |                   | Set the global timeout for  assertion retries before an assertion fails. The  various timeout values are defined in the **Globals**  section.                                                                                                   
| --output	|-o|	tests_output|	The location where the JUnit XML reports will be saved.
| --headless|		||	Launch the browser (Chrome or Firefox) in headless mode.
| --verbose	|		||Shows extended selenium command logging during the session
| --help	|-h|	|	Shows this help.
| --version	|-v|	|	Shows the version number
| --reporter     | -r        | junit             | Name of a predefined reporter  (e.g. junit) or path to a custom reporter file to use.                                                   The custom reporter interface looks like:
 ```module.exports = {
 write(results, options, done) {
   done();
 }
 };
 ```
 |