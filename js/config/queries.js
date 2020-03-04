import {gql} from 'apollo-boost';

export const ALL_SESSIONS = gql`
  {
    allSessions {
      id
      description
      title
      startTime
      speaker {
        id
        bio
        image
        name
        session {
          id
        }
        url
      }
      location
    }
  }
`;
