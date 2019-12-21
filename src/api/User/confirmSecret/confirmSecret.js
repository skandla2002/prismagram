import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
  Mutatino: {
    confirmSecret: async (_, args) => {
      const { email, secret } = args;
      const user = await prisma.user({ email });
      if (user.loginSecret === secret) {
        const token = generateToken(user.id);
        // JWT
        return "TOKEN";
      } else {
        throw Error("Wrong email/secret convination");
      }
    }
  }
};
