# HomeMates-Server API
![](https://img.shields.io/badge/version-v.1.0.4-blue.svg)
![](https://img.shields.io/npm/v/npm.svg)

The React Native application using EXPO CLI to consume REST API of HomeMates-API. This project is a tool to manage rent and utilities in a house. This solution provides rent tracking system, utilities split payment, and basic household accounting system. The main objective in this project is to manage rent and utilities billing system when the house owner leases an apartment/house/room/unit. It opens a new opportunity for those who have a second property (i.e. house) that is used for renting rooms. 

## Installation and Running the application
* [Install node.js and npm](https://wsvincent.com/install-node-js-npm-windows/)
* Install dependencies on both Server & Client
```
  npm install     //to install server dependencies
```
* Run the application / server locally
```
  npm start
```
### OPTIONAL
Running fake database API for front-end development (Optional)
```
  json-server db.json
```

## Features
### Main
* Splitting Bills
* Uploading Bill receipt
* Payment with debit/credit card or PayPal
* Email and web notification

### Extra
* Accounting system
* Manage multiple houses

## System Specifications & Architecture
This project is built using RESTful API that connects React Native Apps(Android and IOs). MongoDB is complemented with MongooseJS to help converts schemas into NoSQL queries. This main repository provides REST API data and a landing page for marekting purposes. React Native is used as the Native Applications that consume provided REST API from this server.

Below are the basic architecture of this repository:
```
 .
├── app.js
├── config
├── db
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug
```    

## Contributors
__Riordan Dervin Alfredo__ - Lead Software Engineer / Front-End Engineer | [profile website](https://rioalfredo.com) 

__Vincent Sutinah__ - Software Developer / Back-End Engineer | email: vincentsutinah@gmail.com

__Jason Anthony Kie__ - Software Developer / Native App Engineer | email:jasonakie28@gmail.com
