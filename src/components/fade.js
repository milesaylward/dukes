import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

export const Fade = ({ children, ...props }) => (
 <CSSTransition
   {...props}
   timeout={500}
   classNames="fade"
 >
  {children}
 </CSSTransition>
);
