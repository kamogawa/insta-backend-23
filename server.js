import "dotenv/config";
import { ApolloServer } from "apollo-server";
import schema from "./schema";
import { getUser } from "./users/users.utils";

const PORT = process.env.PORT;
const server = new ApolloServer({
  schema,
  // 모든 리졸버에서 접근 할수 있는 정보, 리졸버 3번째 파라메터
  context: async ({ req }) => {
    return {
      loggedInUser: await getUser(req.headers.token),
    };
  },
});

server
  .listen(PORT)
  .then(() => console.log(`Server is running on http://localhost:${PORT}/`));