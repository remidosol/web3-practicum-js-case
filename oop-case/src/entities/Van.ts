import { Vehicles } from './Vehicle'
import { VehicleTypes } from '../types/index'

/**
 * @class Van
 *
 * @description Van class that extends Vehicles class
 */
export class Van extends Vehicles {
  constructor(
    _hgsNo: string,
    _firstName: string,
    _lastName: string,
    _balance: number
  ) {
    super(_hgsNo, _firstName, _lastName, VehicleTypes.VAN, _balance)
  }
}
