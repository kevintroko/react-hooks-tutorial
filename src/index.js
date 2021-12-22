import React from 'react';
import ReactDom from 'react-dom';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

ReactDom.render(
    <CounterWithCustomHook />,
    document.getElementById('root')
);
