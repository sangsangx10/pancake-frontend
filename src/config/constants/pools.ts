import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'POPCORN',
    stakingTokenName: QuoteToken.POPCORN,
    stakingTokenAddress: '0xa532c7fc2c912db822dbdc14a020c7f1b62b5141',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x584527dEd17aceB3dC617C40B04E8fE9afc57096',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://popcornswap.com/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
