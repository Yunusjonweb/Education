import * as React from 'react';
import { DataGrid, GridToolbar, GridEventListener } from '@mui/x-data-grid';

interface TableGridProps {
  rows: any[];
  columns: any[];
  openUserDetails?: (data: any) => void;
}

function Table({ rows, columns, openUserDetails = () => {} }: TableGridProps) {
  const [message, setMessage] = React.useState('');
  return (
    <div style={{ width: '100%', height: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={openUserDetails}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </div>
  );
}

export default Table;
