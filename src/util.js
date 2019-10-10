import React from 'react';

const contextTestOne={
    name:'chen',
    length:22,
};

export const CountContext=React.createContext(contextTestOne.name)