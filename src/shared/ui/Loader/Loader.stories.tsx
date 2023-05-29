import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { Loader } from "./Loader";

export default {
  title: "widget/Loader",
  component: Loader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
