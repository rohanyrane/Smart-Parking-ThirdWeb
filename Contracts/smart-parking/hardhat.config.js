/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork:'sepolia',
    networks:{
      hardhat:{},
      sepolia:{
        url:'https://rpc.ankr.com/eth_sepolia',
        accounts:['0x8CB249aBfe4400A91FbE3702d81928B506d1a46c']
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
