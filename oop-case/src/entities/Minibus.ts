import { Vehicles } from './Vehicle'
import { VehicleTypes } from '../types/index'

/**
 * @class Minibus
 *
 * @description Minibus class that extends Vehicles class
 */
export class Minibus extends Vehicles {
  constructor(
    _hgsNo: string,
    _firstName: string,
    _lastName: string,
    _balance: number
  ) {
    super(_hgsNo, _firstName, _lastName, VehicleTypes.MINIBUS, _balance)
  }
}
