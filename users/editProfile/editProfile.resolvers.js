import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../../client";

export default {
  Mutation: {
    editProfile: async (
      _,
      { firstName, lastName, username, email, password: newPassword },
      { loggedInUser }
    ) => {
      if (!loggedInUser) {
        return {
          ok: false,
          error: "ユーザー認証失敗",
        };
      }
      let hashedPassword = null;
      // 비밀번호가 포함되 있는경우 해쉬함수로 암호화
      if (newPassword) {
        hashedPassword = await bcrypt.hash(newPassword, 10);
      }
      // null, undefined이면 갱신하지 않음
      const updatedUser = await client.user.update({
        where: {
          id: loggedInUser.id,
        },
        data: {
          firstName,
          lastName,
          username,
          email,
          ...(hashedPassword && { password: hashedPassword }),
        },
      });

      if (updatedUser.id) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: "プロフィール更新失敗",
        };
      }
    }
  },
};