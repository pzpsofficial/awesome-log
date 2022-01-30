# **awesome-log.js**

## **Your js console.log with superpowers!**

This package will make you fall in love with your console!
In case you already haven't... It was designed for fun, with some learning purpouses in the mind. But, it also provides some functionality, for example you can inspect `FormData` without using loop - this package does it for you!

---

## **How to use it?**

As this package is really simple here is quick referrence how to use it in your project:

---

-   Installation
    ```BASH
    npm install awesome-log
    ```
-   Usage

    -   First you need to import package to your project:
        ```TS
        import {BaseLogger} from 'bk-awesome-log'
        ```
    -   Then you have to init logger object. If you are using TS, you will get type suggestions as this project was written with TS in mind.

        ```TS
        const logger = new BaseLogger({
            name: 'Bartosz',
            organization: 'Owls Department',
            componentName: 'The Menu',
            showGreet: true,
        }, () => {
            // your code...
        })
        ```

    -   Once you have instance of component you can use following methods:
        -   This method log to the console. As a second parameter you can pass optional heading - the default one is `Log`
        ```TS
        logger.log("Hello world!");
        ```
        -   This method allows you to show warning in the console. As a second parameter you can pass optional heading - the default one is `Warning`
        ```TS
        logger.warn("Make sure to turn into production mode!");
        ```
        -   This method allows you to show error in the console. As a second parameter you can pass optional heading - the default one is `Error`
        ```TS
        logger.error("Hey, something went wrong fetching data!");
        ```
    -   Available config options:
        | Option name | Type | Default | Description |
        | ----------- | ---- | ------- | ----------- |
        | `showGreet` | `boolean` | `false` | Flag that indicates whether you want to show greet message on init. |
        | `name` | `string` | `''` | Your name, useful when `showGreet` is set to true |
        | `organization` | `string` | `''` | Your organization name, useful when `showGreet` is set to true |
        | `componentName` | `string` | `''` | Your component name, useful when `showGreet` is set to true |

    -   `onMounted` hook:
        You can pass a second parameter to class constructor, that will be called after config initialization. This is similar to lifecycle hooks that you can see in every modern JS framework.
