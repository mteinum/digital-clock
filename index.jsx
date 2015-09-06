'use strict';

import React from 'react';
import Clock from './clock';

setInterval(function(){
  React.render(
    <Clock date={new Date()} />,
    document.getElementById('content'));
  }, 500);
