import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './membership.styles.scss';

const Membership = () => (
  <div className='membership'>
    <SignIn />
    <SignUp />
  </div>
);

export default Membership;
