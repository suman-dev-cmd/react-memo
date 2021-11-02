import React, { useState, useEffect, useRef, useMemo } from "react";
import Memorization from "./useMemoCallback/Memorization";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";

import "./App.scss";
interface IrowDataProps {
  make: string;
  model: string;
  price: number;
}
const App = () => {
  const [rowData, setRowData] = useState<IrowDataProps[]>();
  const [gridApi, setGridApi] = useState({});
  const gridRef: any = useRef(null);
  const [show, setShow] = useState(false);
  const columnDefs = useMemo(
    () => [
      {
        headerName: "Make",
        field: "make",
        sortable: true,
        filter: true,
        // rowGroup: true,
        rowDrag:true,
        width:100,
      },
      { headerName: "Model", field: "model", sortable: true, filter: true },
      { headerName: "Price", field: "price", sortable: true, filter: true },
    ],
    []
  );
  const autoGroupColumnDef = {
    headerName: "Model",
    field: "model",
    // cellRenderer: "agGroupCellRenderer",
    cellRendererParams: {
      checkbox: true,
    },
  };
  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((res) => res.json())
      .then((rowData) => setRowData(rowData))
      .catch((err) => console.log(err));
  }, []);
  const onButtonClick = () => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node: any) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node: any) => `${node.make} ${node.model}`)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };
  const statusBar = {
    statusPanels: [
      {
        statusPanel: "agTotalAndFilteredRowCountComponent",
        align: "left",
      },
      {
        statusPanel: "agTotalRowCountComponent",
        align: "center",
      },
      { statusPanel: "agFilteredRowCountComponent" },
      { statusPanel: "agSelectedRowCountComponent" },
      { statusPanel: "agAggregationComponent" },
    ],
  };

  const setSideBarVisible = () => setShow(!show);
  return (
    
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <button onClick={onButtonClick}>Get Seleted Rows</button>
      <button onClick={setSideBarVisible}>Get Sidebar</button>
      <AgGridReact
        defaultColDef={{
          sortable: true,
          resizable: true,
          enableRowGroup: true,
          enablePivot: true,
          enableValue: true,
          width:170
        }}
        rowGroupPanelShow={"always"}
        pivotPanelShow={"always"}
        ref={gridRef}
        columnDefs={columnDefs}
        autoGroupColumnDef={autoGroupColumnDef}
        animateRows={true}
        rowDragManaged={true}
        rowData={rowData}
        pagination={true}
        rowSelection="multiple"
        onGridReady={(params) => setGridApi(params.api)}
        groupSelectsChildren={true}
        statusBar={statusBar}
        sideBar={show}
       
      />
    </div>
  );
};

export default App;
