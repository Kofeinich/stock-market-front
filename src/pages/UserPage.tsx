import React, {useState} from 'react';
import {userStore} from "../modules/user/userStore";
import {Layout} from 'antd';
import {UserHeader} from "../modules/user/UserHeader";
import {UserStockTable} from "../modules/user/UserStockTable";
import {TableConfig} from "../types/types";
import {COLUMNS} from "../types/const/const";


export const UserPage = () => {

    const userNickname = userStore((state) => state.userNickname)
    const userBalance = userStore((state) => state.userBalance)
    const userStocks = userStore((state) => state.userStocks)

    const [userTableConfig, setUserTableConfig] = useState<TableConfig>({
        tableTitle: 'Мои акции',
        columns: COLUMNS
    })


    return <Layout>
        <UserHeader nickname={userNickname} balance={userBalance}/>
        <Layout>
            <UserStockTable tableConfig={userTableConfig} userStocks={userStocks}></UserStockTable>
        </Layout>
    </Layout>
}