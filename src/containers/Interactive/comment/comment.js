import React from "react";
import {Tooltip,Comment, Avatar,Modal,Input,Button,message} from 'antd'
import {DislikeTwoTone,LikeTwoTone,LikeOutlined,DislikeOutlined} from '@ant-design/icons'
import { v4 as uuidv4 } from 'uuid';
import {reqSaveComment,reqAddLikeOrDislike,reqReduceLikeOrDislike} from '../../../api/index'
import {BASE_URL} from '../../..//config/index'
const { TextArea } = Input;
const CommentUI = (props)=>{
    const {data,twocomment} = props;
    const {id,rid,content,createdtime,location,name,like,dislike,device,equipment,email} = data
    const [visible,setvisible] = React.useState(false)
    const [commentinfo,setcommentinfo] = React.useState({id:"",rid:"",name:"",email:"",content:""})
    const [likemsg,setlikemsg] = React.useState({isDislike:false,isLike:false,like,dislike})
   //like动作调用
    const likes =()=>{
        if(likemsg.isDislike){
            dislikes()
        }else{
            if(likemsg.isLike){
                ReducelikeOrdislike({id,type:"like"})
                setlikemsg({...likemsg,isLike:false,like:parseInt(likemsg.like)-1+""})
            }else{
                AddlikeOrdislike({id,type:"like"})
                setlikemsg({...likemsg,isLike:true,like:parseInt(likemsg.like)+1+""})
            }
        }
        
        console.log("like");
    }
    //dislike动作调用
    const dislikes = ()=>{
        if(likemsg.isLike){
            likes()
        }else{
            if(likemsg.isDislike){
                ReducelikeOrdislike({id,type:"dislike"})
                setlikemsg({...likemsg,isDislike:false,dislike:parseInt(likemsg.dislike)-1+""})
            }else{
                AddlikeOrdislike({id,type:"dislike"})
                setlikemsg({...likemsg,isDislike:true,dislike:parseInt(likemsg.dislike)+1+""})
            }
        }
       
        
        console.log("dislike");
    } 
    //增加like或者dislike调用，通过type来分别类型
    const AddlikeOrdislike = async(adddata)=>{//箭头函数
        console.log(adddata,"ADDdata");
        let result = await reqAddLikeOrDislike(adddata)
        console.log(result,"ADDresult");
        const {status} = result
        if(status === 0){
            message.success("谢谢您宝贵的建议")
        }else{
            message.warn("糟糕，请求失败了")
        }
    }
    //减少like或者dislike调用，通过type来分别类型
    const ReducelikeOrdislike = async(data)=>{//箭头函数
        let result = await reqReduceLikeOrDislike(data)
        const {status} = result
        if(status === 0){
            message.success("谢谢您宝贵的建议")
        }else{
            message.warn("糟糕，请求失败了")
        }
  }
  //获取设备图标
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
        
        if(commentinfo.name.length===0){
            return message.warning('笔名不可为空')
         }
         if(!isEmail(commentinfo.email)){
            return message.warning('请输入正确的邮箱格式')
         }
         if(commentinfo.content.length===0){
             return message.warning('内容不可为空')
         }
         else{
            if(twocomment){
                console.log(commentinfo,rid,"VVVVV");
                postdata({...commentinfo,rid})
            }else{
                console.log(commentinfo,id);
                postdata({...commentinfo,rid:id})
            }
         }
        setvisible(false)
    }
    const handleCancel =()=>{//箭头函数
        setvisible(false)
          console.log("cancle");
    }
    const isEmail=(str)=>{
    const re=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
      if (re.test(str) !== true) {
        return false;
      }else{
        return true;
      }
    }
    const postdata = async (data)=>{//箭头函数
        let BrowserInfo = getBrowserInfo()[0].split("/")
        const browserType = BrowserInfo[0].charAt(0).toUpperCase() + BrowserInfo[0].slice(1)
        const version = BrowserInfo[1]
        const equipment = browserType+"("+version+")"
        const location = window.city
        console.log(browserType,version);
        console.log(data);
        console.log(uuidv4());
        console.log(window.device);
        const replydata = {...data,id:uuidv4(),device:window.device,like:"0",dislike:"0",equipment,location}
        console.log(replydata);
        let result = await reqSaveComment(replydata)
        const {status} = result
        if(status === 0){
            message.success("谢谢您宝贵的评论，您的评论再审核后方可展示",3)
        }else{
            message.warn("评论失败请稍后重试",2)
        }
        
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
                    avatar={<Avatar style={{height:"100%",width:"100%"}} src={`http://q4.qlogo.cn/g?b=qq&nk=${email}&s=3`} alt={`${name}`} />}
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
                        <Button key="back" style={{height:"25px",margin:"10px"}}  onClick={handleCancel}>
                            返回
                        </Button>,
                        <Button key="submit" type="primary" style={{height:"25px",margin:"10px"}}  onClick={handleOk}>
                            提交评论
                        </Button>,
                    ]}
                >

                    <Input  placeholder="输入您的笔名" style={{height:"33px", marginBottom: '10px' }} 
                           onChange={(e) => {setcommentinfo({...commentinfo,name:e.target.value})}} />
                   
                   <div style={{ display:"flex",justifyContent:"space-around",width:"56%"}}>
                <Input  placeholder="请输入QQ邮箱邮箱"style={{ marginBottom:"20px",height:"33px",opacity:"0.7",color:"black" }} onChange={(e) => { setcommentinfo({...commentinfo,email:e.target.value})} }/>
                    <span>
                        <Avatar  size={45} src={isEmail(commentinfo.email) ? "https://q4.qlogo.cn/g?b=qq&nk=" + commentinfo.email + "&s=3" : ""} />
                            </span>
                     </div>
                    <TextArea showCount rows={4} placeholder="输入您的留言" onChange={(e) => { setcommentinfo({...commentinfo,content:e.target.value})}} />


                </Modal>
                </Comment>
                
    )
}
export default CommentUI;