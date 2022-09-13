import { Vehicle } from './Vehicle'

export interface BoothRecordType extends Vehicle { id: string } 
export type User = Omit<Vehicle, 'date'>

export interface RecordType {
    users: User[],
    records: BoothRecordType[]
}