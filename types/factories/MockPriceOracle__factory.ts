/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockPriceOracle } from "../MockPriceOracle";

export class MockPriceOracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockPriceOracle> {
    return super.deploy(_price, overrides || {}) as Promise<MockPriceOracle>;
  }
  getDeployTransaction(
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_price, overrides || {});
  }
  attach(address: string): MockPriceOracle {
    return super.attach(address) as MockPriceOracle;
  }
  connect(signer: Signer): MockPriceOracle__factory {
    return super.connect(signer) as MockPriceOracle__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as MockPriceOracle;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "_price",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "PriceUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "_newPrice",
        type: "int256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "viewPriceInUSD",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161012a38038061012a83398101604081905261002f91610037565b60005561004f565b600060208284031215610048578081fd5b5051919050565b60cd8061005d6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c806350d25bcd146041578063f55fa17f146041578063f7a3080614605b575b600080fd5b6047606c565b60405160529190608e565b60405180910390f35b606a60663660046077565b6072565b005b60005490565b600055565b6000602082840312156087578081fd5b5035919050565b9081526020019056fea2646970667358221220f0bb4cc32df9cc59502bd87473c78a371a52d178fcbf997e0494f5df617d826d64736f6c63430008010033";
