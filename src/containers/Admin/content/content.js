import React from 'react';
import { Row, Col,Input,List,Tag,Divider,Button  } from 'antd';
import { CalendarOutlined,ClusterOutlined,ArrowRightOutlined,SearchOutlined} from '@ant-design/icons';
import LazyLoad from 'react-lazyload';
import './content.min.css'
import 'antd/dist/antd.css';
import {BASE_URL} from '../../../config/index'
import Rightdetail from '../Rightdetail/Rightdetail';


// import img2 from './img2.jpg'
// import img3 from './img3.jpg'
// import img4 from './img4.jpg'

  // const { Search } = Input;
  const Content = (props)=>{//箭头函数
    const {dataSource,setsearchValue} = props;
    const InpRef = React.createRef()
    const onSearch = e => {
      if(e){
        setsearchValue(e.target.value)
      }else{
        setsearchValue(InpRef.current.state.value)
      }
      
    }
    const detail = (id)=>{
        console.log(id);
    }
    
    return(

        <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14} >
        <div className="contentTop">
        
            <div className="list">
            <List
                loading={dataSource.length === 0 ? true : false}
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
                dataSource={dataSource || []}
                renderItem={item => (
                  <List.Item key={item.id}>
                     <LazyLoad height={50} offset={-10}>
                    <div className='articleTitle'>{item.title}</div>
                    <div style={{fontSize:"14px",marginBottom:"14px"}}>
                      {item.top ? <Tag color="red" >置顶</Tag> : <span></span> }
                      <span className='createTime' ><CalendarOutlined  style={{fontSize:'14px',color:"#52c41a"}}/>{item.createdDate}</span> 
                      <span className='type'><ClusterOutlined style={{fontSize:'14px',color:"#f4a460"}}/>{item.type}</span>
                    </div>
                    <div className="imgDiv"><a href="/#" className='imga'><img className="imgs" src={`${BASE_URL}/upload/`+item.img} alt="商品图片" /></a></div>
                    <div>{item.content}</div>
                    {item.content === '' ? <span></span> :<span onClick={()=>{detail(item.id)}} className='detail'><span>查看全文</span><ArrowRightOutlined style={{fontSize:'16px',marginTop:'4px'}} /></span>}
                    </LazyLoad>
                    <Divider/>
                  </List.Item>
                )}
              />
          </div>
       </div>
       </Col>
       <Rightdetail/>
      </Row>
    
    )
}
export default Content