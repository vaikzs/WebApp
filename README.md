## About

https://travis-ci.org/vaikzs/WebApp.svg?branch=master

Aim of this project is to showcase Web Application Development capabilities with best practices.


## Instructions

1. Enter the following command to install dependencies configured in package.json:
``npm install``
2. Execute the following command to host the application on your local sandbox machine
``npm start or node bin/www ``

3. The web application will be runnning on **http://localhost:3004**

## Things done

- Web application has been created using Express and Twitter's Bootstrap 4
- Dependencies for the project are included in package.json
- Project has be organised based on Views, and Controllers (Routes, and APIs)
- Environment variables can be configured from **.env** file (development, stage environment, etc.)
- Views are organized as partitions which contain element's html content of head, header (nav-bar), and scripts (javascript dependencies) respectively
- Usage logs are configured to be generated under folder **logs/app.log**
- Sample Application Programming Interface (API) is created under **routes/apis/sample.js** with Query and Request Parameters
- Main and miscellaneous routing logic are written under **routes/**
- Unit tests are provided under **test/testrunner.js**
- Travis Continuous Integration Tool has been leveraged as part of this work, as a result we included **.travis.yml** file to specify environment and operating system to build and test this project
- Source code is available on **GitHub**


## Platforms Used

- Node stable 6.11.5
- Node Package Manager 3.10.10

Copyright &copy; 2018 Vaikunth Sridharan. All Rights Reserved.




