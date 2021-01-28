import { MenuEntry } from '@ichikanakano/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xa532c7fc2c912db822dbdc14a020c7f1b62b5141',
      },
      {
        label: 'Liquidity',
        href: 'https://pancakeswap.info/pair/0x445FDda500B700E27964f606D991148664752cA1',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Blog',
        href: 'https://popcornswap.medium.com',
      },
    ],
  },
]

export default config
