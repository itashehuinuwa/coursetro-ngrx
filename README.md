# NGRX SIMPLE ARCHITECTURE REPOSITORY

Simple Architecture NGRX with as little boilerplate as possible for a beginner to understand.

## ARCHITECTURE

```text
+-- src
|   +-- app
|       +-- actions // states to be called
|           +-- tutotials.actions.ts
|       +-- create // add a tutorial
|           +-- create.component.html
|           +-- create.component.scss
|           +-- create.component.spec.ts
|           +-- create.component.ts
|       +-- home
|           +-- home.component.html
|           +-- home.component.scss
|           +-- home.component.spec.ts
|           +-- home.component.ts
|       +-- model // interface for a tutorial
|           +-- tutorials.model.ts
|       +-- read
|           +-- read.component.html
|           +-- read.component.scss
|           +-- read.component.spec.ts
|           +-- read.component.ts
|       +-- reducers // functions to be called ones a state change is called
|           +-- tutotials.reducers.ts
+-- app-routing.modules.ts
+-- app.component.html
+-- app.component.spec.ts
+-- app.component.ts
+-- app.module.ts
+-- app.scss
+-- app.state.ts
```

### HOW TO RUN

* Install Packages

```unix
    npm install
```

* Run Ionic Application

```unix
    ionic serve
```

**Reference:**

* [Coursetro NGRX tutorial](https://coursetro.com/posts/code/151/Angular-Ngrx-Store-Tutorial---Learn-Angular-State-Management)
