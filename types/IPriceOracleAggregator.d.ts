/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IPriceOracleAggregatorInterface extends ethers.utils.Interface {
  functions: {
    "getPriceInUSD(address)": FunctionFragment;
    "getPriceInUSDMultiple(address[])": FunctionFragment;
    "setOracleForAsset(address[],address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getPriceInUSD",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceInUSDMultiple",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setOracleForAsset",
    values: [string[], string[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getPriceInUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceInUSDMultiple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOracleForAsset",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipAccepted(address,address,uint256)": EventFragment;
    "StableTokenAdded(address,uint256)": EventFragment;
    "TransferControl(address,uint256)": EventFragment;
    "UpdateOracle(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipAccepted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StableTokenAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferControl"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateOracle"): EventFragment;
}

export class IPriceOracleAggregator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IPriceOracleAggregatorInterface;

  functions: {
    getPriceInUSD(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getPriceInUSD(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPriceInUSDMultiple(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "getPriceInUSDMultiple(address[])"(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    setOracleForAsset(
      _asset: string[],
      _oracle: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setOracleForAsset(address[],address[])"(
      _asset: string[],
      _oracle: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getPriceInUSD(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getPriceInUSD(address)"(
    _token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPriceInUSDMultiple(
    _tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getPriceInUSDMultiple(address[])"(
    _tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  setOracleForAsset(
    _asset: string[],
    _oracle: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setOracleForAsset(address[],address[])"(
    _asset: string[],
    _oracle: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getPriceInUSD(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPriceInUSD(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceInUSDMultiple(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getPriceInUSDMultiple(address[])"(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    setOracleForAsset(
      _asset: string[],
      _oracle: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setOracleForAsset(address[],address[])"(
      _asset: string[],
      _oracle: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipAccepted(
      prevOwner: null,
      newOwner: null,
      timestamp: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { prevOwner: string; newOwner: string; timestamp: BigNumber }
    >;

    StableTokenAdded(
      _token: null,
      timestamp: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _token: string; timestamp: BigNumber }
    >;

    TransferControl(
      _newTeam: null,
      timestamp: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _newTeam: string; timestamp: BigNumber }
    >;

    UpdateOracle(
      token: null,
      oracle: null
    ): TypedEventFilter<[string, string], { token: string; oracle: string }>;
  };

  estimateGas: {
    getPriceInUSD(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPriceInUSD(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceInUSDMultiple(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPriceInUSDMultiple(address[])"(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setOracleForAsset(
      _asset: string[],
      _oracle: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setOracleForAsset(address[],address[])"(
      _asset: string[],
      _oracle: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPriceInUSD(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPriceInUSD(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceInUSDMultiple(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPriceInUSDMultiple(address[])"(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setOracleForAsset(
      _asset: string[],
      _oracle: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setOracleForAsset(address[],address[])"(
      _asset: string[],
      _oracle: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
