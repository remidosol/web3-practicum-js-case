import { faker } from '@faker-js/faker'
import { VehicleTypes, RecordType, BoothRecordType, Tolls } from './types/index'
import { writeFileSync } from 'fs'
import path from 'path'
import { Logger } from './utils/index'

const { date, datatype, random, name } = faker

const vehicleTypes = [
  VehicleTypes.AUTOMOBILE,
  VehicleTypes.BUS,
  VehicleTypes.MINIBUS,
]

const dummy: RecordType = {
  records: [],
  users: [],
}

try {
  for (let i = 0; i < 15; i++) {
    dummy.users.push({
      hgsNo: random.numeric(10, { allowLeadingZeros: true }),
      firstName: name.firstName(
        datatype.number({ min: 0, max: 1 }) === 0 ? 'male' : 'female'
      ),
      lastName: name.lastName(
        datatype.number({ min: 0, max: 1 }) === 0 ? 'male' : 'female'
      ),
      balance: datatype.number({ min: 0, max: 100 }),
      typeOfVehicle: vehicleTypes[datatype.number({ min: 0, max: 2 })],
    })
  }

  for (let i = 0; i < 25; i++) {
    const user = dummy.users[datatype.number({ min: 0, max: 14 })]
    let newBalance: number

    switch (user.typeOfVehicle) {
      case VehicleTypes.AUTOMOBILE:
        newBalance = user.balance - +Tolls.AUTOMOBILE
        break
      case VehicleTypes.BUS:
        newBalance = user.balance - +Tolls.BUS
        break
      case VehicleTypes.MINIBUS:
        newBalance = user.balance - +Tolls.MINIBUS
        break
    }

    const record: BoothRecordType = {
      id: datatype.uuid(),
      ...user,
      balance: newBalance,
      date: date.recent(12, new Date(Date.UTC(2022, 8, 1, 0, 0, 0))),
    }

    dummy.users[dummy.users.indexOf(user)] = { ...user, balance: newBalance }

    dummy.records.push(record)
  }

  writeFileSync(path.join(__dirname, './records.json'), JSON.stringify(dummy), {
    encoding: 'utf-8',
  })

  Logger.info('Dummy data have been created!')
} catch (err) {
  Logger.error('Something went wrong!' + err)
}
