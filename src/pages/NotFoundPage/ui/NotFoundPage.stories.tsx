import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { NotFoundPage } from "pages/NotFoundPage";

export default {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
} as Meta<typeof NotFoundPage>;

const Template: StoryFn<typeof NotFoundPage> = (args: {}) => <NotFoundPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
