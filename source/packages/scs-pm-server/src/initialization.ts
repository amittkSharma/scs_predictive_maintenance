import * as path from 'path'
import { config } from './config'
import { createDirectory, createFile, getCSVData, readFile } from './utils'

export function initialize() {
  createDirectory(config.app.homeDir, config.app.appDirectory)
  createDirectory(config.getAppsDirectory(), config.app.logsDirectory)
  createDirectory(config.getAppsDirectory(), config.app.machinesDirectory)
  createFile(
    config.getMachinesDirectory(),
    config.app.machinesFileName,
    JSON.stringify(readFile(config.rawData.path, config.rawData.machineDummyData, 'JSON'), null, 2),
  )
  createFile(
    config.getMachinesDirectory(),
    config.app.machineVitals,
    readFile(config.rawData.path, config.rawData.machineDummyVitals, 'CSV'),
  )
  createFile(
    config.getMachinesDirectory(),
    config.app.machineLogs,
    readFile(config.rawData.path, config.rawData.machineDummyLogs, 'CSV'),
  )
  // TODO: Read this data in the api call to get machine specific data
  getCSVData(path.join(config.getMachinesDirectory(), config.app.machineVitals), [
    'timestamp',
    'speed_desired',
    'ambient_temperature',
    'ambient_pressure',
    'speed',
    'temperature',
    'pressure',
    'machineID',
  ])
}
