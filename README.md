# INVENCOTEST

Simplistic example of a robot walking around a table from entrance up to the exit.

## System Requirements
* NodeJS v6.9.5 LTS
* Tested under Mac OSX 10.12.3

## Installing NodeJS

### Windows and Mac users
* Go to https://nodejs.org/en/download then download and install appropriate version (both in Windows and Mac is a one file installer).

### Linux Users
* Download sources from https://nodejs.org/en/download and run following command to install it:
```sh
$ ./configure && make && make install
```

### Test NodeJS was correctly installed

* Test that NodeJS was correctly installed in your system executing following
  command (it must print v4.2.3):
```sh
$ node -v
```  

## Installing application

* On application root path, run following command to download application dependencies
```sh
$ npm install
```

## Starting application

* On application root path, run following command to execute a file with commands
```sh
$ npm start <FILE_PATH>
```


## Executing application unit tests

* On application root path, run following command to run tests
```sh
$ npm test
```

## Checking application code coverage

* On application root path, run following command to generate code coverage site
```sh
$ npm run coverage
```

## Installing it using npm
* Using a command line, execute following command to install invenco test as an npm global module
```sh
$ npm install -g invencotest
```
Note: Installing an npm module as a global one may require additional permissions.
