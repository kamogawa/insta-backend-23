// graphql-tools: 여러 폴더typeDefs,Resolver를 하나로 묶어줌
import {
  loadFilesSync,
  makeExecutableSchema,
  mergeResolvers,
  mergeTypeDefs,
} from "graphql-tools";

// typeDefs를 불러옴, 패턴 지정 가능
const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
// Resolver를 불러옴
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.js`);

const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;