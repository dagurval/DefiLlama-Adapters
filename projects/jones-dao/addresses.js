const ADDRESSES = require('../helper/coreAssets.json')
module.exports = {
  aura: {
    locker: "0x3Fa73f1E5d8A792C80F426fc8F84FBF7Ce9bBCAC",
    strategy: "0x7629fc134e5a7feBEf6340438D96881C8D121f2c",
  },
  glp: {
    leverageStrategy: "0x15df56a82c194FeFEC9337C37A41964B69b584d5",
    router: "0x2F43c6475f1ecBD051cE486A9f3Ccc4b03F3d713",
    stableRewardTracker: "0xEB23C7e19DB72F9a728fD64E1CAA459E457cfaca",
  },
  lpStaking: [
    "0x360a766F30F0Ba57d2865eFb32502FB800b14dD3", // JONES-ETH staking rewards
    "0x13f6A63867046107780Bc3fEBdeE90E7AfCdfd99", // JONES-USDC staking rewards
    "0xBAc58e8b57935A0B60D5Cb4cd9F6C21049595F04", // JETH-ETH staking rewards
    "0x7eCe38dBE9D61D0d9Bf2D804A87A7d21b5937a56", // JGOHM-GOHM staking rewards
    "0x5723be83199C9Ec68ED0Ac979e98381224870e7f", // JDPX-DPX staking rewards
    "0xb94d1959084081c5a11C460012Ab522F5a0FD756", // milliner
  ],
  lps: [
    "0xe8EE01aE5959D3231506FcDeF2d5F3E85987a39c", // JONES-ETH SLP
    "0xa6efc26dAA4bb2b9bF5D23A0bc202A2BaDC2B59E", // JONES-USDC SLP
    "0xDF1A6Dd4E5b77d7F2143eD73074bE26c806754c5", // JETH-ETH SLP
    "0x292d1587a6Bb37E34574c9AD5993F221D8a5616C", // JGOHM-GOHM SLP
    "0xEeB24360C8C7A87933d16B0075E10E1a30Ad65B7", // JDPX-DPX SLP
  ],
  stakingContracts: [
    "0xf1a26cf6309a59794da29b5b2e6fabd3070d470f", // v1 staking rewards
    "0xb94d1959084081c5a11C460012Ab522F5a0FD756", // milliner (masterchef)
    "0x0aEfaD19aA454bCc1B1Dd86e18A7d58D0a6FAC38", // minichef (stip rewards)
  ],
  metaVaultsAddresses: [
    "0x7AA12db079C901400e22a5B912204Dc575ff9C19",
    "0x7a82A0ca7A2569d6cD3Df2aFeAF508f6d85Fd2c3",
    "0x64F6c761d855A6Eff9EF8b025B0258BDdEde5393",
    "0xf3e914c15d0bAa1f6537b0966d6F3394BA260747",
  ],
  optionVaultAddresses: [
    "0x8883E5bb2920bBE766A2c9e86ad9aA45a573f3F5",
    "0x5BA98Ad75AB87eB90fFc2b680bCfC6b9030E1246",
    "0xF46Ce0C13577232D5F29D9Bd78a9Cab278755346",
    "0x42448fDDCec02124cf6dB19a9f91Dea7bB0e88e5",
  ],
  tokens: {
    arb: ADDRESSES.arbitrum.ARB,
    aura: "0xC0c293ce456fF0ED870ADd98a0828Dd4d2903DBF",
    dpx: "0x6C2C06790b3E3E3c38e12Ee22F8183b37a13EE55",
    dpx_eth: "0x0C1Cf6883efA1B496B01f654E247B9b419873054",
    glp: ADDRESSES.arbitrum.fsGLP,
    gohm: "0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1",
    jones: "0x10393c20975cf177a3513071bc110f7962cd67da",
    jglp: "0x7241bC8035b65865156DDb5EdEf3eB32874a3AF6",
    jusdc: "0xe66998533a1992ecE9eA99cDf47686F4fc8458E0",
    rdpx: "0x32Eb7902D4134bf98A28b963D26de779AF92A212",
    rdpx_eth: "0x7418F5A2621E13c05d1EFBd71ec922070794b90a",
    uvrt: "0xa485a0bc44988B95245D5F20497CCaFF58a73E99",
    weth: ADDRESSES.arbitrum.WETH,
    wjaura: "0xcB9295ac65De60373A25C18d2044D517ed5da8A9",
  },
};
