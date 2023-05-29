import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import AboutPage from "./AboutPage";

export default {
  title: "pages/AboutPage",
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
} as Meta<typeof AboutPage>;

const Template: StoryFn<typeof AboutPage> = (args: {}) => <AboutPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
