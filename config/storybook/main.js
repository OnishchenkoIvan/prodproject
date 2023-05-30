const config = {
  framework: {
    name: "@storybook/react-webpack5",
    options: { fastRefresh: true },
  },
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  features: {
    storyStoreV7: false,
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  core: {
    builder: {
      name: "@storybook/builder-webpack5",
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
};
export default config;
