import 'react-native';
import React from 'react';
import { create } from 'react-test-renderer';

import App from '../App';


it('App Renders Correctly', () => {
  create(<App />);
});
