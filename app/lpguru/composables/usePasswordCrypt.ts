import crypto from "crypto";

export const usePasswordCrypt = () => {
  async function cryptPw(plainTextPassword: string): Promise<string> {
    return await new Promise((resolve) => {
      const hashValue = crypto
        .createHmac("sha256", plainTextPassword)
        .update("You dont know what i want")
        .digest("hex");

      resolve(hashValue);
    });
  }
  return { cryptPw };
};
