## How to run this project locally:

### Prerequisites
- Node.js >= v14
- Truffle and Ganache
- npm

- Clone code 
 ``
git clone 
``
- Run npm install in root to install Truffle build and smart contract dependencies
- Run local testnet in port 7545 with an Ethereum client, e.g. Ganache
- truffle migrate --network development 
- Run tests truffle test
- cd vapp
- npm install
- npm run serve
- Open http://localhost:8080

## DIRECTORY STRUCTURE

bash
.
├── build
│   └── contracts
│        ├── citizen.json
├── contracts
│        ├── citizen.sol
├── migrations
│        ├── 1_deploy_contracts.js
├── test
│        ├── citizen.test.js
└── truffle-config.js
├── Front-End
│   └── public
│       ├── favicon.ico
│       ├── index.html
│   └── src
│        └── component
│           ├── Form.vue
│           ├── navbar.vue
│           ├── navMenu.vue
│        └── router
│           ├── index.js
│        └── views
│           ├── About.vue
│           ├── AddCitizen.vue
│           ├── Home.vue
│           ├── Citizens.vue
│     ├── App.vue
│     ├── index.js
│     ├── main.js
│     ├── package-lock.jso
│     ├── package.json