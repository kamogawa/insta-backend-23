import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../../client";

export default {
  Mutation: {
    //로그인
    login: async (_, { username, password }) => {
      //유저 확인
      const user = await client.user.findFirst({ where: { username } });
      if (!user) {
        return {
          ok: false,
          error: "存在しないユーザーです。",
        };
      }
      //비밀번호 확인
      const passwordOk = await bcrypt.compare(password, user.password);
      if (!passwordOk) {
        return {
          ok: false,
          error: "パスワードが一致しません。",
        };
      }
      //로그인 성공 토큰 생성
      //JWT_SECRET는 비밀 외부에 알려져서는 안됨
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      return {
        ok: true,
        token,
      };
    },
  },
};