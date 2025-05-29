import { Card, Button, Checkbox, Form, Input, message } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
import { fetchLogin } from '../../store/user'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = async (values) => {
 
     await  dispatch(fetchLogin(values))
      navigate('/')
      message.success('登录成功')

    }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form onFinish={onFinish} initialValues={{ remember: true }}>
          <Form.Item  name='mobile' rules={[{required:true,message:'请输入手机号'},
            {pattern:/^1[3-9]\d{9}$/,message:'请输入正确的手机号'}
          ]}>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item name='code' rules={[{required:true,message:'请输入验证码'}]}>
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" >
            <Checkbox className="login-checkbox-label" >
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
