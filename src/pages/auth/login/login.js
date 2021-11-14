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
import {FaInfo, FaUser} from "react-icons/all";
import {Link} from "react-router-dom";

class LoginComponent extends React.Component{
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
                          label="Loginingizni kiriting:"
                          name="login"
                          rules={[{ required: true, message: 'Please input your username!' }]}
                      >
                          <Input />
                      </Form.Item>

                      <Form.Item
                          label="Parolingizni kiriting:"
                          name="password"
                          rules={[{ required: true, message: 'Please input your password!' }]}
                      >
                          <Input.Password />
                      </Form.Item>
                      <div className="d-flex justify-content-start text-center mr-2">
                          <p className="remember-password">
                              <FaInfo/>
                          </p>
                          <p className="remember-text">
                              Parolni unutdingizmi?
                          </p>
                      </div>
                      <div className="d-flex justify-content-start text-center mr-2">
                          <p className="remember-password">
                              <FaUser/>
                          </p>
                          <Link to={'/sign-up'}>
                              <p className="remember-text">
                                  Ro'yxatdan o'tish
                              </p>
                          </Link>
                      </div>

                      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                          <Button type="primary" htmlType="submit">
                              Kirish
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
export default LoginComponent;