import { Automobile, Bus, Van } from '../entities/index'
import { Vehicle, VehicleTypes } from '../types/index'

export class TypeCheckUtils {
  static isAutomobile = <(_vehicle: Vehicle) => _vehicle is Automobile>(
    ((_vehicle: Vehicle) =>
      'typeOfVehicle' in _vehicle &&
      _vehicle.typeOfVehicle === VehicleTypes.AUTOMOBILE)
  )

  static isBus = <(_vehicle: Vehicle) => _vehicle is Bus>(
    ((_vehicle: Vehicle) =>
      'typeOfVehicle' in _vehicle &&
      _vehicle.typeOfVehicle === VehicleTypes.BUS)
  )

  static isVan = <(_vehicle: Vehicle) => _vehicle is Van>(
    ((_vehicle: Vehicle) =>
      'typeOfVehicle' in _vehicle &&
      _vehicle.typeOfVehicle === VehicleTypes.VAN)
  )
}
