export enum VehicleTypes {
  AUTOMOBILE = 'Automobile',
  MINIBUS = 'Minibus',
  BUS = 'Bus',
}

export enum Tolls {
  AUTOMOBILE = 8.25,
  MINIBUS = 10.75,
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
