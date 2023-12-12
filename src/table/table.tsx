import React, {useState} from 'react';
import {initialState, initialStateType, usersType} from "./state/state";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "./state/store";
import {Col, Row, Table} from "antd";



export const RootTable = () => {
    const dispatch = useDispatch();
    const users = useSelector<AppRootType, usersType[]>(state => state.rootReducer);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
    ];

    return (
        <Row>
            <Col xs={30} md={{span: 26, offset: 45}}>
                <Table
                    dataSource={initialState.users}
                    columns={columns}
                    // Handle age sorting
                />
            </Col>
        </Row>
    )
}
