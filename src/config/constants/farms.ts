import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0xa532c7fc2c912db822dbdc14a020c7f1b62b5141',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xa532c7fc2c912db822dbdc14a020c7f1b62b5141',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'POPCORN-BNB LP',
    lpAddresses: {
      97: '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
      56: '0x445FDda500B700E27964f606D991148664752cA1',
    },
    tokenSymbol: 'POPCORN',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xa532c7fc2c912db822dbdc14a020c7f1b62b5141',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
    },
    tokenSymbol: 'BTC',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
