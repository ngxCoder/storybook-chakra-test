import { Story, Meta } from '@storybook/react';
import { SharedHeader, SharedHeaderProps } from './shared-header';

export default {
  component: SharedHeader,
  title: 'SharedHeader',
} as Meta;

const Template: Story<SharedHeaderProps> = (args) => <SharedHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
