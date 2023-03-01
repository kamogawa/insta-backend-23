import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    //유저 생성
    createAccount: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      try {
        // 같은 이름의 username과 email이 존재하는지 확인
        const existingUser = await client.user.findFirst({
          where: {
            //AND, OR, NOT
            OR: [
              {
                username,
              },
              {
                email,
              },
            ],
          },
        });
        if (existingUser) {
          throw new Error("emailまたはユーザー名が既に存在します。");
        }
        // 비밀번호 암호화, salt, pepper 사용 이유 레인보우 테이블 공격에 대비 
        // 유저 저장 
        const hashedPassword = await bcrypt.hash(password, 10);
        return client.user.create({
          data: {
            username,
            email,
            firstName,
            lastName,
            password: hashedPassword,
          },
        });
      } catch (error) {
        return error;
      }
    },
  },
};