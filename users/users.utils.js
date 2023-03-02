import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async (token) => {
  try {
    if (!token) {
      return null;
    }
    //토큰을 디코드 유저정보를 취득 
    //토큰은 누구나 내용을 확인 할수 있음. 변경되지 않았는지 확인
    const { id } = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await client.user.findUnique({ where: { id } });
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};