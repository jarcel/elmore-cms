import type { Core } from "@strapi/strapi";
import { getDigitalOceanAuth } from "./getDigitalOceanAuth";
import { CONFIG } from "../config";

const name = "DigitalOcean Deployment";

export const setupDigitalOceanWebhook = async (strapi: Core.Strapi) => {
  const webhookStore =
    "webhookStore" in strapi
      ? strapi.webhookStore // v4
      : await strapi.get("webhookStore"); // v5

  try {
    const webhooks = await webhookStore.findWebhooks();
    const oldWebhook = webhooks.find((webhook) => webhook.name === name);
    if (oldWebhook) {
      await webhookStore.deleteWebhook(oldWebhook.id);
    }
  } catch (error) {
    console.error(`Unable to prepare "${name}" webhook`, error);
  }

  try {
    await webhookStore.createWebhook({
      id: "",
      events: [],
      headers: {
        "x-authorization": getDigitalOceanAuth(),
      },
      isEnabled: true,
      name,
      url: `${CONFIG.APP_URL}/api/digitalocean`,
    });
  } catch (error) {
    console.error(`Unable to create "${name}" webhook`, error);
  }
};