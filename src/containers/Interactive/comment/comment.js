import React from "react";
import {Tooltip,Comment, Avatar,Modal,Input,Button} from 'antd'
import {DislikeTwoTone,LikeTwoTone,LikeOutlined,DislikeOutlined} from '@ant-design/icons'
import {BASE_URL} from '../../..//config/index'
const { TextArea } = Input;
const CommentUI = (props)=>{
    const {data,like,dislike,device,equipment,twocomment} = props;
    const {id,rid,content,createdtime,img,location,name} = data
    const [visible,setvisible] = React.useState(false)
    const [commentinfo,setcommentinfo] = React.useState({id:"",rid:"",name:"",email:"",content:""})
    const [likemsg,setlikemsg] = React.useState({isDislike:false,isLike:false,like,dislike})
   
    const likes =()=>{
        if(likemsg.isDislike){
            dislikes()
        }else{
            if(likemsg.isLike){
                setlikemsg({...likemsg,isLike:false,like:parseInt(likemsg.like)-1+""})
            }else{
                setlikemsg({...likemsg,isLike:true,like:parseInt(likemsg.like)+1+""})
            }
        }
        
        console.log("like");
    }
    const dislikes = ()=>{
        if(likemsg.isLike){
            likes()
        }else{
            if(likemsg.isDislike){
                setlikemsg({...likemsg,isDislike:false,dislike:parseInt(likemsg.dislike)-1+""})
            }else{
                setlikemsg({...likemsg,isDislike:true,dislike:parseInt(likemsg.dislike)+1+""})
            }
        }
       
        
        console.log("dislike");
    } 
    const getimgurl=(data)=>{
        //设备及系统
        let re1 = /Windows/g  
        let re4 = /Mac/g  
        let re5 = /国产/g  
        //浏览器
        let re2 = /Chrome/g  
        let re3 = /Safari/g  
        let re6 = /Firefox/g  
        let re7 = /IE/g  
        let re8 = /Opera/g  
        if(re1.test(data)){
            return `${BASE_URL}/upload/win-6.png`
        }
        if(re2.test(data)){
            return `${BASE_URL}/upload/chrome.png`
        }
        if(re4.test(data)){
            return `${BASE_URL}/upload/iphone.png`
        }
        if(re5.test(data)){
            return `${BASE_URL}/upload/android.png`
        }
        if(re3.test(data)){
            return `${BASE_URL}/upload/safari.png`
        }
        if(re6.test(data)){
            return `${BASE_URL}/upload/firefox.png`
        }
        if(re7.test(data)){
            return `${BASE_URL}/upload/iepng.png`
        }
        if(re8.test(data)){
            return `${BASE_URL}/upload/opera-2.png`
        }
        return 
    }
    const getBrowserInfo = ()=> {
        const agent = navigator.userAgent.toLowerCase();
        const regStr_ie = /msie [\d.]+;/gi;
        const regStr_ff = /firefox\/[\d.]+/gi
        const regStr_chrome = /chrome\/[\d.]+/gi;
        const regStr_saf = /safari\/[\d.]+/gi;
        //IE
        if(agent.indexOf("msie") > 0) {
            return agent.match(regStr_ie);
        }
    
        //firefox
        if(agent.indexOf("firefox") > 0) {
            return agent.match(regStr_ff);
        }
    
        //Chrome
        if(agent.indexOf("chrome") > 0) {
            return agent.match(regStr_chrome);
        }
    
        //Safari
        if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
            return agent.match(regStr_saf);
        }
    
    }
    
    const showReplay = ()=>{
        setvisible(true)
    }
    const handleOk = ()=>{//箭头函数
        if(twocomment){
            console.log(commentinfo,rid,"VVVVV",id);
            postdata({...commentinfo,id,rid})
        }else{
            console.log(commentinfo,id);
            postdata({...commentinfo,id,rid:null})
        }
       
        setvisible(false)
    }
    const handleCancel =()=>{//箭头函数
        setvisible(false)
          console.log("cancle");
    }
    const postdata = (data)=>{//箭头函数
        let BrowserInfo = getBrowserInfo()[0].split("/")
        const browserType = BrowserInfo[0].charAt(0).toUpperCase() + BrowserInfo[0].slice(1)
        const version = BrowserInfo[1]
        console.log(browserType,version);
        console.log(data);
    }
    const actions = [
        <span className="comment-basic-like">
            <Tooltip title="赞同" onClick={likes}>
                {
                    likemsg.isLike ? <LikeTwoTone twoToneColor="#eb2f96"  style={{fontSize:"16px"}}  /> : <LikeOutlined  style={{fontSize:"16px"}}/>
                }
            
            </Tooltip>
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likemsg.like}</span>
        </span>,
        <span  className="comment-basic-dislike">
            <Tooltip title="无趣" onClick={dislikes}>
                {
                    likemsg.isDislike ? <DislikeTwoTone twoToneColor="#eb2f96"  style={{fontSize:"16px"}}/>:<DislikeOutlined  style={{fontSize:"16px"}}/>
                }
            </Tooltip>
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likemsg.dislike}</span>
        </span>,
        <span className="comment-basic-address">
        <img src={getimgurl(device)} alt="" style={{height:'12px',position:'relative',top:"0",paddingRight:'2px',marginLeft:'5px'}}/>
        {device}
    </span>,
    <span  className="comment-basic-address" style={{marginRight:"15px"}}>
        <img src={getimgurl(equipment)}  alt="" style={{height:'16px',position:'relative',top:"0",paddingRight:'5px',marginLeft:'5px'}}/>
       {equipment}</span>,
    // this.props.nopinglun ? null :
        <span className="comment-basic-reply-to" onClick={()=>{showReplay()}} style={{color:'#1890ff'}}>回复</span>,
    ];
    return(
        <Comment   
                    actions={actions}
                    author={<a href="/#">{name}</a>}
                    datetime={<div><span style={{marginRight:"10px"}}>{createdtime}</span><span>{location}</span></div>}
                    avatar={<Avatar style={{height:"32px",width:"32px"}} src={`${BASE_URL}/upload/${img}`} alt={`${name}`} />}
                    content={
                      <p style={{marginTop:"10px",marginBottom:"15px"}}>
                      {content}
                      </p>
                    }
                >  
                {props.children}
                <Modal
                    visible={visible}
                    title="追评"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" style={{height:"25px"}}  onClick={handleCancel}>
                            返回
                        </Button>,
                        <Button key="submit" type="primary" style={{height:"25px"}}  onClick={handleOk}>
                            提交评论
                        </Button>,
                    ]}
                >

                    <Input  placeholder="输入您的笔名" style={{height:"33px", marginBottom: '10px' }} 
                           onChange={(e) => {setcommentinfo({...commentinfo,name:e.target.value})}} />
                   
                   <div style={{position:'relative'}}>
                                <Input placeholder="请输入邮箱"  style={{height:"33px", marginBottom: '10px',}} onChange={(e) => { setcommentinfo({...commentinfo,email:e.target.value})}}/>
                                {/* http://q4.qlogo.cn/g?b=qq&nk=2267225243@qq.com&s=3 通过qq邮箱获取qq头像*/}
                            </div>
                    <TextArea rows={4} placeholder="输入您的留言" onChange={(e) => { setcommentinfo({...commentinfo,content:e.target.value})}} />


                </Modal>
                </Comment>
                
    )
}
export default CommentUI;