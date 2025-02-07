if (
  !(
    process.env.DO_APP_ID &&
    process.env.DO_TOKEN
  )
) {
  throw new Error(
    "Missing DigitalOcean environment variables. Please check `.env.example` file."
  );
}

export const CONFIG = {
  PORT: process.env.PORT || "1337",
  APP_URL: process.env.APP_URL || "http://localhost:1337",
  DIGITALOCEAN: {
    APP_ID: process.env.DO_APP_ID,
    TOKEN: process.env.DO_TOKEN,
  },
} as const;