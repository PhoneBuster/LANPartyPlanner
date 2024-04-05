import { usePasswordCrypt } from "~/composables/usePasswordCrypt";
import { useUrlGenerator } from "~/composables/useUrlGenerator";

const { cryptPw } = usePasswordCrypt();
const urlGenerator = useUrlGenerator();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body) {
    throw createError({
      statusCode: 400,
      statusMessage: "No username and password provided to create a user",
    });
  }

  if (!body.username || !body.password) {
    await sendRedirect(event, urlGenerator.noAccessUrl);
  }
  console.log(body);
  const cryptedPassword = await cryptPw(body.password);
  const userStorage = useStorage("user");
  const data = {
    username: body.username,
    password: cryptedPassword,
  };

  await userStorage.setItem(body.username, data);

  setResponseStatus(event, 201, "User created!");
});
