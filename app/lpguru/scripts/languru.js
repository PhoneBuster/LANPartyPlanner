import crypto from "crypto";
import fs from "node:fs";

const webApiKeyPath = process.env.WEB_API_KEY_FILE || "";
let webApiKey = (await fs.promises.readFile(webApiKeyPath, "utf-8")) || "";
webApiKey = webApiKey.replaceAll("\r\n", "");
webApiKey = webApiKey.replaceAll("\n", "");

const args = process.argv;
if (args.length === 2 || args.length === 3) {
  console.info(
    "Please use one of the arguments : [ user create <name> <password> ]",
  );
  process.exit(127);
}

if (args[2].toLowerCase() === "user" && args[3].toLowerCase() === "create") {
  if (args.length !== 6) {
    console.info("You must provide username and password!!!");
    process.exit(128);
  }

  const username = args[4];
  const plainTextPassword = args[5];

  const encryptedPw = getPassword(plainTextPassword);
  const createUserData = {
    username: username,
    password: encryptedPw,
  };

  const response = await fetch("http://localhost:3000/api/user/create", {
    method: "POST",
    headers: {
      "x-api-key": webApiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(createUserData),
  });

  console.log(response.status, response.statusText);
}

if (args[2].toLowerCase() === "user" && args[3].toLowerCase() === "remove") {
  if (args.length < 5) {
    console.info("You must provide username!!!");
    process.exit(128);
  }

  const username = args[4];

  const removeUserData = {
    username,
  };

  const response = await fetch("http://localhost:3000/api/user/remove", {
    method: "DELETE",
    headers: {
      "x-api-key": webApiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(removeUserData),
  });

  console.log(response.status, response.statusText);
}

function getPassword(plainTextPassword) {
  const hashValue = crypto
    .createHmac("sha256", plainTextPassword)
    .update("You dont know what i want")
    .digest("hex");

  return hashValue;
}
