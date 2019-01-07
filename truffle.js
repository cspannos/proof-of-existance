  // Import HDWalletProvider
var HDWalletProvider = require("truffle-hdwallet-provider");
  //Networks config
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
networks: {
      development: {
          host: "localhost",
          port: 8545,
          network_id: "*"
      },
      rinkeby: {
          provider: function() {
          return new HDWalletProvider("farm domain benefit zoo sister appear above bring quiz elite friend oppose", "https://rinkeby.infura.io/v3/4eda36503f77407f92642f6db4ee5f14");
      },
          network_id: "4",
          gas: 4500000
      }
  }
};
