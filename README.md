# Writing Tests Without a Standard Testing Library

## Background

One of the challenges set at Makers Academy is to test drive (TDD) a simple javascript app without using an external test framework.

This project has a set of functions which I've created to do this.

## How to Install

* Include assert.js as a script tag.
* Include describe.js as a script tag.
* Include mock.js as a script tag.
* Copy or rename the sample-tests.js to reference your tests.

## How to Use

* Follow the structure in sample-tests.js to reference your tests.
* Go to the index.html page and view the console output.
* To use the mocking functions, first create a double then add methods to it, passing in an annonymous function which becomes the method.

```javascript
var myDouble = mock.makeDouble("My Mock Object");
mock.addMethod(myDouble, "myMethod", function(){return "A Returned String"});
```

## Testing

The individual functions were unit tested in a browser javascript console.

```console
>  assertEqual(2,2);
<= Pass 
```

A sample test suite file (sample-tests.js) is also included in the project, acting like a feature test. This can be run in the console by running the testSuite function within the file.

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
