const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment



let content_m3 = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumped_m3 = content_m3.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped_m3 = bumped_m3.replace(verifierRegex, 'contract Multiplier3Verifier');
fs.writeFileSync("./contracts/Multiplier3Verifier.sol", bumped_m3);


let content_m3_plonk = fs.readFileSync("./contracts/Multiplier3Verifier_plonk.sol", { encoding: 'utf-8' });
let bumped_m3_plonk = content_m3_plonk.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped_m3_plonk = bumped_m3_plonk.replace(verifierRegex, 'contract Multiplier3Verifier_plonk');
fs.writeFileSync("./contracts/Multiplier3Verifier_plonk.sol", bumped_m3_plonk);