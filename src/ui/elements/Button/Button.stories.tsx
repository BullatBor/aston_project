import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: "green",
    children: "Success",
  },
};

export const Danger: Story = {
  args: {
    variant: "red",
    children: "Delete",
  },
};

export const Primary: Story = {
  args: {
    variant: "blue",
    children: "Ok",
  },
};
