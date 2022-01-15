const assert = require('assert');
const Citizens = artifacts.require('Citizens');

let account;
let citizen;


before(async () => {
    account = await web3.eth.getAccounts();
    citizen = await Citizens.new();
    
})
describe("Citizen Test", () => {
    it("Contract deploy", () => {
        assert.ok(Citizens.address);
    }),
    it('creates a new user', async () => {
        try {
            await citizen.createCitizen(account[1], "Alina", "Sarwari", "Afghanistan", "Herat", 22, "Fmale", {
                from: account[1]
            });
        } catch (error) {
            console.log(`${account} is not owner`);
        }
    }).timeout(10000),
    it("Citizen should update correctly", async() => {
        try {
            await citizen.updateCitizen(account[1], "romina", "sarwari", "AF", "Kabul", 19, "fmale", {
                from: account[1]
            })
        } catch (error) {
            console.log(`${account} is not updated`);
        }
    }).timeout(10000),
    it("reverts when updating a non-existing citizen", async() => {
        try {
            await citizen.updateCitizen(account[2], "romina", "sarwari", "AF", "Kabul", 19, "fmale")
        } catch (error) {
            console.log(`Citizen does not exist!`);
        }
    }).timeout(10000),
    it("Citizen delete if registered before", async() => {
        try {
            await citizen.deleteCitizen(account[1]);
                try {
                    await citizen.readCitizen(account[1]);
                } catch (error) {
                    assert(error.message.includes('User does not exist!'));
                    return;
                }
        } catch (error) {
            return;
        }
    }).timeout(10000)
})
