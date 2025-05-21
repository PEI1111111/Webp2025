import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '編號', width: 90 },
  { field: 'title', headerName: '名稱', width: 300 },
  { field: 'location', headerName: '地點', width: 200 },
  { field: 'price', headerName: '票價', width: 150 }
];

function App() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
      .then(res => res.json())
      .then(data => {
        const mappedData = data.map((item, index) => ({
          id: index + 1,
          title: item.title || '無資料',
          location: item.showInfo?.[0]?.location || '無資料',
          price: item.showInfo?.[0]?.price || '無資料'
        }));
        setRows(mappedData);
      });
  }, []);

  return (
    <div style={{ height: 600, width: '100%' }}>
      <h2>觀光展覽資訊</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}

export default App;
