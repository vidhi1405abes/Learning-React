# Learning react

# Parcel

    -Dev build
    -Local Server
    -HMR
    -File watching algo
    -Caching
    -Image optimization
    -File compression
    -Bundling
    -Consistent Hashing
    -Code splitting
    -Differential bundling

# React-01

    # React Basics – Important Concepts

This README contains important React and frontend concepts explained in simple language with examples.

---

## Table of Contents

1. [What is Emmet?](#1-what-is-emmet)
2. [Library vs Framework](#2-library-vs-framework)
3. [What is a CDN?](#3-what-is-a-cdn)
4. [Why is React called React?](#4-why-is-react-called-react)
5. [What is crossorigin in the script tag?](#5-what-is-crossorigin-in-the-script-tag)
6. [React vs ReactDOM](#6-react-vs-reactdom)
7. [react.development.js vs react.production.js](#7-reactdevelopmentjs-vs-reactproductionjs)
8. [Quick Revision](#8-quick-revision)

---

# 1. What is Emmet?

**Emmet** is a toolkit built into code editors like VS Code that helps us write HTML and CSS faster using short abbreviations.

### Example

Instead of writing:

```html
<div class="container">
  <h1>Hello</h1>
  <p>Welcome</p>
</div>
```

We can write:

```text
div.container>h1{Hello}+p{Welcome}
```

Then press `Tab`, and Emmet expands it into the complete HTML.

### Common Emmet Abbreviations

| Emmet        | Output                              |
| ------------ | ----------------------------------- |
| `!`          | HTML5 boilerplate                   |
| `div`        | `<div></div>`                       |
| `p`          | `<p></p>`                           |
| `.container` | `<div class="container"></div>`     |
| `#header`    | `<div id="header"></div>`           |
| `ul>li*3`    | `<ul>` containing 3 `<li>` elements |
| `h1{Hello}`  | `<h1>Hello</h1>`                    |

### In short

> **Emmet saves time by allowing developers to generate repetitive HTML/CSS code using short abbreviations.**

---

# 2. Library vs Framework

The easiest way to remember the difference:

> **Library → You call it when you need it.**  
> **Framework → It calls your code when it needs it.**

## Library

A **library** is a collection of ready-made functionality that we can use in our application whenever we need it.

### Example: React

React mainly helps us build the **UI** of our application.

```jsx
function App() {
  return <h1>Hello World</h1>;
}
```

React does not force us to use a particular solution for everything else.

We can choose different tools for different requirements:

```text
React          → UI
React Router   → Routing
Axios          → API calls
Redux          → State management
Node/Express   → Backend
MongoDB        → Database
```

So, **we control the application and choose the tools we need.**

---

## Framework

A **framework** provides a larger structure for building an application.

For example, Angular provides built-in solutions for:

```text
Angular
 ├── Components
 ├── Routing
 ├── Forms
 ├── HTTP requests
 ├── Dependency Injection
 └── Project structure
```

The framework provides more rules and structure for how the application should be built.

---

## React vs Angular

| React                          | Angular                                         |
| ------------------------------ | ----------------------------------------------- |
| Library                        | Framework                                       |
| Mainly focuses on UI           | Provides a complete application structure       |
| More flexible                  | More opinionated                                |
| Additional tools can be chosen | Many tools are built in                         |
| Developer has more control     | Framework controls more of the application flow |

---

## Why is React called a Library?

React is mainly focused on the **UI layer**.

It does not force developers to use a specific solution for:

- Routing
- State management
- API calls
- Form handling
- Backend

Developers can choose the tools they want.

Therefore, React is generally referred to as a **library rather than a complete framework**.

### Interview Answer

> A library provides specific functionality that we can use whenever we need it, while a framework provides the overall structure and controls the flow of the application. React is called a library because it mainly focuses on building the UI and allows developers to choose other tools for the rest of the application.

---

# 3. What is a CDN?

**CDN** stands for **Content Delivery Network**.

A CDN is a network of servers distributed across different locations that delivers files such as:

- JavaScript
- CSS
- Images
- Videos
- Fonts

A **CDN link** is simply a URL pointing to a file hosted on a CDN.

### Example

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
```

Here, React is being loaded from a CDN.

---

## Why do we use a CDN?

Suppose our server is located in India and a user is accessing the website from the USA.

### Without CDN

```text
USA User
    |
    v
Your Server (India)
    |
    v
JavaScript File
```

The request has to travel a long distance.

### With CDN

```text
USA User
    |
    v
Nearby CDN Server
    |
    v
JavaScript File
```

The file can be delivered from a server geographically closer to the user.

---

## Advantages of CDN

### 1. Faster loading

Files can be served from a server closer to the user.

### 2. Reduces server load

Static files can be served by the CDN instead of our own server.

### 3. Better availability

CDNs have multiple servers, so resources can remain available even if one server has an issue.

### 4. Easy to use

Libraries such as React, Bootstrap, jQuery, etc. can be loaded using a simple URL.

### In short

> **CDN is a network of geographically distributed servers that delivers static resources to users efficiently and quickly.**

---

# 4. Why is React called React?

React is called **React** because the UI **reacts to changes in data or state**.

For example:

```jsx
function App() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

When the user clicks the button:

```text
count = 0
   |
   v
User clicks button
   |
   v
count = 1
   |
   v
React reacts to the change
   |
   v
UI gets updated
```

We don't manually find the button and change its text.

React detects the state change and updates the necessary part of the UI.

### Interview Answer

> React is called React because the UI reacts to changes in application data or state. When the state changes, React efficiently updates the affected parts of the UI.

---

# 5. What is `crossorigin` in the script tag?

The `crossorigin` attribute tells the browser **how to handle a cross-origin request** when loading a resource such as a script.

### Example

```html
<script src="https://cdn.example.com/app.js" crossorigin="anonymous"></script>
```

Suppose our website is:

```text
mywebsite.com
```

and the script is hosted at:

```text
cdn.example.com
```

These are different origins, so this is a **cross-origin request**.

---

## `crossorigin="anonymous"`

```html
<script src="https://cdn.example.com/app.js" crossorigin="anonymous"></script>
```

The browser makes the cross-origin request **without including user credentials such as cookies**.

This is commonly used for public resources hosted on CDNs.

For example, if React is publicly available on a CDN, the server doesn't need to know who we are.

```text
Browser
    |
    | Request without credentials
    v
CDN
    |
    v
Public React File
```

---

## `crossorigin="use-credentials"`

```html
<script src="https://example.com/app.js" crossorigin="use-credentials"></script>
```

This allows credentials such as cookies to be included in the cross-origin request.

For example:

```text
Browser
    |
    | Cookie: sessionId=ABC123
    v
Server
```

The server can use the cookie to identify the user's session.

---

## Difference between `anonymous` and `use-credentials`

| `anonymous`                             | `use-credentials`                                  |
| --------------------------------------- | -------------------------------------------------- |
| Credentials are not sent                | Credentials can be sent                            |
| Cookies are not included                | Cookies can be included                            |
| Common for public CDN resources         | Used when authentication/credentials are required  |
| Server doesn't receive user credentials | Server can use credentials to identify the session |

---

## Important Point

`anonymous` does **not** mean that the server cannot respond.

It simply means that the browser doesn't send credentials such as cookies with that cross-origin request.

If the resource is public, the server can simply return it.

Also, `crossorigin` does not itself decide whether the server allows access.

**CORS and the server's configuration determine what cross-origin requests are allowed.**

### Easy way to remember

```text
anonymous
    ↓
No credentials
    ↓
Access public resource


use-credentials
    ↓
Credentials can be sent
    ↓
Server can identify the session
```

---

# 6. React vs ReactDOM

The easiest way to remember:

> **React → Creates/defines the UI**  
> **ReactDOM → Renders that UI into the browser DOM**

---

## React

React is the core library used to create UI components.

Example:

```jsx
function App() {
  return <h1>Hello World</h1>;
}
```

React handles concepts such as:

- Components
- JSX
- State
- Props
- Reconciliation

---

## ReactDOM

ReactDOM connects React with the **browser DOM**.

Example:

```jsx
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

Here:

```text
<App />
   |
   v
React
   |
   v
ReactDOM
   |
   v
Browser DOM
   |
   v
<div id="root"></div>
```

ReactDOM acts as the renderer that connects React with the browser.

---

## Why are React and ReactDOM separate?

React can work with different environments.

```text
React
 ├── ReactDOM       → Web browser
 ├── React Native   → Mobile applications
 └── Other Renderers → Other environments
```

The **React core** handles UI logic, while the renderer handles how that UI is displayed in a particular environment.

### Interview Answer

> React is the core library used to build UI components, while ReactDOM is the renderer that connects React with the browser's DOM.

---

# 7. `react.development.js` vs `react.production.js`

Both files contain React, but they are designed for different environments.

> **Development → For developers**  
> **Production → For real users**

---

## `react.development.js`

This version is used while developing the application.

It provides additional:

- Warnings
- Error messages
- Development checks
- Debugging information

### Example

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
```

The development build is generally larger because it contains additional development-related checks and information.

---

## `react.production.js`

This version is used when the application is deployed for users.

It is optimized for production and removes/reduces development-only overhead.

### Example

```html
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
```

The production build is:

- Smaller
- Optimized
- Faster for end users
- Free from many development-only warnings/checks

---

## Comparison

| Development                | Production                           |
| -------------------------- | ------------------------------------ |
| `react.development.js`     | `react.production.js`                |
| Used during development    | Used after deployment                |
| More detailed warnings     | Fewer development warnings           |
| More debugging information | Less debugging information           |
| Larger                     | Smaller                              |
| Development checks enabled | Development overhead removed/reduced |

### Interview Answer

> `react.development.js` is designed for development and includes additional warnings and checks to help developers debug their applications. `react.production.js` is optimized for production and removes development overhead to improve performance.

---

# 8. Quick Revision

| Concept               | Simple Meaning                                     |
| --------------------- | -------------------------------------------------- |
| **Emmet**             | Write HTML/CSS faster using abbreviations          |
| **Library**           | You call it when you need it                       |
| **Framework**         | Provides structure and controls application flow   |
| **React**             | UI library                                         |
| **CDN**               | Network of servers that delivers files efficiently |
| **`crossorigin`**     | Controls how cross-origin resources are requested  |
| **`anonymous`**       | Cross-origin request without credentials           |
| **`use-credentials`** | Cross-origin request can include credentials       |
| **ReactDOM**          | Connects React with the browser DOM                |
| **Development build** | Used while developing                              |
| **Production build**  | Optimized for deployed applications                |

---

# Key Takeaways

```text
Emmet
  ↓
Write code faster


Library
  ↓
You control when to use it


Framework
  ↓
Provides structure and controls application flow


CDN
  ↓
Delivers static files from distributed servers


React
  ↓
UI Library


ReactDOM
  ↓
Connects React with Browser DOM


crossorigin
  ↓
Controls cross-origin resource requests


anonymous
  ↓
No credentials


use-credentials
  ↓
Credentials can be included


Development Build
  ↓
Debugging + warnings


Production Build
  ↓
Optimized for users
```
# React-02
# React / JavaScript Basics

## Table of Contents

1. [What is NPM?](#what-is-npm)
2. [What are Parcel / Webpack?](#what-are-parcel--webpack)
3. [What is `.parcel-cache`?](#what-is-parcel-cache)
4. [What happens if `.parcel-cache` doesn't exist?](#what-happens-if-parcel-cache-doesnt-exist)
5. [What is `npx`?](#what-is-npx)
6. [Dependencies vs `devDependencies`](#dependencies-vs-devdependencies)
7. [What is the `dist` folder?](#what-is-the-dist-folder)
8. [`dist` vs `.parcel-cache`](#dist-vs-parcel-cache)
9. [What is Browserslist?](#what-is-browserslist)

---

## What is NPM?

**NPM (Node Package Manager)** is a tool used with **Node.js** to install and manage packages (libraries) for your project.

Think of NPM like an **app store for JavaScript packages** 📦.

For example:

    npm install react

This means:

> "Download React and add it to my project."

### In simple words:

- **Node.js** → lets you run JavaScript outside the browser.
- **NPM** → helps you install, update, and manage packages used in JavaScript/Node.js projects.

NPM comes automatically when you install **Node.js**.

### Interview Answer

> NPM is a package manager for JavaScript and Node.js that is used to install, update, and manage packages in a project.

---

## What are Parcel / Webpack?

**Parcel and Webpack are module bundlers.**

In simple words, they take all the files your project needs and prepare them to run efficiently in the browser.

For example, your project may have:

    App.js
    Header.js
    Button.js
    style.css
    images
    React

Parcel/Webpack collect these files and their dependencies and create optimized files that the browser can load.

### Why do we need them?

They help with:

- 📦 **Bundling** → combine project files
- ⚡ **Optimization** → make files smaller and faster
- 🔄 **Hot Reloading** → changes appear quickly while developing
- 🖼️ **Asset Handling** → CSS, images, fonts, etc.
- 🚀 **Production Build** → create optimized files for deployment

### Easy Example

Think of Parcel/Webpack like **packing your luggage** 🧳.

You have clothes, shoes, books, and accessories scattered around.

**Parcel/Webpack = the person who organizes and packs everything properly into luggage.**

### Parcel vs Webpack

| Parcel | Webpack |
|---|---|
| Easier to set up | More configuration |
| Mostly works automatically | Highly configurable |
| Beginner-friendly | More control |
| Less configuration needed | Commonly customized in complex projects |

### Interview Answer

> Parcel and Webpack are module bundlers that bundle, optimize, and manage all the files and dependencies of a web application so it can run efficiently in the browser.

---

## What is `.parcel-cache`?

`.parcel-cache` is a **folder created by Parcel** to store temporary/cache files.

Think of it as Parcel's **memory** 🧠.

When you run:

    npm start

Parcel processes your files. Instead of doing all the work from scratch every time, it stores some processed information inside `.parcel-cache`.

### Why is it useful?

It makes development **faster** ⚡.

For example:

    First run:
    Parcel → process everything → takes some time

    Next run:
    Parcel → uses cached information → faster

### What happens when you change your code?

Suppose you have:

    App.js → Parcel → processed information → .parcel-cache

Now you change `App.js`.

Parcel detects the change:

    App.js (changed)
          ↓
    Parcel detects the change
          ↓
    Checks the cache
          ↓
    Re-processes what is necessary
          ↓
    Updates the cache

So the cache does **not simply become permanently outdated**.

Parcel keeps track of your files and their dependencies. When something changes, it invalidates the affected cached data and rebuilds/reprocesses what is necessary.

### Why use a cache?

Imagine your project has **100 files** and you change only one file.

Without caching:

    Change 1 file
         ↓
    Process all 100 files ❌

With caching:

    Change 1 file
         ↓
    Parcel reuses unchanged work from cache
         ↓
    Processes only what is needed ✅

That's why `.parcel-cache` mainly exists to **make subsequent builds and development faster**.

### Can we delete it?

**Yes.**

You can safely delete `.parcel-cache`.

Parcel will create it again when needed.

### Important

You generally **don't push `.parcel-cache` to GitHub**.

Add it to `.gitignore`:

    .parcel-cache/

### Interview Answer

> `.parcel-cache` stores Parcel's cached build information to speed up subsequent builds and development. It is temporary and can be deleted safely.

---

## What happens if `.parcel-cache` doesn't exist?

If `.parcel-cache` doesn't exist, that's usually **not a problem**.

It may be because:

1. You haven't run Parcel yet.
2. The cache was deleted.
3. Parcel is using a different cache configuration.
4. The folder is hidden in your file explorer.

For example:

    my-project/
    ├── src/
    ├── package.json
    ├── node_modules/
    └── .parcel-cache/   ← may appear after running Parcel

Run:

    npm start

or the Parcel command defined in your `package.json`.

If Parcel needs the cache, it will create/manage it automatically.

**You don't need to manually create `.parcel-cache`.**

---

## What is `npx`?

**`npx` is a tool that lets you run a package/command without having to install it globally.**

Think of it as:

> **npm → install/manage packages 📦**  
> **npx → run packages ▶️**

### Example

To create a React project:

    npx create-react-app my-app

Here, `npx` finds and runs `create-react-app` for you.

You don't need to manually install `create-react-app` globally first.

### Example with Parcel

    npx parcel index.html

This tells `npx`:

> "Find Parcel and run it."

### NPM vs NPX

| NPM | NPX |
|---|---|
| Mainly used to install/manage packages | Mainly used to run packages |
| `npm install parcel` | `npx parcel index.html` |
| Adds package to your project | Executes a package/command |

### Easy Way to Remember

> **npm = get/manage 📦**  
> **npx = run ▶️**

### Interview Answer

> `npx` is a tool that allows you to execute packages or commands without needing to install them globally.

---

## Dependencies vs `devDependencies`

The simple difference is:

> **`dependencies` → needed when your application runs**  
> **`devDependencies` → needed only while developing the application**

Example:

    {
      "dependencies": {
        "react": "...",
        "react-dom": "..."
      },
      "devDependencies": {
        "parcel": "..."
      }
    }

### `dependencies`

These are packages your actual application needs.

Examples:

- `react`
- `react-dom`
- `express`

### `devDependencies`

These are tools you need to **build, test, or develop** your application.

Examples:

- `parcel`
- `webpack`
- Testing tools
- Linters

### Easy Example 🏗️

Think about building a house:

- **dependencies** = things that remain/useful in the house 🏠
- **devDependencies** = tools used while building the house 🔨

Once the house is built, you don't need the hammer, but the house still needs its doors and windows.

### How to Install

Normal dependency:

    npm install react

Development dependency:

    npm install parcel --save-dev

Or:

    npm i -D parcel

### Interview Answer

> Dependencies are packages required for the application to run, while devDependencies are packages required only during development, testing, or building.

---

## What is the `dist` folder?

`dist` stands for **distribution**.

It usually contains the **final, optimized version of your project** that is ready to be deployed to a server.

For example:

    src/
       App.js
       index.html

            ↓ Parcel/Webpack

    dist/
       index.html
       main.js
       main.css

### Why do we need it?

When you build the project:

    npm run build

Parcel/Webpack takes your source code and:

- 📦 Bundles files together
- ⚡ Optimizes/minifies them
- 🗜️ Makes them smaller
- 📁 Puts the final files inside `dist`

Then you can **deploy the `dist` folder**.

### Easy Example 🏗️

Think of:

    src  → Raw materials
    dist → Finished product

You work on the raw materials, but you give the **finished product** to the customer.

### Important Difference

    src/  → Where you write/change your code
    dist/ → Final output generated by the bundler

Generally, you **don't manually edit files inside `dist`**.

### Interview Answer

> The `dist` folder contains the production-ready, bundled and optimized files generated by a build tool like Parcel or Webpack.

---

## `dist` vs `.parcel-cache`

The easiest way to understand it is:

> **`dist` = final output for the browser**  
> **`.parcel-cache` = temporary saved work for Parcel**

### Flow

    Your source code
          ↓
        Parcel
       ↙      ↘
    dist/    .parcel-cache/

### `dist/`

Contains the **final files** that can be deployed.

    dist/
    ├── index.html
    ├── index.js
    └── index.css

- Used by the **browser**
- Production-ready
- Bundled and optimized
- Can be uploaded to a server

### `.parcel-cache/`

Contains **Parcel's cached/processed information**.

- Used by **Parcel itself**
- Helps make builds faster
- Not meant for the browser
- Can be deleted safely
- Parcel recreates it when needed

### Important Point

`.parcel-cache` is **not simply a folder containing unbundled files**.

Parcel may store already-processed pieces and metadata there.

The main difference is:

> **`.parcel-cache` is an internal cache used by Parcel, while `dist` contains the final production output.**

### Easy Analogy 🏭

Imagine a factory:

    src             → Raw material
    .parcel-cache   → Factory's saved work/process information
    dist            → Finished product

So if you change your code:

    src changes
        ↓
    Parcel checks/reuses cache
        ↓
    Processes necessary changes
        ↓
    Updates dist

### Interview Answer

> `dist` contains the final build that is served/deployed, while `.parcel-cache` stores Parcel's cached processing information to make future builds faster.

---

## What is Browserslist?

**Browserslist tells tools which browsers your website should support.** 🌐

For example:

    {
      "browserslist": [
        "last 2 versions",
        "not dead"
      ]
    }

This basically means:

> "Make my website work properly with the latest 2 versions of major browsers, and don't worry about browsers that are no longer maintained."

### Why do we need it?

Different browsers support different JavaScript and CSS features.

For example:

    Your code
       ↓
    Parcel/Babel
       ↓
    Browserslist says which browsers to support
       ↓
    Code is transformed if necessary
       ↓
    Browser-compatible output

If you're using a **new JavaScript feature**, your build tools can use Browserslist information to decide whether that code needs to be transformed for older browsers.

### Where is it written?

Usually in `package.json`:

    {
      "browserslist": [
        "last 2 versions"
      ]
    }

### Easy Analogy 🎯

Imagine you're making a movie and asking:

> "Who should be able to watch this movie?"

Browserslist is like telling the production team:

> "Make sure this movie works for these audiences."

Similarly:

> **Browserslist = tells build tools which browsers your website needs to support.**

### Interview Answer

> Browserslist is a configuration that specifies which browsers and browser versions a web application should support, allowing tools like Parcel and Babel to generate compatible code.

---

# Quick Revision

| Topic | Simple Meaning |
|---|---|
| **NPM** | Installs and manages JavaScript packages |
| **NPX** | Runs packages/commands |
| **Parcel/Webpack** | Bundles and optimizes project files |
| **`.parcel-cache`** | Stores Parcel's cached processing information |
| **`dist`** | Contains the final production-ready build |
| **`dependencies`** | Packages needed by the application |
| **`devDependencies`** | Packages needed during development/building |
| **Browserslist** | Specifies which browsers your website should support |

---

# Easy Flow to Remember

    Your Source Code
           ↓
    ┌─────────────────┐
    │  Parcel/Webpack  │
    └─────────────────┘
          ↙       ↘
         ↓         ↓
    .parcel-cache  dist
     (cache/work)  (final output)
                      ↓
                   Browser

### Final One-Line Revision

> **NPM → manages packages**  
> **NPX → runs packages**  
> **Parcel/Webpack → bundles the project**  
> **`.parcel-cache` → saves Parcel's previous work**  
> **`dist` → final production output**  
> **Browserslist → tells tools which browsers to support**

# Lecture-3
# JSX Notes

## What is JSX?

JSX stands for **JavaScript XML**. It's a syntax extension for JavaScript, most commonly used with React, that lets you write HTML-like code directly inside your JavaScript files.

### What it looks like

```jsx
const element = <h1>Hello, world!</h1>;
```

Instead of writing this the "vanilla" way:

```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```

JSX lets you write markup that looks like HTML but behaves like JavaScript under the hood — it gets compiled (usually by Babel) into regular `React.createElement()` calls.

### Superpowers of JSX

**1. Embed JavaScript expressions directly**

You can drop any JS expression into JSX using curly braces `{}`.

```jsx
const name = "Priya";
const element = <h1>Hello, {name}!</h1>;
```

**2. Combine markup and logic in one place**

No more separating templates and logic into different files — component structure and behavior live together.

```jsx
function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
}
```

**3. Prevents injection attacks**

React automatically escapes values embedded in JSX before rendering, which helps guard against cross-site scripting (XSS) by default.

**4. It's just JavaScript objects**

JSX compiles down to plain JS objects (React elements), so you get the full power of JS — loops, conditionals, functions — to generate UI declaratively.

```jsx
const items = ['Apple', 'Banana', 'Cherry'];
const list = (
  <ul>
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>
);
```

**5. Component composition**

You can nest components like HTML tags, making complex UIs easy to build from small, reusable pieces.

```jsx
<Card>
  <Header title="Dashboard" />
  <Body />
</Card>
```

**6. Better tooling support**

Because it's structured, JSX gets syntax highlighting, autocomplete, and compile-time error checking (e.g., catching a typo in a tag name) in most modern editors — something plain string-based templates don't offer as easily.

**7. Readability**

For UI-heavy code, JSX often reads more naturally than deeply nested function calls, especially as component trees grow.

### Key things to remember

- JSX isn't valid JS on its own — it needs a compiler (Babel, TypeScript, etc.) to transform it.
- Every JSX expression must return a single root element (or use a Fragment `<>...</>`).
- Attributes use camelCase (`className` instead of `class`, `onClick` instead of `onclick`).

---

## Role of the `type` attribute in `<script>` tags

The `type` attribute on a `<script>` tag tells the browser **how to interpret the content** of the script — what language/format it's written in, and how to process it.

### Basic syntax

```html
<script type="text/javascript">
  console.log("Hello");
</script>
```

### Common values

**1. `text/javascript` (default / classic script)**

```html
<script type="text/javascript">...</script>
```

This is the default. If you omit `type` entirely, the browser assumes it's JavaScript anyway — so this is technically optional in modern HTML.

**2. `module` — ES Modules**

```html
<script type="module">
  import { greet } from './utils.js';
  greet();
</script>
```

- Enables `import` / `export` syntax
- Deferred by default (runs after HTML parsing, like `defer`)
- Runs in strict mode automatically
- Each module has its own scope (variables don't leak to global scope)
- CORS rules apply even for local files (often needs a server, not `file://`)

**3. `application/json` — Embedding JSON data**

```html
<script type="application/json" id="user-data">
  { "name": "Priya", "age": 25 }
</script>
```

Browser won't execute this as code — useful for embedding data that JS reads later via `JSON.parse(document.getElementById('user-data').textContent)`. Common in frameworks (e.g., Next.js uses `application/json` to hydrate data).

**4. `importmap` — Import Maps**

```html
<script type="importmap">
{
  "imports": {
    "lodash": "https://cdn.skypack.dev/lodash"
  }
}
</script>
```

Lets you use bare module specifiers (like `import _ from "lodash"`) in the browser without a bundler.

**5. Template-related types (non-executing, used by libraries)**

```html
<script type="text/template">
  <div>{{message}}</div>
</script>
<script type="text/x-handlebars-template">...</script>
```

Any unrecognized `type` value tells the browser **not to execute** the script as JS — it's just inert text the browser ignores for execution, often used to store template markup that a JS library (like Handlebars or Underscore) reads and processes manually.

**6. `text/babel` / `text/jsx` (older tutorials, dev-only)**

```html
<script type="text/babel">
  const el = <h1>Hello</h1>;
</script>
```

Used with in-browser Babel transpilation — fine for quick demos, **not for production** (it recompiles JSX on every page load, which is slow).

### Deprecated / legacy values

- `text/vbscript` — VBScript (obsolete, IE-only)
- `text/ecmascript` — old alias for JS, no longer needed

### Quick rule of thumb

| Value | Purpose |
|---|---|
| *(omitted)* or `text/javascript` | Classic JS script |
| `module` | ES module with import/export |
| `application/json` | Embed data, not executable |
| `importmap` | Define module import aliases |
| anything else (`text/template`, etc.) | Browser ignores it as code — used by libraries as raw text |

---

## `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent><TitleComponent/>}` in JSX

These three look similar but do very different things.

### 1. `{TitleComponent}` — passing the reference itself

```jsx
function TitleComponent() {
  return <h1>Title</h1>;
}

function App() {
  return <div>{TitleComponent}</div>;
}
```

This embeds the **function reference itself** as a JS expression — not a call, not JSX. React does not know what to do with a raw function as a child.

- If `TitleComponent` is a regular function component, React will **throw an error**:
  > Error: Functions are not valid as a React child.
- This pattern is only valid when you're passing the component as a **prop** to be rendered later, e.g.:
  ```jsx
  <SomeWrapper icon={TitleComponent} />
  ```
  and internally `SomeWrapper` does `<props.icon />` to actually render it.

So `{TitleComponent}` by itself in JSX output = **broken**, unless something downstream calls it.

### 2. `{<TitleComponent/>}` — rendering an instance

```jsx
function App() {
  return <div>{<TitleComponent />}</div>;
}
```

Here `<TitleComponent />` is JSX syntax, which compiles to `React.createElement(TitleComponent)` — a **React element object**. Wrapping it in `{}` just embeds that expression, which is exactly what JSX children expect.

This works, but it's **redundant** — `{<TitleComponent/>}` and just `<TitleComponent/>` produce the same result. You'd normally only wrap it in `{}` if it's part of a larger expression:

```jsx
<div>{condition ? <TitleComponent /> : null}</div>
```

Equivalent simpler version:

```jsx
<div><TitleComponent /></div>
```

### 3. `{<TitleComponent><TitleComponent/>}` — malformed / likely a typo

This one as written is actually **invalid JSX** — the outer `<TitleComponent>` tag is opened but never closed (`</TitleComponent>` is missing; the `/>` closes the *inner* one only). This would throw a syntax/parse error.

You probably meant one of these:

**a) Self-closing, standalone (no nesting):**

```jsx
{<TitleComponent />}
```

**b) Component nested as a child (composition):**

```jsx
{<TitleComponent><TitleComponent /></TitleComponent>}
```

This is valid *if* `TitleComponent` is designed to accept and render `children`:

```jsx
function TitleComponent({ children }) {
  return <h1>{children}</h1>;
}
```

Then this would render a `<TitleComponent>` whose child is *another* `<TitleComponent>` instance — nested recursively. Only makes sense if that's intentional (e.g., a wrapper/layout component).

### Summary table

| Expression | What it is | Result |
|---|---|---|
| `{TitleComponent}` | Raw function reference | ❌ Error if rendered directly as a child |
| `{<TitleComponent/>}` | React element (JSX call) | ✅ Renders the component |
| `{<TitleComponent><TitleComponent/>}` | Malformed JSX (unclosed tag) | ❌ Syntax error |
| `{<TitleComponent><TitleComponent/></TitleComponent>}` | Nested component as children | ✅ Valid *if* it accepts `children` |

**Rule of thumb:** In JSX, always use `<ComponentName />` (with angle brackets) to *render* a component. Use the bare `ComponentName` (no brackets) only when passing it as a *reference* — like a prop — for someone else to render later.