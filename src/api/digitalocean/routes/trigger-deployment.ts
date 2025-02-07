export default {
  routes: [
    {
      method: "POST",
      path: "/digitalocean",
      handler: "trigger-deployment.post",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};