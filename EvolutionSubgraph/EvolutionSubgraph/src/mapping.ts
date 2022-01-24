import { Address, BigInt } from "@graphprotocol/graph-ts"
import {

  RacerDepositEvent__Params

} from "../generated/Evolution/Evolution"
import { RacerDepositEvent } from "../generated/schema"


export function handleRacerDepositEvent(event: RacerDepositEvent ): void {
  let entity = RacerDepositEvent.load(event.tokenId.toHex())
  if (!entity) {
    entity = new RacerDepositEvent(event.tokenId.toHex())
  }
  entity.status = event.status
  entity.seller = event.seller
  entity.buyer = event.buyer
  entity.tokenId = event.tokenId
  entity.timestamp = event.timestamp
  entity.save()
}


