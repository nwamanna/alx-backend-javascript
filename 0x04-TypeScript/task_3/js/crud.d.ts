import { RowID, RowElement } from './interface'
function insertRow(row: RowElement) : number {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
  }
  
function deleteRow(rowId: RowID): void {
    console.log('Delete row id', rowId);
    return;
  }
  
function updateRow(rowId: RowID, row: RowElement): RowID {
    console.log(`Update row ${rowId}`, row);
  
    return rowId;
  }