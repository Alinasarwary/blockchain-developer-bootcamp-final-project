import Web3 from "web3";
import CitizensArtifact from "../../Back-End/build/contracts/Citizen.json"

const App = {
  web3: null,
  account: null,
  meta: null,

  start: async function() {
    const { web3 } = this;

    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = CitizensArtifact.networks[networkId];
      this.meta = new web3.eth.Contract(
        CitizensArtifact.abi,
        deployedNetwork.address
      );

      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];
    } catch (error) {
      console.error("Could not connect to contract or chain.");
    }
  },
  

  setStatus: function(message) {
    const status = document.getElementById("status1");
    status.innerHTML = message;
  },

  createCitizen: async function(citizenId, FirstName, LastName, Country, Province, age, gender) {
    const { createCitizen } = this.meta.methods;
    await createCitizen(citizenId, FirstName, LastName, Country, Province, age, gender).send({ 
      from: this.account
    });
  },

  readCitizen: async function() {
    const { readCitizen } = this.meta.methods;
    const citizen = [];
    (async function() {
      for (let id = 1; id <= 1; id++) {
        let current = await readCitizen(id).call();
        citizen.push(current);
      }
    })();
      console.log('citizen', citizen);
      return citizen;
  },

  getCitizen: async function(id){
    const { readCitizen } = this.meta.methods;
    let currentCitizen = await readCitizen(id).call();
    return currentCitizen;
  },
  
  deleteCitizen: async function(citizenId) {
    const {deleteCitizen} = this.meta.methods;
    await deleteCitizen(citizenId).send({from : this.account});
  },

  // updateCitizen: async function(citizenId, FirstName, LastName, Country, Province, age, gender) {
  //   const {updateCitizen} = this.meta.methods;
  //   await updateCitizen(citizenId, FirstName, LastName, Country, Province, age, gender).send({
  //     from: this.account
  //   })
  // }

  
};

window.App = App;

window.addEventListener("load", async function() {
  if (window.ethereum) {
    // use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
    await window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn(
      "No web3 detected. Falling back to HTTP://127.0.0.1:7545. You should remove this fallback when you deploy live"
    );
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(
      new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
    );
  }

  App.start();
});

export default 
  App;
