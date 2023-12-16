import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Col, Row, Table} from "antd";
import {usersType, initialState, sortUserAC, initialStateType, sortGenderAC} from "./Reducers/RootReducer";
import {AppRootType} from "./state/store";

export const RootTable = () => {
    const dispatch = useDispatch();
    const AgeGender = useSelector<AppRootType, initialStateType>(state => state.rootReducer)

    function sortAge(ageType: number) {
        dispatch(sortUserAC(ageType))
    }
    function sortGender(gender: 'male' | 'female') {
        dispatch(sortGenderAC(gender))
    }


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
            <Col xs={30} md={{span: 26, offset: 50}}>
                <Table
                    dataSource={initialState.users}
                    columns={columns}
                    rowKey={(record) => record.id}

                />
            </Col>
        </Row>
    )
}
