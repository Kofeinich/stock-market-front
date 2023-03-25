import {Stock, TableConfig} from "../../types/types";
import React, {FC} from "react";
import { Table } from "antd";

interface UserStockTableProps {
    userStocks: Array<Stock>
    tableConfig: TableConfig
}


export const UserStockTable: FC<UserStockTableProps> = (tableProps: UserStockTableProps) =>{
    return (
        <section style={{width: '100%', justifyContent: 'center' , display: 'flex', alignItems: 'center' }}>
            <div style={{width: '700px', flexDirection: 'column'}}>
                <h3>{tableProps.tableConfig.tableTitle}</h3>
                <Table
                    dataSource={tableProps.userStocks}
                    columns={tableProps.tableConfig.columns}
                    pagination={{defaultPageSize: 3, showSizeChanger: true}}
                />
            </div>
        </section>
    )
}