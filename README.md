## Alexander Pihl - 4. semester - Fullstack JavaScript
___
### Group:
- [Jean-Poul Leth-Møller](https://github.com/Jean-Poul)
- [Mick Larsen](https://github.com/MivleDK/)
- [Morten Rasmussen](https://github.com/Amazingh0rse)
- [Per Kringelbach](https://github.com/cph-pk)
___
# Period-1 Vanilla JavaScript, Es-next, Node.js, Babel + Webpack and TypeScript-1

## Explain and Reflect
___
### Explain the differences between Java and JavaScript + node. Topics you could include:

  - Java is a compiled language and JavaScript a scripted language.

  - Java is an object oriented programming language and JavaScript is an object based scripting language.

  - Java supports multithreading and JavaScript dont.

  - Java has a thread based approach to concurrenc where Javascript has event based approach to concurrency.

  - Java is a strongly typed language, which means that the user has to decide the data type of the variable before declaring and using it.
    Example an "int a" variable can only store the value of a type integer.

    JavaScript is a loosely typed language, which means that the user does not have to worry about the data-type of the variable before and after the declaration.
    Example a "var a" variable can store the value of any data-type.

  - **Blocking vs. non-blocking:**
    - Blocking refers to operations that block further execution until that operation finishes while non-blocking refers to code that doesn’t block execution. Java is a blocking type language where JavaScript is not.

- **Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.**
  - node.js is an open source server enviroment, runs on various platforms, uses JavaScript on the server and is a asynchronous programming language.
  - npm is an online repository for the publishing of open-source Node.js projects and a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.

- **Explain about the Event Loop in JavaScript, including terms like; blocking, non-blocking, event loop, callback queue and "other" API's. Make sure to include why this is relevant for us as developers.**
  - **The event loop** continuously checks the call stack to see if there's any function that needs to run. While doing so, it adds any function call it finds to the call stack and executes each one in order.
  - **Heap** - Objects are allocated in a heap which is just a name to denote a large mostly unstructured region of memory
  - **Stack** - This represents the single thread provided for JavaScript code execution. Function calls form a stack of frames (more on this below)
  - Any JavaScript code that takes too long to return back control to the event loop will block the execution of any JavaScript code in the page, even block the UI thread, and the user cannot click around, scroll the page, and so on.
  Almost all the I/O primitives in JavaScript are non-blocking. Network requests, Node.js filesystem operations, and so on. Being blocking is the exception, and this is why JavaScript is based so much on callbacks, and more recently on promises and async/await.
  - Browser or Web APIs are built into your web browser, and are able to expose data from the browser and surrounding computer environment and do useful complex things with it. They are not part of the JavaScript language itself, rather they are built on top of the core JavaScript language, providing you with extra superpowers to use in your JavaScript code.


- **What does it mean if a method in nodes API's ends with xxxxxxSync?**
  - asd

- **Explain the terms JavaScript Engine (name at least one) and JavaScript Runtime Environment (name at least two)**
  - A javascript engine executes JavaScript (JS) code. 

    JavaScript engines are typically developed by web browser vendors, and every major browser has one. In a browser, the JavaScript engine runs in concert with the rendering engine via the Document Object Model.

    In order to start coding in JavaScript, you don’t have to install any additional software. Each modern web browser comes with a JavaScript engine. You can simply run scripts you write inside your favorite browser.

    The use of JavaScript engines is not limited to browsers. For example, the V8 engine is a core component of the Node.js and Deno runtime systems. 



  **What are the most important JavaScript engines?**

    - **Chrome V8** – As you probably guessed the engine shipped in Google Chrome. It’s an open source project written in C++. V8 is also used in Opera, NodeJS, and Couchbase.

    - **SpiderMonkey** – The open source engine implemented in C++. It’s maintained by Mozilla Foundation. You can find it in Firefox.
  
    - **Nitro** – The engine developed by Apple. It’s used in Safari.
  
    - **Chakra** – Developed by Microsoft as the JavaScript engine for Edge browser.
  
  **JavaScript Runtime Environment**
In the web development, you don’t usually use the engine directly. The JavaScript engine works inside an environment, which provides additional features to your scripts that you can use at runtime.

  These can be utility libraries or APIs which allow communicating with the world surrounding the engine. An example here might be access to information about the web browser in which your script is executed. Or a notification about a mouse click.
<br /><br />


- **Explain (some) of the purposes with the tools Babel and WebPack and how they differ from each other. Use examples from the exercises.**
  - Babel:
    - JavaScript compiler that converts ECMAScript 2015+ nto a backwards compatible version of JavaScript in current and older browsers or environments.
    - It does the following:
      - Transform syntax
      - Polyfill features that are missing in your target environment (through @babel/polyfill)
      - Source code transformations (codemods)
  - Webpack:
    - is a module bundler that bundles your code into 1 or 2 files that you define. It also compiles TypeScript to JavaScript. You need a webpack config file to handle your configurations. 

___
## Explain using sufficient code examples the following features in JavaScript (and node):

- **Variable/function-Hoisting** ([Example in code](https://github.com/AlexanderPihl/4sem-fullstack-flow1/blob/main/Week1-04-02-2021/exercises/hoisting.js))
  - Hoisting (lifting up) means to lift a variable or a reference point to the top of the function scope.
  If there is no function it will be lifted to the top of the global scope.
  If you don't want to lift a variable make use of let of const, since it will stay in the blockscope (just like we know from java).
  A function will always be lifted to the top of the scope but if you have declared the function with a variable(reference point),
  the reference point will be lifted but not the function itself.
  The design rule for clean code when using var (before ES6) is to declare the variables at the top of the scope and the
  definitions(defined) at the bottom of the scope. Then there will be no confusion about when you can call a variable.

- **this in JavaScript and how it differs from what we know from Java/.net.** ([Exampel in code](https://github.com/AlexanderPihl/4sem-fullstack-flow1/blob/main/Week1-04-02-2021/exercises/this.js))
  - 'this' references the object that is executing the current function
  When using the 'this' keyword in java it will always refer to the class/object/scope you are within. 
  When using 'this' in javascript this can start to become confusing. When you are within an object and use 'this',
  this will refer to the object just as in java. A function in an object is a method and when using 'this' in the method,
  'this' will refer to the object itself - again just like in java. Now if you have a function(or callback) within the method
  'this' will start to refer to the window scope (global in node). To get around this you can use an arrow function or make use
  of the bind() method. 

- **Function Closures and the JavaScript Module Pattern** ([Example in code](https://github.com/AlexanderPihl/4sem-fullstack-flow1/blob/main/Week1-04-02-2021/exercises/closures.js))
  - Closure is a special kind of object which stores variables who has been terminated, so function further in the scope (childs) can make 
  use of the variables. The closure combines two things - a function and the environment in which
  the function was created. The environment consists of any local variables that
  were in-scope at the time that the closure was created.
  Functions in JavaScript form closures.

- **User-defined Callback Functions (writing functions that take a callback)**
  - asd

- **Explain the methods map, filter and reduce**
  - Map ([Example in code](https://github.com/AlexanderPihl/4sem-fullstack-flow1/blob/main/Week1-04-02-2021/exercises/2.js))
    - The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. Generally map() method is used to iterate over an array and calling function on every element of array.
  - Filter
    - asd
  - Reduce
    - asd

- **Provide examples of user-defined reusable modules implemented in Node.js (learnynode - 6)**
  - [make-it-modular.js](https://github.com/AlexanderPihl/4sem-fullstack-flow1/blob/main/Week1-04-02-2021/make-it-modular.js)
  - [mymodule.js](https://github.com/AlexanderPihl/4sem-fullstack-flow1/blob/main/Week1-04-02-2021/mymodule.js)

- **Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, destructuring objects and arrays,   maps/sets etc.**
  - asd

- **Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.**
  - asd

- **Explain and demonstrate, how to implement event-based code, how to emit events and how to listen for such events**
  - asd

___
## ES6,7,8,ES-next and TypeScript:

- **Provide examples with es-next, running in a browser, using Babel and Webpack**
  - asd

- **Explain the two strategies for improving JavaScript: Babel and ES6 + ES-Next, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers**
  - asd

- **Provide examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics**
  - asd

- **Explain how we can get typescript code completion for external imports.**
  - asd

- **Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)**
  - asd

___
## Callbacks, Promises and async/await:

Explain about (ES-6) promises in JavaScript including, the problems they solve, a quick explanation of the Promise API and:

- **Example(s) that demonstrate how to implement our own promise-solutions.**
  - Making of [myPromise.js](https://github.com/AlexanderPihl/4sem-fullstack-flow1/blob/main/Week3-18-02-2021/BeforeClass/promise-async-await-lecture/myPromise.js) used in [async1.js](https://github.com/AlexanderPihl/4sem-fullstack-flow1/blob/main/Week3-18-02-2021/BeforeClass/promise-async-await-lecture/async1.js)

- **Example(s) that demonstrate error handling with promises**
  - asd
  
- **Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel**
  - asd

**Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.**
  - asd

### Provide examples to demonstrate

- **Why this often is the preferred way of handling promise**
  - asd
  
-  **Error handling with async/await**
  - asd
  
- **Serial or parallel execution with async/await.**
  - asd
