export const env = {
  jwtSecret: process.env.JWT_SECRET!,
  passwordSalts: Number(process.env.PASSWORD_SALTS!),
}
