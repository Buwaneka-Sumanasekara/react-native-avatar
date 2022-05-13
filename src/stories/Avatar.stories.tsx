
   
import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../components/Avatar';

storiesOf('Avatar', module)
  .add('default',
    () => <Avatar />
  )
  .add('loading',
    () => <Avatar loading />
  )
