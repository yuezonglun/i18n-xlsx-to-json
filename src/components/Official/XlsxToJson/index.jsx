import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const XLSXToJSON = () => {
    const [jsonData, setJsonData] = useState(null);

    const handleFileUpload = event => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = e => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(sheet, { defval: '' });

            setJsonData(json);
        };

        reader.readAsArrayBuffer(file);
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
