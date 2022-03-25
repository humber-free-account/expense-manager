
# Expense Manager

The Expense Manager app helps users to track day to day Expenses occuring and also users can upload expense. receipts.

Features: 
1. Login to your account (Using Firebase Authentication.)
2. Upload receipt (Using Firebase Storage) with proogress bar showing your image upload progress.
3. Save Every day expense and CRUD(Create, Read, Update, Delete) operations. (using Firebase FireStore)

Tech Stack:
1. React JS
2. NPM
3. Deployment: Heroku
4. Firebase, Storage, Authentication, and FireStore Database.


## Authors

- [@Ashok Chakravarthi](https://www.github.com/ashokcs)
- [@Archana Vinayagam](https://www.github.com/archu0406)



## Run in Local Machiine

To run this project in you local machine

```bash
  npm i react-router-dom
  npm i react-toastify
  npm i firebase
  npm start
```


## Deployment

To deploy this project run

```bash
  npm run deploy
```

## To access the app that is already deployed in Heroku, click the below link.
[Expense Manager App](ttps://expense-manager-ashok.herokuapp.com/home)


## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Limitations
Use the below default login to the account:
username: nashokcs@gmail.com
password: ashokcs

Showing all the uploaded receipts code is executing 4 times, making the UI clumsy. So currently displaying only the receipts that is uploaded recently.
