import { Vehicle, Tolls, RecordType } from '../types/index'
import { Vehicles, Automobile, Bus, Minibus } from './index'
import { TypeCheckUtils, Logger } from '../utils/index'
import { readFileSync, writeFileSync } from 'fs'
import { faker } from '@faker-js/faker'

class HighwayTollBooth {
  private constructor() {
    this._applyToll = (hgsNo: string) => {
      const dataJSON: RecordType = JSON.parse(
        readFileSync(Vehicles.recordArrayPath, {
          encoding: 'utf-8',
        })
      )

      const user = dataJSON.users.find((user) => user.hgsNo === hgsNo)

      Logger.info('First User balance: ' + user?.balance)

      const vehicle = <Vehicle>(
        dataJSON.records.find((rec) => rec.hgsNo === hgsNo)
      )

      if (TypeCheckUtils.isAutomobile(vehicle)) {
        if (user) {
          if (user.balance >= Tolls.AUTOMOBILE) {
            user.balance -= Tolls.AUTOMOBILE
            dataJSON.users[dataJSON.users.indexOf(user)].balance -=
              Tolls.AUTOMOBILE

            const newRecord = new Automobile(
              user.hgsNo,
              user.firstName,
              user.lastName,
              user.balance
            )

            dataJSON.records.push({
              ...newRecord,
              id: faker.datatype.uuid(),
            })

            writeFileSync(Vehicles.recordArrayPath, JSON.stringify(dataJSON))
            Logger.info('Payment has been completed.')
            Logger.info(JSON.stringify(user))
          } else {
            Logger.error('Insufficient Balance: ' + user.balance)
          }
        }
      } else if (TypeCheckUtils.isBus(vehicle)) {
        if (user) {
          if (user.balance >= Tolls.BUS) {
            user.balance -= Tolls.BUS
            dataJSON.users[dataJSON.users.indexOf(user)].balance -= Tolls.BUS

            const newRecord = new Bus(
              user.hgsNo,
              user.firstName,
              user.lastName,
              user.balance
            )

            dataJSON.records.push({
              ...newRecord,
              id: faker.datatype.uuid(),
            })

            writeFileSync(Vehicles.recordArrayPath, JSON.stringify(dataJSON))
            Logger.info('Payment has been completed.')
            Logger.info(JSON.stringify(user))
          } else {
            Logger.error('Insufficient Balance: ' + user.balance)
          }
        }
      } else if (TypeCheckUtils.isVan(vehicle)) {
        if (user) {
          if (user.balance >= Tolls.MINIBUS) {
            user.balance -= Tolls.MINIBUS
            dataJSON.users[dataJSON.users.indexOf(user)].balance -= Tolls.MINIBUS

            const newRecord = new Minibus(
              user.hgsNo,
              user.firstName,
              user.lastName,
              user.balance
            )

            dataJSON.records.push({
              ...newRecord,
              id: faker.datatype.uuid(),
            })

            writeFileSync(Vehicles.recordArrayPath, JSON.stringify(dataJSON))
            Logger.info('Payment has been completed.')
            Logger.info(JSON.stringify(user))
          } else {
            Logger.error('Insufficient Balance: ' + user.balance)
          }
        }
      }

      Logger.info('Second User balance: ' + user?.balance)
    }
  }

  private _applyToll: (hgsNo: string) => void

  static _instance: Readonly<HighwayTollBooth>

  static getInstance() {
    if (this._instance) {
      return this._instance
    }

    this._instance = new HighwayTollBooth()
    return this._instance
  }

  public applyToll = () => this._applyToll
}

HighwayTollBooth.getInstance()

export const applyToll = HighwayTollBooth.getInstance().applyToll()
