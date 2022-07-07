import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PinCode } from '../src';

export default {
  title: 'Pin Code',
  component: PinCode,
  argTypes: {
    invalidBorderColor: { control: 'color' },
    validBorderColor  : { control: 'color' },
  },
} as ComponentMeta<typeof PinCode>;

const Template: ComponentStory<typeof PinCode> = (args) => (
  <>
    <PinCode {...args} />
  </>
)

export const Default = Template.bind({});
Default.args = {
  length: 4,
}


export const Placeholder = Template.bind({});
Placeholder.args = {
  length: 4,
  placeholder: '🌹',
}


export const CompareValue = Template.bind({});
CompareValue.args = {
  length: 4,
  valueToValidate: '1234',
  validBorderColor: '#00ff00',
  invalidBorderColor: '#ff0000',
}

CompareValue.parameters = {
  docs: {
    description: {
      story: `Border color validation only applies when the **valueToValidate** property is sent`,
    },
  },
};


export const AutoFocus = Template.bind({});
AutoFocus.args = {
  length: 4,
  autoFocus: true,
}