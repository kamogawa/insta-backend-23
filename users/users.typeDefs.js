import { gql } from "apollo-server";
// 스키마 동기화, 테이블에서 필요한 부분을 설정한다. 
export default gql`
  type User {
    id: String!
    firstName: String!
    lastName: String
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }
  type LoginResult {
    ok: Boolean!
    token: String
    error: String
  }
  type Mutation {
    createAccount(
      firstName: String!
      lastName: String
      username: String!
      email: String!
      password: String!
    ): User
    login(username: String!, password: String!): LoginResult!
  }
  type Query {
    seeProfile(username: String!): User
  }
`;