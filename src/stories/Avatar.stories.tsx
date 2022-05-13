// Avatar.stories.js|jsx|ts|tsx

import Avatar from '../components/Avatar';
import Attributes from '../constant/Attributes';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Avatar',
  component: Avatar,
};

const Template = args => {
  return (
      <Avatar
        {...args}
      />
  )
}

export const Default = Template.bind({});
Default.args={
  [Attributes.TITLE]:'Hello',
  [Attributes.SIZE]:20
}

Default.argTypes = {
  [Attributes.TITLE]: {
    name: Attributes.TITLE,
    type: { name: 'string' },
    description: Attributes.TITLE,
    defaultValue: 'Hello',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: false },
    },
    control: 'text',
  },
  [Attributes.SIZE]: {
    name: Attributes.SIZE,
    type: { name: 'number' },
    description: Attributes.SIZE,
    defaultValue: 20,
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: false },
    },
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 1,
    },
  },
}




export const WithImage = Template.bind({});
WithImage.args = {
  ...Default.args,
  [Attributes.SOURCE]:{uri:"https://picsum.photos/200"}
};

export const CustomTitleStyle = Template.bind({});
CustomTitleStyle.args = {
  ...Default.args,
  [Attributes.TITLE_STYLE]:{color:"red"}
};
