import { DocumentNode } from 'graphql'
import gql from 'graphql-tag'
export function getMachineVitalsByMachineId(machineId: string): DocumentNode {
  const query = gql(`
    query machineVitals {
      queryResult @rest(type: "MachineVitalsResponse", path: "machineVitals?machineId=${machineId}") {
        machineVitals
      }
    }
  `)
  return query
}
