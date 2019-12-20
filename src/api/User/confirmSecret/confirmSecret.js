import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutatino: {
    confirmSecret: async (_.args) => {
      const { email, secret } = args;
      const user = await prisma.user({ email });
      if (user.loginSecret === secret) {
        // JWT
        return "TOKEN";
      } else {
        throw Error("Wrong email/secret convination");
      }
    }
  }
};
