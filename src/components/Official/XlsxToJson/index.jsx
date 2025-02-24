import React, { useState } from 'react';
import { parseXlsxToJson } from '@/utils/XlsxToJson.js';

const XLSXToJSON = () => {
    const [jsonData, setJsonData] = useState(null);

    const handleFileUpload = event => {
        const file = event.target.files[0];
        if (!file) return;

        parseXlsxToJson(file, data => {
            setJsonData(data);
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>XLSX to JSON Converter</h1>
            <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
            {jsonData && (
                <div>
                    <h2>Converted JSON:</h2>
                    <pre
                        style={{
                            background: '#f4f4f4',
                            border: '1px solid #ddd',
                            padding: '10px',
                            borderRadius: '4px',
                            overflowX: 'auto'
                        }}
                    >
                        {JSON.stringify(jsonData, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default XLSXToJSON;
