import type { Meta, StoryObj } from '@storybook/react';

import { Input } from 'ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#757370',
        },
      ],
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { onChange: { action: 'changed' } },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    uiSize: Input.size.MEDIUM,
    variant: Input.variant.DEFAULT,
  },
};

export const Error: Story = {
  args: {
    uiSize: Input.size.MEDIUM,
    variant: Input.variant.ERROR,
  },
};

export const TransparentLight: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    uiSize: Input.size.MEDIUM,
    variant: Input.variant.TRANSPARENT_LIGHT,
  },
};

export const Large: Story = {
  args: {
    uiSize: Input.size.LARGE,
  },
};

export const Medium: Story = {
  args: {
    uiSize: Input.size.MEDIUM,
  },
};

export const Small: Story = {
  args: {
    uiSize: Input.size.SMALL,
  },
};
