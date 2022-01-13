# Save Citizens of a government using Blockchain technology
Blockchain is technology that builds a trustworthy service in an untrustworthy environment, It uses replication of distributed systems to build a decentralized service that achieves the same goals with a trusted centralized one.
My goal and idea of ​​making this project is to register the citizens of a country, the pillar of any country is its citizens, and when foreigners enter a country without an identity, it causes many unfortunate incidents.
I live in Afghanistan, a country that has many foreigners and profiteers without a clear identity, as a result of which we always see a lot of bloody wars. Having a web-app that can register people from different regions is one of the requirements of my country. When people want to travel abroad from other countries or people inside the country, they go through an identification stage and through Registering in a secure network such as blockchain that no longer allows humans to forge work. because people of a government have the right to peaceful life, all over peace, and without mental tensions.



##Contract Workflow
1. First for working with project must install MetaMask.
2. you click registration button to register the Citizens information.
3. when it fill all feild correctly rendering to Citizens page.
4. in Citizen page you can see all Citizens that you registered.
5. with Delete button you can delete but temporary.
6. if you refuse to delete it, so click restore button.
7. Otherwise delete permanent.


## How to run this project locally:

### Prerequisites
- Node.js >= v14
- Truffle and Ganache
- npm
- Mongodb database

Contract
- Clone code `git clone https://github.com/Alinasarwary/blockchain-developer-bootcamp-final-project.git`
- Run `npm install` in root to install Truffle build and smart contract dependencies
- Run local testnet in port `7545` with an Ethereum client, e.g. Ganache
- `truffle migrate --network development`
- Run tests `truffle test`

Front
- `cd Front-End`
- `npm install`
- `npm run serve`
- Open `http://localhost:8080`

## Webapp URL

## Video Tour
Video tour : https://www.loom.com/share/97825433349b49198e92d40788ebb489

## DIRECTORY STRUCTURE

```bash
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
```