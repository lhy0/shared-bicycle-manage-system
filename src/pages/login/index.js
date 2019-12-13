import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.less';
import { loginIn } from '../../redux/actions';
import { connect } from 'react-redux';
const FormItem = Form.Item;

class Login extends React.Component {
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                console.log(this.props)
                // this.props.loginIn();
                // this.props.history.push('/')
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-form">
                <div className="login-form-main">
                    <div className="form-logo">
                        <img src="/assets/logo-ant.svg" alt=""/>
                    </div>
                    <div className="form-content">
                        <div className="account-slogan">
                            <h2>Demo</h2>
                            <p>React + React-Router + React-Redux</p>
                        </div>
                        <div className="account-login">
                            <Form onSubmit={this.handleSubmit}>
                                <FormItem>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: '请填写用户名!' }],
                                    })(
                                        <Input
                                        size="large"
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                        />,
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: '请填写密码!' }],
                                    })(
                                        <Input
                                        size="large"
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                        />,
                                    )}

                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(<Checkbox>记住</Checkbox>)}
                                    <a className="login-form-forgot" href="" className="login-form-forgot">
                                        忘记密码
                                    </a>
                                    <Button type="primary" size="large" htmlType="submit" className="login-form-button">
                                        登录
                                    </Button>
                                    {/* Or <a href="">注册</a> */}
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const FormWrap = Form.create({ name: 'normal_login' })(Login);

export default connect(null, { loginIn })(FormWrap);