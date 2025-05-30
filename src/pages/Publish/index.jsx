import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useSearchParams } from 'react-router-dom'
import './index.scss'

import { useState ,useEffect} from'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { getDetail, postArticle, putArticle } from '../../apis/article'
import { useChannnel } from '../../hooks/useChannel'


const { Option } = Select

const Publish = () => {
   const{channels}=useChannnel()
    function onFinish(value){
        console.log(value);
        if(id){
            putArticle(
               {
                id,
                title:value.title,
                content:value.content,
                channel_id:value.channel_id,
            cover:{
                type:type,
                images:fileList.map(item=>{
                    if(item.response){
                        return item.response.data.url
                    }else{
                        return item.url
                    }
                }),
            }
               }
            )
        }else{
            postArticle({
            title:value.title,
            content:value.content,
            channel_id:value.channel_id,
            cover:{
                type:type,
                images:fileList.map(item=>{
                    if(item.response){
                        return item.response.data.url
                    }else{
                        return item.url
                    }
                }),
            }
        })
        }
        message.success('发布成功')
        
    }
    const [fileList, setFileList] = useState([])
    const [type, setType] = useState(0)
    function onChange(value){
        console.log(value);
        setFileList(value.fileList)
    }
    function TypeChange(value){
        // console.log(value.target.value);
        setType(value.target.value)
    }
    const [searchParams]=useSearchParams()
    const id=searchParams.get('id')
    // console.log(id);
    
    const [form]=Form.useForm()
    useEffect(()=>{
        async function Detail(){
            const res=await getDetail(id)
            // console.log(res.data);
            
            form.setFieldsValue({
                ...res.data,
                type:res.data.cover.type,
            })
            setType(res.data.cover.type)
            setFileList(res.data.cover.images.map(item=>{
                return {
                    url:item
                }
            }))
        }
        if(id){
            Detail()
        }
    },[id,form])
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/home">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{id? '发布文章' : '编辑文章'}</Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {
                channels.map(item=>{
                    return <Option key={item.id} value={item.id}>{item.name}</Option>
                })
              }

            </Select>
          </Form.Item>

          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={TypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {
                type!==0 &&<Upload
              name="image"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList
              action="http://geek.itheima.net/v1_0/upload"
              onChange={onChange}
              maxCount={type}
            >
              <div style={{ marginTop: 8 }}>
                <PlusOutlined />
              </div>
            </Upload>
            }
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
             <ReactQuill
            className="publish-quill"
            theme="snow"
            placeholder="请输入文章内容"
            />

          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish
