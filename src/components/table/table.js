import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'img', headerName: 'Image', width: 150, renderCell: (params) => {
                            return (
                                <div>
                                    {params.row.img}
                                 </div>
                            )}},
  {
    field: 'source',
    headerName: 'Source',
    width: 150,

  },
  {
    field: 'author',
    headerName: 'Author',
    width: 250,

  },
  {
    field: 'title',
    headerName: 'Title',
    width: 800,

  },
  {
    field: 'date',
    headerName: 'Date',
    type: 'date',
    width: 110,
  },
  {
    field: 'url',
    headerName: 'URL',
    type: 'number',
    width: 150,
    renderCell: (params) => {
                              return (
                                  <div style={{textAlign:"left"}}>
                                      <a href={params.row.url} style={{fontSize:"12px", overflowWrap:"normal", textAlign:"left" ,display:"flex", alignItems:"center"}}>Article Link</a>
                                   </div>
                              )}
  },

];



export default function DataTable({rows}) {
  return (

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowHeight={40}
        disableSelectionOnClick
        autoHeight={true}

      />

  );
}
