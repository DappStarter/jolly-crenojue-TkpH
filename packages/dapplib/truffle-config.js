require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stomach rice noble social heavy private equal giant'; 
let testAccounts = [
"0x4ffc12454b631462060703cbf803259df69f04eb10f0929186ab19c8d8cac21e",
"0x93b7cb6c1fd1daa818bafc35a13e720bc479511cb4bbce4e2c213b4c08ffb26e",
"0xa4e620aba69ce7333b1a51bc0f6f5f62faabf123bf0204633798d26f93e92747",
"0xf6b8ec0fb81bb38dde7085f81deb9ae592fb918923d3e86918bdc56f4eb28a44",
"0xde2630a711cb18e9054a9f18be2d5a26655f889a400b0475d6935ec08dd74928",
"0x3c46b14046f65d18f01b8c40cc70b2aeebeffd258c87b9677fa79a99dcde4b6c",
"0x6846840855b3937e88c393d1a0bc6f960a380bd1635edfc9c41921705eb18795",
"0xd96954a00b7506bee051227c0f46c3df3349451ac9b18bd97591a3159b5c1aee",
"0x22763ac3baa542b3b4e0b44fa92eeaae2ed68162a52563c0e48f9951edfd22c2",
"0xc36c2a1d17f33b73079a53186ee090be24f2df5259a7adea70c425dba6099929"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

