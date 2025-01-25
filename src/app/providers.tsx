// https://stackoverflow.com/questions/77400272/setting-up-redux-toolkit-with-next-js-14-0-1
'use client';

import { Provider } from 'react-redux';
import { rootStore } from "./store/root.store";

export const Providers = ({ children } : { children: React.ReactNode }) => {
    return (
        <Provider store={rootStore}>{children}</Provider>
    );
};
