export interface Stock  {
    companyId : string,
    companyName : string,
    stockValue : number,
    stockCount : number
}

export interface Column {
    title: string,
    dataIndex: string,
    key: string,
}

export interface TableConfig {
    tableTitle : string,
    columns : Array<Column>
}
