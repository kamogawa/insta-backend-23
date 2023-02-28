import client from "../client";

export default {
  Query: {
    seeProfile: async (_, { username }) => {
      //findUnique는 Unique로 설정된 필드만 검색 한다.
      return await client.user.findUnique({
        where: {
          username
        },
      });
    }
  },
};