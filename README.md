# Writing Tests Without a Standard Testing Library

## Background

One of the challenges set at Makers Academy is to test drive (TDD) a simple javascript app without using a test framework.

This project contains the code I've created to support my testing.

## How to Install

* Include assert.js as a script tag.
* Include describe.js as a script tag.
* Create a separate javascript file to contain the tests.
  * Include this as a script tag.
  * See the sample-tests.js file for an example.

## How to Use

* Run the function which contains all the tests in the console.
  * See the sample-tests.js file for an example.

## Testing

The individual functions can be unit tested in a browser javascript console.

```console
>  assertEqual(2,2);
<= Pass 
```

A sample test suite file (sample-tests.js) is also included in the project, acting as a feature test. This can be run in the console by running the testSuite function within the file.

```javascript
testSuite();
```

## User Stories

As a developer,  
So that I can check the behaviour of my code,  
I want to assert that specific things are true.  

As a developer,  
So that I can create a library of tests,  
I want a way to describe what a test or group of tests is doing.  

As a developer,  
So that I can work efficiently,  
I want a way to run lots of tests.  

## Notes on Approach and Design

I've tried to think outside-in about this problem. For example, I have considered how the suite of tests might be run, before the individual elements.