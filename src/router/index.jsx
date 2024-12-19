/*
 * @Author: Cola 1045713422@qq.com
 * @Date: 2024-12-19 10:35:51
 * @LastEditors: Cola 1045713422@qq.com
 * @LastEditTime: 2024-12-19 10:47:17
 * @FilePath: /i18n-xlsx-to-json/src/router/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { useEffect } from 'react';
import { useLocation, useRoutes, useNavigate, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home/index.jsx'));
const Official = lazy(() => import('@/pages/Official/index.jsx'));

const routes = [
    {
        path: '/',
        element: <Navigate to="/home" />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/official',
        element: <Official />
    }
];

export default function RouterConfig() {
    return useRoutes(routes);
}
