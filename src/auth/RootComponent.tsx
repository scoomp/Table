import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import './styleRootComponent.module.css'
import {LoginPage} from "./Login/Login";
import {RegisterPage} from "./register/reg";
import {Form} from "antd";
import {RootTable} from "../table/table";


const handleSubmit = async (el: { preventDefault: () => void; }) => {
    el.preventDefault()
}


export const AuthRootComponent = () => {
    const location = useLocation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={'root'}>
            <div className={'form'} onSubmit={handleSubmit}>
                <Form>
                    {location.pathname === '/' ?
                        <LoginPage setEmail={setEmail} setPassword={setPassword}/> : location.pathname === '/Register' ?
                            <RegisterPage/> : location.pathname === '/Table'  ? <RootTable/> : null}
                </Form>
            </div>
        </div>
    )

}
