import { Link, useNavigate } from 'react-router-dom'
import { Table, Tag, Space, Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import './index.scss'
import 'dayjs/locale/zh-cn';
import { useChannnel } from '../../hooks/useChannel';
import locale from 'antd/es/date-picker/locale/zh_CN';
import img404 from '@/assets/error.png'
import { useEffect, useState } from 'react';
import { deleteArticle, getArticleList } from '../../apis/article';

const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {
    const navigate=useNavigate()
    const {channels}=useChannnel()
  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 120,
      render: cover => {
        return <img src={cover || img404} width={80} height={60} alt="" />
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: data => data===1?<Tag color="warning">待审核</Tag> : <Tag color='green'>审核通过</Tag>
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate'
    },
    {
      title: '阅读数',
      dataIndex: 'read_count'
    },
    {
      title: '评论数',
      dataIndex: 'comment_count'
    },
    {
      title: '点赞数',
      dataIndex: 'like_count'
    },
    {
      title: '操作',
      render: data => {
        return (
          <Space size="middle">
           <Button type="primary" shape="circle" icon={<EditOutlined />}  onClick={()=>{navigate(`/publish?id=${data.id}`)}}/>
           <Popconfirm
           title='删除文章'
           description='确定删除该文章吗？'
           onConfirm={()=>onConfirm(data)}
           okText='删除'
           cancelText='取消'
           onCancel={()=>{}}
           >
             <Button
              type="primary"
              danger
              shape="circle"
              
              icon={<DeleteOutlined />}
            />
           </Popconfirm>
          </Space>
        )
      }
    }
  ]
    const [reqData,setReqData]=useState({
    status:'',
    channel_id:'',
    begin_pubdate:'',
    end_pubdate:'',
    page:1,
    per_page:10
  })
  const [list,setList]=useState()
  const [count,setCount]=useState()
  useEffect(()=>{
    async function getList(){
        const res=await getArticleList(reqData)
        setList(res.data.results)
        setCount(res.data.total_count)
    }
    getList()
  },[reqData])


  function onFinish(value){
    console.log(value);
    setReqData({
      ...reqData,
      channel_id:value.channel_id,
      status:value.status,
      begin_pubdate:value.date[0].format('YYYY-MM-DD'),
      end_pubdate:value.date[1].format('YYYY-MM-DD')

    })

  }
  async function onConfirm(data){
    // console.log('删除成功');
    console.log(data.id);
    await deleteArticle(data.id)
    setReqData({
        ...reqData
    })
  }
  return (
    <div>
      <Card
        title={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/home">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>内容管理</Breadcrumb.Item>
          </Breadcrumb>
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: null }} onFinish={onFinish}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={null}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
              <Radio value={3}>审核失败</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select
              placeholder="请选择文章频道"
              
              style={{ width: 120 }}
            >
              {
                channels.map(item=>{
                    return <Option key={item.id} value={item.id}>{item.name}</Option>
                })
              }
          
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 80 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card title={`根据筛选条件共查询到 ${count} 条结果：`}>
        <Table rowKey="id" columns={columns} dataSource={list} />
      </Card>
    </div>
  )
}

export default Article
