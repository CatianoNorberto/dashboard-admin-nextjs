import Link from "next/link";
import Image from "next/image";

import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";

import ViewImg from '../../assets/images/view.svg'
import DeleteImg from '../../assets/images/delete.svg'

import { DataTableContainer } from './style'
// import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {

  // TEST THE API

  // const queryClient = useQueryClient();
  // // const mutation = useMutation({
  // //   mutationFn: (id: number) => {
  // //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
  // //       method: "delete",
  // //     });
  // //   },
  // //   onSuccess: ()=>{
  // //     queryClient.invalidateQueries([`all${props.slug}`]);
  // //   }
  // // });

  const handleDelete = (id: number) => {
    //delete the item
    // mutation.mutate(id)
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link href={`/${props.slug}/${params.row.id}`}>
            <Image src={ViewImg} alt="" width={32} height={32}/>
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <Image src={DeleteImg} alt="" width={32} height={32}/>
          </div>
        </div>
      );
    },
  };

  return (
    <DataTableContainer className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </DataTableContainer>
  );
};

export default DataTable;
