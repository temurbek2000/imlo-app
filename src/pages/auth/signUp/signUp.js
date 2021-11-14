import React from 'react';
import {
    Container,
    Card,
    Button
} from "react-bootstrap";
import {
    Form,
    Input
} from 'antd';
import '../../../styles/login.css'
import NavbarComponent from "../../../commonComponents/navbar/navbar";
import FooterComponent from "../../../commonComponents/footer/footer";
import {FaArrowLeft} from "react-icons/all";
import {Link} from "react-router-dom";

class SignUpComponent extends React.Component{
    render() {
        const onFinish=()=>{

        }
        return (
            <div>
                <NavbarComponent/>
                <Container>
                    <div className="p-5 m-1 login-area">
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >

                            <Form.Item
                                label="F.I.O:"
                                name="fullname"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Login kiriting:"
                                name="login"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Parol kiriting:"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                label="Parolni qayta kiriting:"
                                name="password1"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <div className="d-flex justify-content-start text-center mr-2">
                                <p className="remember-password">
                                    <FaArrowLeft/>
                                </p>
                                <Link to={'/login'}>
                                    <p className="remember-text">
                                        Ro'yxatdan o'tganmisiz?
                                    </p>
                                </Link>
                            </div>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Ro'yxatdan o'tish
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Container>
                <FooterComponent/>
            </div>
        );
    }
}
export default SignUpComponent;