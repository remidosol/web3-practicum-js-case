import { Vehicle, VehicleTypes } from '../types/index'
import path from 'path'

/**
 * @class Vehicles
 *
 * @description Vehicles class that implements Vehicle interface
 */
export class Vehicles implements Vehicle {
  constructor(
    _hgsNo: string,
    _firstName: string,
    _lastName: string,
    _typeOfVehicle: VehicleTypes,
    _balance: number
  ) {
    this.hgsNo = _hgsNo
    this.firstName = _firstName
    this.lastName = _lastName
    this.typeOfVehicle = _typeOfVehicle
    this.date = new Date()
    this.balance = _balance
  }

  hgsNo: string
  firstName: string
  lastName: string
  typeOfVehicle: VehicleTypes
  date: Date
  balance: number

  static recordArrayPath = path.join(__dirname, '../records.json')
}
