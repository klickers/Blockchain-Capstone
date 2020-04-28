// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
    /*deployer.deploy(SquareVerifier).then(() => {
        return deployer.deploy(SolnSquareVerifier, SquareVerifier.address);
    }); */
    deployer.deploy(SolnSquareVerifier, "0xE981FC6275CB40a38F2B92b9a7bF438F71Aa9BC7");
};
