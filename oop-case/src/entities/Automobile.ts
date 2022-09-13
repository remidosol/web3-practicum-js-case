import { Vehicles } from './Vehicle'
import { VehicleTypes } from '../types/index'

/**
 * @class Automobile
 * 
 * @description Automobile class that extends Vehicles class
 */
export class Automobile extends Vehicles {
  constructor(
    _hgsNo: string,
    _firstName: string,
    _lastName: string,
    _balance: number
  ) {
    super(_hgsNo, _firstName, _lastName, VehicleTypes.AUTOMOBILE, _balance)
  }
}