/*
 * @Author: Cola 1045713422@qq.com
 * @Date: 2024-12-19 10:37:41
 * @LastEditors: Cola 1045713422@qq.com
 * @LastEditTime: 2024-12-19 11:14:06
 * @FilePath: /i18n-xlsx-to-json/src/pages/Home/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <Button
                size="large"
                color="default"
                variant="filled"
                onClick={() => navigate('/official')}
            >
                【up3dtech.com】xlsx to json
            </Button>
        </div>
    );
}
