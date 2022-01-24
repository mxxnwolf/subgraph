import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  Transfer,
  IERC721,
  ApprovalForAll,
  RacerDepositEvent__Params

} from "../generated/Evolution/Evolution"
import { RacerDepositEvent } from "../generated/schema"


export function handleRacerDepositEvent(event: RacerDepositEvent ): void {
  let entity = RacerDepositEvent.load(event.params.tokenId.toHex())
  if (!entity) {
    entity = new RacerDepositEvent(event.params.tokenId.toHex())
  }
  entity.status = bool.call(event.params.status)
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.tokenId = event.params.tokenId
  entity.timestamp = event.params.timestamp
  entity.save()
}


