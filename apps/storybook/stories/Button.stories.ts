import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: Button.variant.PRIMARY,
    uiSize: Button.size.MEDIUM,
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    uiSize: Button.size.MEDIUM,
    variant: Button.variant.SECONDARY,
    children: 'Button',
  },
};

export const Error: Story = {
  args: {
    uiSize: Button.size.MEDIUM,
    variant: Button.variant.ERROR,
    children: 'Button',
  },
};

export const Success: Story = {
  args: {
    uiSize: Button.size.MEDIUM,
    variant: Button.variant.SUCCESS,
    children: 'Button',
  },
};

export const MEDIUM: Story = {
  args: {
    uiSize: Button.size.MEDIUM,
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    uiSize: Button.size.SMALL,
    children: 'Button',
  },
};
