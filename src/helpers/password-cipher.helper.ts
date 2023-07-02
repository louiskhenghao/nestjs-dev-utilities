import * as bcrypt from "bcrypt";

export class PasswordCipher {
  static hash(plaintext: string, SALT_ROUNDS = 10): Promise<string> {
    return bcrypt.hash(plaintext, SALT_ROUNDS);
  }

  static check(plaintext: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plaintext, hash);
  }
}

export default PasswordCipher;
