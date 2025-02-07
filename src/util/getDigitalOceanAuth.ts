import { CONFIG } from "../config"

export const getDigitalOceanAuth = () => `Bearer ${CONFIG.DIGITALOCEAN.TOKEN}`;