const {expect, assert} = require("chai"); //from chai library

const {ethers} = require("hardhat") //

const {fundContract} = require("../utils/utilities"); // This will help to fund our smart contract

const {
  abi,
} = require("../artifacts/contracts/interfaces/IERC20.sol/IERC20.json");


const provider = waffle.provider;

describe("FlashLoan Contract", () => {
  let FLASHLOAN,
    BORROW_AMOUNT,
    FUND_AMOUNT,
    initialFundingHuman,
    txArbitrage;


  const DECIMALS = 18;

  const BUSD_WHALE = "0xf977814e90da44bfa03b6295a0616a897441acec";
  const BUSD = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
  const CAKE = "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82";
  const CROX = "0x2c094F5A7D1146BB93850f629501eB749f6Ed491";


  const busdInstance = new ethers.Contract(BUSD, abi, provider);


})
