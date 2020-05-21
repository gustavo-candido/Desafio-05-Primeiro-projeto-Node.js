# :rocket: Challenge #5 First Node.js project
This repository its part of my web studies with Rocketseat bootcamp (GoStack).

## :pushpin: The task ##
In this challenge I've to implement a API using __Typescript__ and __Node.js__, to storage financials transactions and perform services like get balance difference
(income-outcome)


## :mag: Implementation details ##
- The API isn't using any persistent data storage.
- Here I'm pratice some good pratices using a folder structure with Models (data interfaces),
Repositories (CRUD) and Services.


## :wrench: Instalation ##
**You need to install [Node.js](https://nodejs.org/en/download/) 
and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

```git clone https://github.com/gustavo-candido/Desafio-05-Primeiro-projeto-Node.js.git```




**Install dependencies:**

```yarn```




## :arrow_forward: Running ##

Just type `yarn dev:server`.



## :baby_bottle: Get started ##
In order to test the project in your own machine I recommend you to download 
[Insomnia](https://insomnia.rest/download/) or [Postman](https://www.postman.com/downloads/) to run routes that require
other `HTTP` methods besides [![GET](https://img.shields.io/badge/-GET-purple?style=flat-square)]().

#### Create transaction ####
[![POST](https://img.shields.io/badge/-POST-green?style=flat-square)]() http://localhost:3333/transactions

Body:
```javascript
{
  "title": "www.example.com",
  "value": 1000.00,
  "type": "income",
  "category": "Web jobs"
}
```

#### List transactions ####
[![GET](https://img.shields.io/badge/-GET-purple?style=flat-square)]() http://localhost:3333/transactions

Output:
```javascript
{
  "transactions": [
    {
      "id": "28982412-6633-4226-84b3-0324f75ac4f5",
      "title": "www.example.com",
      "value": 1000,
      "type": "income"
    }
  ],
  "balance": {
    "income": 1000,
    "outcome": 0,
    "total": 1000
  }
}
```


