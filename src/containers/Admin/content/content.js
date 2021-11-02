import React from 'react';
import { Row, Col,Input,Spin,List,Tag, message,Avatar,Breadcrumb,Divider,Tooltip,Button  } from 'antd';
import { CalendarOutlined,ClusterOutlined,ArrowRightOutlined,EnvironmentOutlined,MailOutlined,GithubOutlined,QqOutlined,WechatOutlined,LinkOutlined,SearchOutlined} from '@ant-design/icons';
import LazyLoad from 'react-lazyload';
import './content.min.css'
import 'antd/dist/antd.css';
import {BASE_URL} from '../../../config/index'
import {reqArticleList} from '../../../api/index'

import img5 from './img5.jpg'
// import img2 from './img2.jpg'
// import img3 from './img3.jpg'
// import img4 from './img4.jpg'

  // const { Search } = Input;
  const Content = ()=>{//箭头函数
    const InpRef = React.createRef()
    const [dataSource, setdataSource] = React.useState('')
    React.useEffect(()=>{
     const getList = async ()=>{
        let result = await reqArticleList()
        const {status,msg,data} = result
        if(status === 0){
          setdataSource([data])
          console.log([data]);
        }else{
          message.error(msg,1)
        }
      }
      getList()
    },[])
    const onSearch = e => {
      if(e){
        console.log(e.target.value);
      }else{
        console.log(InpRef.current.state.value);
      }
      
    }
    const detail = (id)=>{
        console.log(id);
    }
    const AvatarPic = ()=>{
      return(
        <img src={img5} alt=""/>
      )
    }
    return(

        <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14} >
        <Spin tip='加载中...' spinning={false} />

        <div className="contentTop">
        
            <div className="list">
            <List
                header={<Row>
                  <Col xs={12} sm={14} md={13} lg={13} xl={13}><div style={{ fontWeight: 'bold', paddingLeft: 20 ,lineHeight: '32px'}}>博客日志 <span style={{color: 'red'}}>5</span> 篇</div></Col>
                  <Col xs={11} sm={9} md={10} lg={10} xl={10} className="search">
                    <Input placeholder="按下回车键搜索..."size='small' ref={InpRef} onPressEnter={(e)=>{onSearch(e)}}/> 
                    <div className="site-button-ghost-wrapper">
                          <Button ghost onClick={()=>{onSearch()}}><SearchOutlined style={{fontSize:'16px'}}/></Button>
                        </div></Col>
                  <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col></Row>}
                footer={<div>Footer</div>}
                bordered
                dataSource={dataSource[0]}
                renderItem={item => (
                  <List.Item key={item.id}>
                     <LazyLoad height={50} offset={-10}>
                    <div className='articleTitle'>{item.title}</div>
                    <div style={{fontSize:"14px",marginBottom:"14px"}}>
                      {item.top ? <Tag color="red" >置顶</Tag> : <span></span> }
                      <span className='createTime' ><CalendarOutlined  style={{fontSize:'14px',color:"#52c41a"}}/>{item.createdDate.split('T')[0]}</span> 
                      <span className='type'><ClusterOutlined style={{fontSize:'14px',color:"#f4a460"}}/>{item.type}</span>
                    </div>
                    <div className="imgDiv"><a href="/#" className='imga'><img className="imgs" src={`${BASE_URL}/upload/`+item.img} alt="商品图片" /></a></div>
                    <div>{item.content}</div>
                    <span onClick={()=>{detail(item.id)}} className='detail'><span>查看全文</span><ArrowRightOutlined style={{fontSize:'16px',marginTop:'4px'}} /></span>
                    </LazyLoad>
                    <Divider/>
                  </List.Item>
                )}
              />
      
      footer
    </div>
        </div >
        </Col>
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4} >
          <div className="contentRight">
            <div className="UserImg-box">
          <Avatar
            size={90}
            icon={<AvatarPic/>}
          />
          
          
            </div>
            <div style={{color:'#f8bc31' ,marginTop:'5px',fontSize:"22px"}}>夜已成殇</div>
            <div style={{color:'#22a2c3' ,marginTop:'5px',fontSize:"12px"}}>软件工程专业</div>
          
          <div >
          <Breadcrumb className="detailmsg" separator=" ">
            <Breadcrumb.Item >
              <EnvironmentOutlined style={{fontSize:"14px"}} />
              <span>重庆</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item >
             <span>前端：React + Antd Design</span>
           </Breadcrumb.Item>
           <Breadcrumb.Item >
             <span>后端：Node + Mysql</span>
           </Breadcrumb.Item>
           <Breadcrumb.Item >
           <MailOutlined style={{fontSize:"14px"}}/>
             <span>2267225243@qq.com</span>
           </Breadcrumb.Item>
           <Breadcrumb.Item >
           <span></span>
           </Breadcrumb.Item>
            </Breadcrumb>,
          </div>
          <Divider>社交账号</Divider>
          <div className="social">
          <Tooltip  title="GitHub">
          <a href="https://github.com/naimei993" target="_blank" rel="noopener noreferrer">
          <Avatar
            size={36}
            icon={<GithubOutlined />}
          />
          </a>
          </Tooltip>
          <Tooltip  title="QQ">
          <a href="https://qm.qq.com/cgi-bin/qm/qr?k=Oumjk86LEy6oc2YlyyLRosL9PcsRE1Vg&noverify=0" target="_blank" rel="noopener noreferrer">
          <Avatar
            size={36}
            icon={<QqOutlined />}
          />
          </a>
          </Tooltip>
          <Tooltip  title="WeChat">
          <a href="https://u.wechat.com/MPKDw0GfmBWXy28rtJ3l0qA" target="_blank" rel="noopener noreferrer">
          <Avatar
            size={36}
            icon={<WechatOutlined />}
          />
          </a>
          </Tooltip>
          <Tooltip  title="CSDN">
          <a href="https://blog.csdn.net/weixin_45846840?spm=1000.2115.3001.5343" target="_blank" rel="noopener noreferrer">
          <Avatar
            size={36}
            icon={<LinkOutlined />}
          />
          </a>
          </Tooltip>
          </div>
          </div>
        </Col>
      </Row>
    )
}
export default Content