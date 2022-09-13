import { Vehicles, applyToll, Management } from './entities/index'
import { RecordType } from './types/index'
import { readFileSync } from 'fs'

const data: RecordType = JSON.parse(
  readFileSync(Vehicles.recordArrayPath, {
    encoding: 'utf-8',
  })
) // readt data from records.json

applyToll(data.users[11].hgsNo) // first chose a hgsNo in records.json then apply toll

Management.calculateBoothDayBalance('2022-08-29T07:08:00.657Z')
