// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

/// @title for save Citizens of a country
/// @notice You can use this contract for only the most simple CRUD functions
/// @dev All function calls are currently implemented without side effects
contract Citizen{
    
    // _ownerCitizen address of the owner.
    // address public _ownerCitizen;

    // Declare a struct
    // Identity contains informations about the identity of the citizen.
    struct Identity{
        uint256 citizenId;
        string FirstName;
        string LastName;
        string Country;
        string Province;
        uint256 age;
        string gender;
    }
    
    // Mapping
    mapping(uint256 => Identity) public citizens;
    
    //Modifiers
    // A modifier for checking if the `msg.sender` is the owner.
    // modifier onlyOwner {
    //     require(msg.sender == _ownerCitizen, "Citizen: Only owner can perform this action");
    //     _;
    // }

    //Functions

    // createCitizen() sets a new citizen.
    // createCitizen() uses the struct Identity and fills the Array citizens.
    function createCitizen(uint256 citizenId, string memory FirstName, string memory LastName, string memory Country, string memory Province, uint256 age, string memory gender) public {
        Identity memory newCitizen = Identity(citizenId, FirstName, LastName, Country, Province, age, gender);
        citizens[citizenId] = newCitizen;
    }

    ///@notice update all feild that need to change
    function updateCitizen(uint256 citizenId, string memory FirstName, string memory LastName, string memory Country, string memory Province, uint256 age, string memory gender) public{
        Identity memory i = citizens[citizenId];
        i.citizenId = citizenId;
        i.FirstName = FirstName;
        i.LastName = LastName;
        i.Country = Country;
        i.Province = Province;
        i.age = age;
        i.gender = gender;

    }
    
    //readCitizen() return information about the person who is registered
    function readCitizen(uint256 citizenId) public view returns( string memory FirstName, string memory LastName, string memory Country, string memory Province, uint256 age, string memory gender){
        Identity memory i = citizens[citizenId];
        return(i.FirstName, i.LastName, i.Country, i.Province, i.age, i.gender);
    }
    
    //delete unnecessary saved user 
    function deleteCitizen(uint256 citizenId) public {
        delete(citizens[citizenId]);
    }
}