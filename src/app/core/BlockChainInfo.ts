const rinkebyJSON = {
  SINGLE_NFT721_JSON: "../Contracts/Rinkeby/NFT.json",
  SINGLE_NFT721_ADDRESS: "0xdE1eBC57F9Ed502AD2946C2C07412B6561e6cf97",
  MULTIPLE_NFT1155_JSON: "../MultNFT.json",
  MULTIPLE_NFT1155_ADDRESS: "0xFe049F9274D77c626f961195921aB1EEB313cE68",
  ERC_20_JSON: "",
  ERC_20_ADDRESS: "0x40034B5d8327da2D0A452FF57cE2b8ae9460ABf2",
  MARKET_PLACE_JSON: "../MarketPlace.json",
  MARKET_PLACE_ADDRESS: "0x37cBA1448549b03eF4a127e34C3b6a1b8E07dF24",
  MARKET_PLACE_1155_JSON: "../MarketPlace_1155.json",
  MARKET_PLACE_1155_ADDRESS: "0x34C7De3604e89E0879F98a70916d91baE5fc01DF",
  LAZY_MINT_JSON: "../LazyMint.json",
  LAZY_MINT_ADDRESS: "0xa64Fb7d36a2D6130788939166B1789D0Ec6C4940",
  BATCH_MINT_JSON: "../Batchmint.json",
  BATCH_MINT_ADDRESS: "0x53a668332B20689e7810451cd6cBe737D9F71201",
  BATCH_MINT_MARKETPLACE: "../BatchMarketPlace.json",
  BATCH_MINT_MARKETPLACE_ADDRESS: "0xbFaE970563E25042955E0D726465C6B09e87f028"

}

const Contracts_Matic = {
  SINGLE_NFT721_JSON: "../Contracts/Rinkeby/NFT.json",
  SINGLE_NFT721_ADDRESS: "asdlkfnasdlfkas;ldkfmasd;lkfmasd;lfkmasd;lckasd;cklnasd'nas;dlfcknasdck/l",
  MULTIPLE_NFT1155_JSON: "../MultNFT.json",
  MULTIPLE_NFT1155_ADDRESS: "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
  ERC_20_JSON: "",
  ERC_20_ADDRESS: "sddddddddddddddddfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  MARKET_PLACE_JSON: "../MarketPlace.json",
  MARKET_PLACE_ADDRESS: "dssssssssssssssssssssssssssssssssssssssssssssssssssssskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
  MARKET_PLACE_1155_JSON: "../MarketPlace_1155.json",
  MARKET_PLACE_1155_ADDRESS: "0x968C74B1F515244141af5FDeEf2b851bC9f9af91",
  LAZY_MINT_JSON: "../LazyMint.json",
  LAZY_MINT_ADDRESS: "0xa64Fb7d36a2D6130788939166B1789D0Ec6C4940",
  BATCH_MINT_JSON: "../Batchmint.json",
  BATCH_MINT_ADDRESS: "0x53a668332B20689e7810451cd6cBe737D9F71201",
  BATCH_MINT_MARKETPLACE: "../BatchMarketPlace.json",
  BATCH_MINT_MARKETPLACE_ADDRESS: "0xbFaE970563E25042955E0D726465C6B09e87f028"
}
export const Contracts_Rinkeby = localStorage.getItem('networkName') ==  "Avalanche" ? Contracts_Matic : rinkebyJSON;
