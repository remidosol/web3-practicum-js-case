import { RecordType, Tolls, VehicleTypes } from '../types/index'
import { readFileSync } from 'fs'
import path from 'path'
import { Logger } from '../utils/index'

/**
 * @class Management
 *
 * @description Created for calculating daily booth tolls
 */
export class Management {
  static calculateBoothDayBalance = (date: string) => {
    let totalBalance = 0
    const initDate = new Date(date)

    const day = initDate.getDay()
    const month = initDate.getMonth()
    const year = initDate.getFullYear()

    const fileJSON: RecordType = JSON.parse(
      readFileSync(path.join(__dirname, '../records.json'), {
        encoding: 'utf-8',
      })
    )

    for (const rec of fileJSON.records) {
      const initRecordDate = new Date(rec.date)

      const recordDay = initRecordDate.getDay()
      const recordMonth = initRecordDate.getMonth()
      const recordYear = initRecordDate.getFullYear()
      if (recordDay === day && recordMonth === month && recordYear === year) {
        switch (rec.typeOfVehicle) {
          case VehicleTypes.AUTOMOBILE:
            totalBalance += +Tolls.AUTOMOBILE
            break
          case VehicleTypes.BUS:
            totalBalance += +Tolls.BUS
            break
          case VehicleTypes.VAN:
            totalBalance += +Tolls.VAN
            break
        }
      }
    }

    Logger.info(
      `The total balance of the date(${initDate.toLocaleDateString('tr-TR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}) is ${totalBalance}`
    )
  }
}
