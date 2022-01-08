import * as fs from 'fs'
import * as path from 'path'
import { log } from './logger'
import { validateFileExistence } from './validate-file'

export function createFile(destinationFolder: string, fileName: string, data: string): void {
  const filePath = path.join(destinationFolder, fileName)
  if (!validateFileExistence(filePath)) {
    log.info(`Filename ${fileName} will be created at location: ${filePath}`)
    fs.writeFileSync(filePath, data)
  } else {
    log.info(`FileName ${fileName} is already present at location: ${filePath}`)
  }
}
