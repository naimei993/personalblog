
import React from 'react';
import { Row, Col,Input,Spin,List,Tag, message,Button  } from 'antd';
import { CalendarOutlined,ClusterOutlined,ArrowRightOutlined,SearchOutlined} from '@ant-design/icons';
import LazyLoad from 'react-lazyload';
import {BASE_URL} from '../../config/index'
import {reqActualCombat} from '../../api/index'
import './life.less'
import Rightdetail from '../Admin/Rightdetail/Rightdetail';


const Life = ()=>{//箭头函数
    const [dataSource, setdataSource] = React.useState('')
    const InpRef = React.createRef()
    React.useEffect(()=>{
     const getList = async ()=>{
        let result = await reqActualCombat()
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
     
      return(
  
          <Row className='comm-main' type='flex' justify='center'>
          <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14} >
          <Spin tip='加载中...' spinning={false} />
  
          <div className="contentTop1">
          
              <div className="list">
              <List
                  header={<Row>
                    <Col xs={12} sm={14} md={13} lg={13} xl={13}><div style={{ fontWeight: 'bold', paddingLeft: 20 ,lineHeight: '32px'}}>生活日记 <span style={{color: 'red'}}>5</span> 篇</div></Col>
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
                      <div className="imgbox">
			              <img src={`${BASE_URL}/upload/`+item.img} className="img" alt="图片" />
          
                    <div className="bachover">
                    <div className="bacimgtitle">{item.title}</div>
                    <div className="sentence">
                        <h4>{item.description}</h4>
                    </div>
                    </div>
		            </div>
                      
                      <div style={{padding:"0 15px"}}>{item.content}</div>
                      {item.content === '' ? <span></span> :<span onClick={()=>{detail(item.id)}} className='detail'><span>查看全文</span><ArrowRightOutlined style={{fontSize:'16px',marginTop:'4px'}} /></span>}
                      <div style={{fontSize:"14px",marginBottom:"5px",padding:"0 15px"}}>
                        {item.top ? <Tag color="red" >置顶</Tag> : <span></span> }
                        <span className='createTime' ><CalendarOutlined  style={{fontSize:'14px',color:"#52c41a"}}/>{item.createdDate.split('T')[0]}</span> 
                        <span className='type'><ClusterOutlined style={{fontSize:'14px',color:"#f4a460"}}/>{item.type}</span>
                      </div>
                      </LazyLoad>
                    </List.Item>
                  )}
                />
      </div>
          </div >
          </Col>
          <Rightdetail />
        </Row>
      
      )
}
export default Life;