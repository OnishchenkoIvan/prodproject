import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

export default {
  title: "shared/AppLink",
  component: AppLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  theme: AppLinkTheme.PRIMARY,
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: "Primary",
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  theme: AppLinkTheme.SECONDARY,
};
export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: "Secondary",
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const Red = Template.bind({});
Red.args = {
  children: "Red",
  theme: AppLinkTheme.RED,
};
export const RedDark = Template.bind({});
RedDark.args = {
  children: "Red",
  theme: AppLinkTheme.RED,
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
