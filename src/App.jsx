/*
 * @Author: Cola 1045713422@qq.com
 * @Date: 2024-12-19 10:14:56
 * @LastEditors: Cola 1045713422@qq.com
 * @LastEditTime: 2024-12-19 10:46:51
 * @FilePath: /i18n-xlsx-to-json/src/App.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { Suspense, useMemo, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from '@/router/index.jsx';

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<h2>Loading..</h2>}>
                <Routes />
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
