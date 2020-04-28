var SquareVerifier = artifacts.require("SquareVerifier");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");


contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('testing SolnSquareVerifier', function () {
        beforeEach(async function () {
            let Verifier = await SquareVerifier.new({from: account_one})
            this.contract = await SolnSquareVerifier.new(Verifier.address, {from: account_one});
        })

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('new solution can be added to contract', async function() {

            let proof = {
                a: ["0x00fe720eaf264abaaed7960e2badad4f781a3a360dce156017ef73190f8efd32", "0x0e34dfe8090967219060930a0de119dfb7e351f6ee42c8708fe9cf5c7d517cc1"],
                b: [["0x064e18a7d68d67d6883b55878613b5ec361f6e9f2b93cb76524e103b0e20057d", "0x184587c0371e3b19f8545141802d5238fe4c39dd3328d12213666af8ffe1145f"], ["0x28e8de96bd5e0a1bcc179c5bf952e82fd64a62540bde03b6f797cfac3df9a56e", "0x085537b7c742965917d0cab34abe84cead4e195a8e2e97e476f4a77cd5320064"]],
                c: ["0x14dc0f8428e8b8b2e1660dc813325aa1b45728046aae6ec787da5d6618e86331", "0x214700bb2e9c7d52a4d1396a3b31c1be2b540670f18e51ca55a80d1d4f73b5c1"],
                input: ["0x00000000000000000000000000000000000000000000000000000000000000a7", "0x0000000000000000000000000000000000000000000000000000000000000000"]
            }

            let mint = await this.contract.mintToken.call(account_two, 1,
                proof.a,
                proof.b,
                proof.c,
                proof.input)

            assert.equal(mint, true, "New solution cannot be added")

        })

        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('a token can be minted', async function() {

            let mint = await this.contract.mint.call(account_two, 3, "Glice")

            assert.equal(mint, true, "Token cannot be minted")

        })
    })
})
