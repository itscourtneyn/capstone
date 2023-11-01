import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [

    { field: 'title' , headerName: "Title", flex: 1, 
    renderCell: (params) => {
        return (
            <div style={{ whiteSpace: 'normal' }}>
                {params.value}
            </div>
        );
    }},
    { field: 'contributor', headerName: "Contributor", flex: 1, 
    renderCell: (params) => {
        return (
            <div style={{ whiteSpace: 'normal' }}>
                {params.value}
            </div>
        );
    }},
    { 
        field: 'ingredients', 
        headerName: "Ingredients", 
        flex: 3,
        renderCell: (params) => {
            return (
                <div style={{ whiteSpace: 'normal' }}>
                    {params.value}
                </div>
            );
        }
    },
    { 
        field: 'instructions', 
        headerName: "Instructions", 
        flex: 4,
        renderCell: (params) => {
            return (
                <div style={{ whiteSpace: 'normal' }}>
                    {params.value}
                </div>
            );
        }
    }
]



function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-yellow-900 text-white rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Create New Recipe
                </button>
            </div> 
            <Button onClick={handleOpen} className="p-3 bg-yellow-900 text-white rounded m-3 hover:bg-slate-800 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-yellow-900 text-white  rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 700, width: '100%'}}
        >
            <h2 className="p-3  bg-yellow-900 text-white my-2 rounded">Recipes</h2>
            <div style={{ height: '700px', maxWidth: '100%', overflowY: 'auto' }}>
                <DataGrid 
                style={{background: "white"} } 
                getRowId={(row: any) =>  row.id}
                rows={contactData} 
                columns={columns}
                checkboxSelection={true} 
                autoHeight = {true}
                onRowSelectionModelChange={ (item:any) => {
                    setSelectionModel(item);
                }}
                getRowHeight={() => 250}
                componentsProps={{
                    pagination: {
                        rowsPerPageOptions: [5]
                    }
                }}
                />
        </div>
        </div>
    </>
  )
}

export default DataTable