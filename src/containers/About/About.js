import React from 'react'
import {Row,Col,Divider,Input, Button, message,} from 'antd'
import QRCode from 'qrcode.react'//二维码
import Rightdetail from '../Admin/Rightdetail/Rightdetail';
import './About.min.css'
import{reqGenerateShortUrl} from '../../api/index'
import img2 from './img2.jpg'
const About = ()=>{//箭头函数
    const [urldata,seturldata] = React.useState('')
    const InpRef = React.createRef()
    console.log(typeof(urldata))
    console.log(urldata);
    const getValue = e => {
        if(e){
            reqShortUrl(e.target.value)
        }else{
            reqShortUrl(InpRef.current.state.value)
        }
      }
      const reqShortUrl = async (url)=>{
        if(url === ''){
            message.warn("输入网址不能为空！")
        }else{
        let result = await reqGenerateShortUrl(url)
        const {status,data} = result
        if(status === 0){
            seturldata(data.shorturl)
            
        }else{
            message.warn("请求失败，请稍后重试。。。")
        }
        }
       
    }
    return(
        <Row className='comm-main' type='flex' justify='center'>
        <Col className='comma-left' xs={24} sm={24} md={16} lg={18} xl={14} >
        <div className="hover-img">
            <img src={img2} alt=""/>
            <div className="img-about">关于</div>
        </div>
        <div className="describe">
        <div className="separate">
            关于本站
        </div>
        <p>博主其实并不勤快，但由于疫情影响，漫长的在家时间迫使博主需要做点东西来充实下自己</p>
        <p>因此这个博客的诞生也实属幸运。。。</p>
        </div>
        </Col>
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4} >
        <Rightdetail />
        <div className="connectionBox">
        <div><h4>短网址生成器</h4></div>
        <Input  placeholder="请输入 http:// 或 https:// 开头的网址"  ref={InpRef}  onPressEnter={(e)=>{getValue(e)}}/>
        <div className="button">
            <Button onClick={()=>{getValue()}} type="primary">
            立刻生成
            </Button>
        </div>
        {
            
            urldata !== "" ?<div style={{textAlign:'center'}}><Divider>短网址</Divider>
            <h5>{urldata}</h5>
            <Divider>二维码</Divider>
            <QRCode style={{width:'50%',height:'50%',}} value={urldata}/>
            </div> : <div style={{textAlign:'center'}}>
                <Divider>测试用例</Divider>
                <Divider>原网址</Divider>
                <div ><h5>http://www.naimei.xyz</h5></div>
                <Divider>短网址</Divider>
                <div ><h5>http://localhost:5000/s/mKOY</h5></div>
                <Divider>二维码</Divider>
                <QRCode  value='http://www.naimei.xyz'/>
                     <div >功能简介:</div>
                     <div >
                     <div>长链接转为短链接</div>
                     <div>生成链接长期有效</div>
                     </div>
                </div>              
        }
        
        </div>
        
        </Col>
        </Row>
    )
}
export default About;