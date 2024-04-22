import { compare } from "bcrypt";

function comaprePassword(plain, hashed) {
  return compare(plain, hashed);
}

export {comaprePassword};
