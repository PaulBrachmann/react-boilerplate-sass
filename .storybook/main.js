module.exports = {
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-links/register",
    "@storybook/addon-viewport/register",
  ],
  stories: ["../src/**/*.stories.[tj]sx"],
};
