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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface LendingPairHelperInterface extends ethers.utils.Interface {
  functions: {
    "vault()": FunctionFragment;
    "viewBorrowLimit(address[],address)": FunctionFragment;
    "viewBorrowedValue(address[],address)": FunctionFragment;
    "viewBorrowedValueInUSD(address[],address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "viewBorrowLimit",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "viewBorrowedValue",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "viewBorrowedValueInUSD",
    values: [string[], string]
  ): string;

  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "viewBorrowLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewBorrowedValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewBorrowedValueInUSD",
    data: BytesLike
  ): Result;

  events: {};
}

export class LendingPairHelper extends Contract {
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

  interface: LendingPairHelperInterface;

  functions: {
    vault(overrides?: CallOverrides): Promise<[string]>;

    "vault()"(overrides?: CallOverrides): Promise<[string]>;

    viewBorrowLimit(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { totals: BigNumber[] }>;

    "viewBorrowLimit(address[],address)"(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { totals: BigNumber[] }>;

    viewBorrowedValue(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { totals: BigNumber[] }>;

    "viewBorrowedValue(address[],address)"(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { totals: BigNumber[] }>;

    viewBorrowedValueInUSD(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { totals: BigNumber[] }>;

    "viewBorrowedValueInUSD(address[],address)"(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { totals: BigNumber[] }>;
  };

  vault(overrides?: CallOverrides): Promise<string>;

  "vault()"(overrides?: CallOverrides): Promise<string>;

  viewBorrowLimit(
    pairs: string[],
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "viewBorrowLimit(address[],address)"(
    pairs: string[],
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  viewBorrowedValue(
    pairs: string[],
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "viewBorrowedValue(address[],address)"(
    pairs: string[],
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  viewBorrowedValueInUSD(
    pairs: string[],
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "viewBorrowedValueInUSD(address[],address)"(
    pairs: string[],
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    vault(overrides?: CallOverrides): Promise<string>;

    "vault()"(overrides?: CallOverrides): Promise<string>;

    viewBorrowLimit(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "viewBorrowLimit(address[],address)"(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    viewBorrowedValue(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "viewBorrowedValue(address[],address)"(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    viewBorrowedValueInUSD(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "viewBorrowedValueInUSD(address[],address)"(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    vault(overrides?: CallOverrides): Promise<BigNumber>;

    "vault()"(overrides?: CallOverrides): Promise<BigNumber>;

    viewBorrowLimit(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "viewBorrowLimit(address[],address)"(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewBorrowedValue(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "viewBorrowedValue(address[],address)"(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewBorrowedValueInUSD(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "viewBorrowedValueInUSD(address[],address)"(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    viewBorrowLimit(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "viewBorrowLimit(address[],address)"(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewBorrowedValue(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "viewBorrowedValue(address[],address)"(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewBorrowedValueInUSD(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "viewBorrowedValueInUSD(address[],address)"(
      pairs: string[],
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
