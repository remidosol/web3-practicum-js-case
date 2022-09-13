import { Vehicles } from './Vehicle'
import { VehicleTypes } from '../types/index'

/**
 * @class Bus
 *
 * @description Bus class that extends Vehicles class
 */
export class Bus extends Vehicles {
  constructor(
    _hgsNo: string,
    _firstName: string,
    _lastName: string,
    _balance: number
  ) {
    super(_hgsNo, _firstName, _lastName, VehicleTypes.BUS, _balance)
  }
}
