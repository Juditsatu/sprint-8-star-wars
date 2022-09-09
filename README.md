# Sprint-8 Star Wars

This app is the 8th sprint from *IT Academy - Barcelona*. A course on Front-end with Angular. The aim of this project is to create a replica of the original Star Wars website using the Star Wars API.

## **Preview**

## ![tree diagram](src/assets/starwars-preview.gif)

---

## :wrench: **Technologies & Tools**

![Angular](https://img.shields.io/badge/-Angular-C62828?style=flat-square&logo=angular)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/-SCSS-black?style=flat-square&logo=sass)
![Bootstrap](https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap)
![TypeScript](https://img.shields.io/badge/-TypeScript-ffffff?style=flat-square&logo=typescript)
![Git](https://img.shields.io/badge/-Git-black?style=flat-square&logo=git)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github)
---

## :seedling: **Getting Started with this project**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Installation

Clone or fork the Repo, and ensure that you have the [Angular CLI](https://github.com/angular/angular-cli) installed.

In the project directory.

```bash
npm install
```

In the project directory.

```bash
ng serve --open
```

## :bookmark_tabs: **Usage Instructions**

**IMPORTANT:** routes are protected. Meaning you can't acces the starships unless you **LOG IN** or **SIGN UP**. 
Here's a fake REST API server you can [download](src/assets/star-wars-server/db.json) so you can prototype a backend with user data.

Next install JSON Server
```bash
npm install -g json-server
```

Start JSON Server

```bash
json-server --watch db.json
```

After that you can register or login with a fake email and navigate to the starships. Information will be saved in your [localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage). 