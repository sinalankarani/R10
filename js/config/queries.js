import {gql} from 'apollo-boost';

export const ALL_SESSIONS = gql`
  {
    allSessions {
      id
      title
      description
      startTime
      speaker {
        id
        name
        bio
        image
        session {
          id
        }
        url
      }
      location
    }
  }
`;

export const SINGLE_SESSION = gql`
  query Session($id: ID!) {
    Session(id: $id) {
      id
      description
      location
      speaker {
        id
        image
        name
      }
      startTime
      title
    }
  }
`;

export const CODE_OF_CONDUCTS = gql`
  {
    allConducts {
      id
      title
      description
      order
    }
  }
`;

export const SPEAKER = gql`
  query Speaker($id: ID!) {
    Speaker(id: $id) {
      id
      name
      bio
      image
      url
    }
  }
`;
