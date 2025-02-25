/**
 * @Author: yueyue 1045713422@qq.com
 * @Date: 2025-02-24 16:44:17
 * @LastEditors: yueyue 1045713422@qq.com
 * @LastEditTime: 2025-02-25 19:25:32
 * @FilePath: /i18n-xlsx-to-json/src/utils/XlsxToJson.js
 * @Description:
 * @
 * @Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */

import * as XLSX from 'xlsx';

// 解析 key 为嵌套 JSON 结构的函数
const setNestedValue = (obj, path, value) => {
    const keys = path
        .replace(/\n/g, '')
        .replace(/\['|\']/g, '.')
        .split('.');
    let current = obj;

    keys.forEach((key, index) => {
        if (!key) return;
        if (index === keys.length - 1) {
            current[key] = value;
        } else {
            current[key] = current[key] || {};
            current = current[key];
        }
    });
};

export const parseXlsxToJson = (file, callback) => {
    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = e => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0]; // 读取第一个 sheet
        const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });

        const headers = sheet[0]; // 第一行是表头

        const keyIndex = headers.indexOf('key这列由开发填写');

        const langIndices = headers.slice(3).map((lang, i) => ({ lang, index: i + 3 }));

        const result = {};

        sheet.slice(1).forEach(row => {
            const key = row[keyIndex];

            if (!key) return;
            langIndices.forEach(({ lang, index }) => {
                if (!result[lang]) result[lang] = {};
                setNestedValue(result[lang], key, row[index] || '');
            });
        });

        callback(result);
    };
};
