import gql from 'graphql-tag'

export const getAllMachineModelInformationQuery = gql`
  query danceMetaData {
    queryResult @rest(type: "MachineModelInformation", path: "machines") {
      identifier
      name
      givenName
      model
      manufactureYear
      manufacturerName
      purchaseDate
      inductionDate
      departmentName
      description
      operatingManualLink
    }
  }
`