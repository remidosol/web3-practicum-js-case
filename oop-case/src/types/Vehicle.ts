export enum VehicleTypes {
  AUTOMOBILE = 'Automobile',
  VAN = 'Van',
  BUS = 'Bus',
}

export enum Tolls {
  AUTOMOBILE = 8.25,
  VAN = 10.75,
  BUS = 23.25,
}

export interface Vehicle {
  hgsNo: string
  firstName: string
  lastName: string
  typeOfVehicle: VehicleTypes
  date: Date
  balance: number
}
