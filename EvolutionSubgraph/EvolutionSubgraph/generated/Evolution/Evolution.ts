// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RacerDepositEvent extends ethereum.Event {
  get params(): RacerDepositEvent__Params {
    return new RacerDepositEvent__Params(this);
  }
}

export class RacerDepositEvent__Params {
  _event: RacerDepositEvent;

  constructor(event: RacerDepositEvent) {
    this._event = event;
  }

  get action(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Evolution__depositsResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class Evolution__withdrawsResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class Evolution extends ethereum.SmartContract {
  static bind(address: Address): Evolution {
    return new Evolution("Evolution", address);
  }

  CEO(): Bytes {
    let result = super.call("CEO", "CEO():(bytes32)", []);

    return result[0].toBytes();
  }

  try_CEO(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("CEO", "CEO():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  CFO(): Bytes {
    let result = super.call("CFO", "CFO():(bytes32)", []);

    return result[0].toBytes();
  }

  try_CFO(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("CFO", "CFO():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  CTO(): Bytes {
    let result = super.call("CTO", "CTO():(bytes32)", []);

    return result[0].toBytes();
  }

  try_CTO(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("CTO", "CTO():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  EOC(): Address {
    let result = super.call("EOC", "EOC():(address)", []);

    return result[0].toAddress();
  }

  try_EOC(): ethereum.CallResult<Address> {
    let result = super.tryCall("EOC", "EOC():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  KRL(): Address {
    let result = super.call("KRL", "KRL():(address)", []);

    return result[0].toAddress();
  }

  try_KRL(): ethereum.CallResult<Address> {
    let result = super.tryCall("KRL", "KRL():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  RACE(): Address {
    let result = super.call("RACE", "RACE():(address)", []);

    return result[0].toAddress();
  }

  try_RACE(): ethereum.CallResult<Address> {
    let result = super.tryCall("RACE", "RACE():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  TRACE(): Address {
    let result = super.call("TRACE", "TRACE():(address)", []);

    return result[0].toAddress();
  }

  try_TRACE(): ethereum.CallResult<Address> {
    let result = super.tryCall("TRACE", "TRACE():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deposits(param0: BigInt): Evolution__depositsResult {
    let result = super.call(
      "deposits",
      "deposits(uint256):(address,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Evolution__depositsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_deposits(param0: BigInt): ethereum.CallResult<Evolution__depositsResult> {
    let result = super.tryCall(
      "deposits",
      "deposits(uint256):(address,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Evolution__depositsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  getLevelPriceforEOC(_levelEOC: i32): BigInt {
    let result = super.call(
      "getLevelPriceforEOC",
      "getLevelPriceforEOC(uint8):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_levelEOC))]
    );

    return result[0].toBigInt();
  }

  try_getLevelPriceforEOC(_levelEOC: i32): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLevelPriceforEOC",
      "getLevelPriceforEOC(uint8):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_levelEOC))]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLevelPriceforKRL(_levelKRL: i32): BigInt {
    let result = super.call(
      "getLevelPriceforKRL",
      "getLevelPriceforKRL(uint8):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_levelKRL))]
    );

    return result[0].toBigInt();
  }

  try_getLevelPriceforKRL(_levelKRL: i32): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLevelPriceforKRL",
      "getLevelPriceforKRL(uint8):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_levelKRL))]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNewLevelDiff(): BigInt {
    let result = super.call(
      "getNewLevelDiff",
      "getNewLevelDiff():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getNewLevelDiff(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNewLevelDiff",
      "getNewLevelDiff():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getTimeForWithdraw(): BigInt {
    let result = super.call(
      "getTimeForWithdraw",
      "getTimeForWithdraw():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getTimeForWithdraw(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTimeForWithdraw",
      "getTimeForWithdraw():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  levels(param0: i32): BigInt {
    let result = super.call("levels", "levels(uint8):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))
    ]);

    return result[0].toBigInt();
  }

  try_levels(param0: i32): ethereum.CallResult<BigInt> {
    let result = super.tryCall("levels", "levels(uint8):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  withdraws(param0: BigInt): Evolution__withdrawsResult {
    let result = super.call(
      "withdraws",
      "withdraws(uint256):(address,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Evolution__withdrawsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_withdraws(
    param0: BigInt
  ): ethereum.CallResult<Evolution__withdrawsResult> {
    let result = super.tryCall(
      "withdraws",
      "withdraws(uint256):(address,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Evolution__withdrawsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }
}

export class DepositUsingEOCCall extends ethereum.Call {
  get inputs(): DepositUsingEOCCall__Inputs {
    return new DepositUsingEOCCall__Inputs(this);
  }

  get outputs(): DepositUsingEOCCall__Outputs {
    return new DepositUsingEOCCall__Outputs(this);
  }
}

export class DepositUsingEOCCall__Inputs {
  _call: DepositUsingEOCCall;

  constructor(call: DepositUsingEOCCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositUsingEOCCall__Outputs {
  _call: DepositUsingEOCCall;

  constructor(call: DepositUsingEOCCall) {
    this._call = call;
  }
}

export class DepositUsingKRLCall extends ethereum.Call {
  get inputs(): DepositUsingKRLCall__Inputs {
    return new DepositUsingKRLCall__Inputs(this);
  }

  get outputs(): DepositUsingKRLCall__Outputs {
    return new DepositUsingKRLCall__Outputs(this);
  }
}

export class DepositUsingKRLCall__Inputs {
  _call: DepositUsingKRLCall;

  constructor(call: DepositUsingKRLCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositUsingKRLCall__Outputs {
  _call: DepositUsingKRLCall;

  constructor(call: DepositUsingKRLCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _KRL(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _EOC(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _RACE(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _TRACE(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SetLevelPriceforEOCCall extends ethereum.Call {
  get inputs(): SetLevelPriceforEOCCall__Inputs {
    return new SetLevelPriceforEOCCall__Inputs(this);
  }

  get outputs(): SetLevelPriceforEOCCall__Outputs {
    return new SetLevelPriceforEOCCall__Outputs(this);
  }
}

export class SetLevelPriceforEOCCall__Inputs {
  _call: SetLevelPriceforEOCCall;

  constructor(call: SetLevelPriceforEOCCall) {
    this._call = call;
  }

  get _levelEOC(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _priceEOC(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetLevelPriceforEOCCall__Outputs {
  _call: SetLevelPriceforEOCCall;

  constructor(call: SetLevelPriceforEOCCall) {
    this._call = call;
  }
}

export class SetLevelPriceforKRLCall extends ethereum.Call {
  get inputs(): SetLevelPriceforKRLCall__Inputs {
    return new SetLevelPriceforKRLCall__Inputs(this);
  }

  get outputs(): SetLevelPriceforKRLCall__Outputs {
    return new SetLevelPriceforKRLCall__Outputs(this);
  }
}

export class SetLevelPriceforKRLCall__Inputs {
  _call: SetLevelPriceforKRLCall;

  constructor(call: SetLevelPriceforKRLCall) {
    this._call = call;
  }

  get _levelKRL(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _priceKRL(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetLevelPriceforKRLCall__Outputs {
  _call: SetLevelPriceforKRLCall;

  constructor(call: SetLevelPriceforKRLCall) {
    this._call = call;
  }
}

export class SetNewLevelDiffForEOCCall extends ethereum.Call {
  get inputs(): SetNewLevelDiffForEOCCall__Inputs {
    return new SetNewLevelDiffForEOCCall__Inputs(this);
  }

  get outputs(): SetNewLevelDiffForEOCCall__Outputs {
    return new SetNewLevelDiffForEOCCall__Outputs(this);
  }
}

export class SetNewLevelDiffForEOCCall__Inputs {
  _call: SetNewLevelDiffForEOCCall;

  constructor(call: SetNewLevelDiffForEOCCall) {
    this._call = call;
  }

  get _newLevelDiffEOC(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetNewLevelDiffForEOCCall__Outputs {
  _call: SetNewLevelDiffForEOCCall;

  constructor(call: SetNewLevelDiffForEOCCall) {
    this._call = call;
  }
}

export class SetNewLevelDiffForKRLCall extends ethereum.Call {
  get inputs(): SetNewLevelDiffForKRLCall__Inputs {
    return new SetNewLevelDiffForKRLCall__Inputs(this);
  }

  get outputs(): SetNewLevelDiffForKRLCall__Outputs {
    return new SetNewLevelDiffForKRLCall__Outputs(this);
  }
}

export class SetNewLevelDiffForKRLCall__Inputs {
  _call: SetNewLevelDiffForKRLCall;

  constructor(call: SetNewLevelDiffForKRLCall) {
    this._call = call;
  }

  get _newLevelDiffKRL(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetNewLevelDiffForKRLCall__Outputs {
  _call: SetNewLevelDiffForKRLCall;

  constructor(call: SetNewLevelDiffForKRLCall) {
    this._call = call;
  }
}

export class SetTimeForWithdrawCall extends ethereum.Call {
  get inputs(): SetTimeForWithdrawCall__Inputs {
    return new SetTimeForWithdrawCall__Inputs(this);
  }

  get outputs(): SetTimeForWithdrawCall__Outputs {
    return new SetTimeForWithdrawCall__Outputs(this);
  }
}

export class SetTimeForWithdrawCall__Inputs {
  _call: SetTimeForWithdrawCall;

  constructor(call: SetTimeForWithdrawCall) {
    this._call = call;
  }

  get _timeForWithdraw(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetTimeForWithdrawCall__Outputs {
  _call: SetTimeForWithdrawCall;

  constructor(call: SetTimeForWithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
