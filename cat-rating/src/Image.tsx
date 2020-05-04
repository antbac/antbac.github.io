import React from 'react';

export default (props: any): JSX.Element | null => (props.src ? <img src={props.src} alt='' /> : null);
