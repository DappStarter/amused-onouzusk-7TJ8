require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift response rifle upgrade kidney process suspect genius'; 
let testAccounts = [
"0xb276642ab0b88753cf5563308c281526a226407cf41fba5523413303b7e799b9",
"0x98bac327f18b481e742f285bcb448a66bafb448aedcc8d3b6bb80bd13d5c6ed1",
"0xc25d5eabac2af333ce953ee89594b32ef8be5def69f2a447ecf5a8239daf76b7",
"0xb280f3a8f4693847e3dd8fd59d9df26e8d409898b3fa5c20ac9cea6dbe74b3f3",
"0x581d4dc1ad9f359b407df6911364a5c5e30c0b3b674fa85c0675cfebac38b305",
"0xcff7eb1b39b58d5c31e9c14a470e534d5008c20563c27c166f06764e4ba0d447",
"0x7c1fda5a1f2214c8e1feae4bf37edb78738dd9c59f06ad163a1a74bdd6dc06ef",
"0x73587bea99a705202b3fb697be77d5552b5ab65c25e91b0fa0753f83e438099a",
"0xabbc617d1669c51b47f6ecca9020274ac7e67523fd5f02a8395b51015aab17c4",
"0xd2285b8f642e214a8040e6252aa00c0599f639a754a4f4e2d129e87009edebd0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

