import { Context, Next } from "koa";
import { getDigitalOceanAuth } from "../../../util/getDigitalOceanAuth";
import { CONFIG } from "../../../config";

export default {
  post: async (ctx: Context, next: Next) => {
    const auth = ctx.request.headers["x-authorization"];

    if (auth !== getDigitalOceanAuth()) {
      ctx.response.status = 403;
      return next();
    }

    const headers = new Headers({
      Accept: "application/json",
      Authorization: auth,
    });

    const body = {
      force_build: true,
    };

    try {
      await fetch(`https://api.digitalocean.com/v2/apps/${CONFIG.DIGITALOCEAN.APP_ID}/deployments`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      ctx.response.status = 200;
      return next();
    } catch (err) {
      ctx.body = err;
      ctx.response.status = 500;
      return next();
    }
  },
};