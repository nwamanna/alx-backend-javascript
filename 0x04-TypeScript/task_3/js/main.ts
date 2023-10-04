/// <reference path="crud.d.ts"/>
import { RowElement, RowID } from './interface';
import * as CRUD from './crud';

const obj: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
}

const newRowID: RowID = CRUD.insertRow(obj);

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };

CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);