import { gql } from "apollo-server";

// model에서 생성한 스키마 정보를 설정해줘야 함
// prisma 와 graphql의 필수 설정은 서로 반대: graphql 필수 설정 필요, prisma 필수 설정 불필요, 기본 필수로 지정됨
export default gql`
  type Movie {
    id: Int!
    title: String!
    year: Int!
    genre: String
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    movies: [Movie]
    movie(id: Int!): Movie
  }
  type Mutation {
    createMovie(title: String!, year: Int!, genre: String): Movie
    deleteMovie(id: Int!): Boolean
    updateMovie(id: Int!, year: Int, title: String): Movie
  }
`;