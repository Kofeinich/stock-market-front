import React, {FC} from "react";
import {Header} from "antd/es/layout/layout";
import {Col, Row} from "antd";

interface UserHeaderProps {
    nickname : string,
    balance: number
}

export const UserHeader: FC<UserHeaderProps> = ({nickname, balance}) => {
    return <Header>
        <Row gutter={[16, 16]}>
            <Col span={6} color={'white'}>
                {nickname}
            </Col>
            <Col span={6} color={'white'}>
                {balance}
            </Col>
        </Row>
    </Header>
}