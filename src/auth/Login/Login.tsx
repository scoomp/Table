import React, {useState} from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import {RegisterPage} from "../register/reg";
import {useForm} from "antd/lib/form/Form";

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};


export const LoginPage = (props: any ) => (
    <div>
        <h3>Авторизация</h3>
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}

        >
            <Input  onChange={(el)=>{props.setEmail(el.target.value)}}/>
        </Form.Item>
        <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password onChange={(el)=>{props.setPassword(el.target.value)}}/>
        </Form.Item>

        <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
        >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
            <Button href={'/Table'} type="primary" htmlType="submit"  className="login-form-button">
                Log in
            </Button>
            Or <a href={'/Register'}>register now!</a>
        </Form.Item>
    </Form>
    </div>
)

