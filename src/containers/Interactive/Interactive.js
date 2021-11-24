import {Row,Col,message, Input,Button,Avatar,Divider} from 'antd'
import React from 'react'
import ReactAplayer from 'react-aplayer';
import { v4 as uuidv4 } from 'uuid';
import {BASE_URL} from '../../config/index'
import Rightdetail from '../Admin/Rightdetail/Rightdetail'
import {reqGetComment,reqSaveComment} from '../../api/index'
import CommentUI  from './comment/comment';
import './Interactive.min.css'

const { TextArea } = Input;


const Interactive = ()=>{//箭头函数
    // const [action,setaction] = React.useState(null)
    const [ComInformation,setComInformation] = React.useState([])
    const[makecomment,setmakecomment] = React.useState({name:"",email:"",content:""})
    
    React.useEffect(()=>{
        const getComment = async ()=>{
            let result = await reqGetComment()
            const {status,msg,data} = result
            // console.log( 
            //   `%c `,
            //   `padding:100px; 
            //   background-image: url('http://p4.music.126.net/GlZxXoxqkKtXFOnQFUtzZg==/109951165461315792.jpg');
            //   background-size: cover; 
            //   background-position: center center;`
            //   );//输出图片
            if(status === 0){
                setComInformation(data)
              console.log(data,"Comment Comment");
            }else{
              message.error(msg,1)
            }
          }
          getComment()
    },[])
    const props = {
        theme: '#F57F17',
        lrcType: 3,
        audio: [
            //http://www.jsfan.net:3001/search/suggest?keywords=花魁   寻找id
            //http://www.jsfan.net:3001/lyric?id=553753244 id找歌词
            {
                name: '微微',
                artist: '傅如乔',
                url: `${BASE_URL}/upload/music/微微.mp3`,
                cover: `${BASE_URL}/upload/music/微微.jpg`,
                lrc: `${BASE_URL}/upload/music/微微.lrc`,
                theme: '#ebd0c2'
            },
            {
                name: '阿依莫', 
                artist: '阿吉太组合',
                url: `${BASE_URL}/upload/music/阿依莫.mp3`,
                cover: `${BASE_URL}/upload/music/阿依莫.jpg`,
                lrc: `${BASE_URL}/upload/music/阿依莫.lrc`,
                theme: '#ebd0c2'
            },
            {
                name: '你的答案',
                artist: '阿冗',
                url: `${BASE_URL}/upload/music/你的答案.mp3`,
                cover: `${BASE_URL}/upload/music/你的答案阿.jpg`,
                lrc: `${BASE_URL}/upload/music/你的答案.lrc`,
                theme: '#ebd0c2'
            },
            {
                name: '不要怕&啊杰咯',
                artist: '莫西子诗',
                url: `${BASE_URL}/upload/music/不要怕&啊杰咯.mp3`,
                cover: `${BASE_URL}/upload/music/不要怕&啊杰咯.jpg`,
                lrc: `${BASE_URL}/upload/music/不要怕&啊杰咯.lrc`,
                theme: '#ebd0c2'
            },
            {
                name: '杀死那个石家庄人',
                artist: '万能青年旅舍',
                url: `${BASE_URL}/upload/music/杀死那个石家庄人.mp3`,
                cover: `${BASE_URL}/upload/music/杀死那个石家庄人.jpg`,
                lrc: `${BASE_URL}/upload/music/杀死那个石家庄人.lrc`,
                theme: '#ebd0c2'
            },{
                name: '权力的游戏',
                artist: 'Ramin Djawadi', //作者名
                url: `${BASE_URL}/upload/music/权力的游戏.mp3`,
                cover: `${BASE_URL}/upload/music/权力的游戏.jpg`,
                  lrc: `${BASE_URL}/upload/music/权力的游戏.lrc`,
                theme: '#ebd0c2'
            },
        ],
    };
    const pinglundata = (ComInformation.filter((item) => { return !item.rid })).reverse()//一级评论内容
    const pinglunindata = (ComInformation.filter((item) => { return item.rid })).reverse()//二级评论内容
    //以下是 react-aplayer调用的三个函数，播放，暂停，初始化
    const onPlay = () => {
        // console.log('on play');
    };
   const onPause = () => {
        // console.log('on pause');
    };
    const onInit = ap => {
        window.player = ap;
     };

     
//        console.log(window.device);
//         console.log(window.city,"CITY",window.ip,"IP"); 
//         console.log(window.device);
    const isEmail=(str)=>{
        const re=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (re.test(str) !== true) {
          return false;
        }else{
          return true;
        }
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
    let BrowserInfo = getBrowserInfo()[0].split("/")
    const browserType = BrowserInfo[0].charAt(0).toUpperCase() + BrowserInfo[0].slice(1)
    const version = BrowserInfo[1]
    const equipment = browserType+"("+version+")"
    const getCommentinfo = ()=>{//箭头函数
        console.log(makecomment);
        const replydata = {...makecomment,id:uuidv4(),location:window.city,ip:window.ip,device:window.device,equipment:equipment,rid:null}  
        postCommentinfo(replydata)
    }
    const postCommentinfo = async (replydata)=>{//箭头函数
    console.log(replydata);
      let result = await reqSaveComment(replydata)
      const {status} = result
      if(status === 0){
        message.success("谢谢您宝贵的评论，您的评论在审核后方可展示",3)
    }else{
        message.warn("评论失败请稍后重试",2)
    }
    }
    return(
        <Row className='comm-main' type='flex' justify='center'>
        <Col className='comma-left' xs={24} sm={24} md={16} lg={18} xl={14} >
       
        <ReactAplayer
          {...props}
          onInit={onInit}
          onPlay={onPlay}
          onPause={onPause}
        />
        <Divider style={{marginTop:"40px"}}>欢迎您的评论</Divider>
        <div className="comment-top" >
        <Input placeholder="输入您的笔名" style={{ marginBottom:"20px",width:"56%",height:"33px",opacity:"0.7" }}onChange={(e) => { setmakecomment({...makecomment,name:e.target.value})  }} />
        <div style={{ position: 'relative',display:"flex",justifyContent:"space-around",width:"56%"}}>
                <Input  placeholder="请输入QQ邮箱邮箱"style={{ marginBottom:"20px",height:"33px",opacity:"0.7",color:"black" }} onChange={(e) => { setmakecomment({...makecomment,email:e.target.value})} }/>
                    <span>
                        <Avatar style={{marginTop:"-10px"}} size={45} src={isEmail(makecomment.email) ? "https://q4.qlogo.cn/g?b=qq&nk=" + makecomment.email + "&s=3" : ""} />
                            </span>
                     </div>
        <TextArea style={{ marginBottom:"20px",width:"56%",opacity:"0.7" }} rows={4} placeholder="输入您的留言" onChange={(e) => { setmakecomment({...makecomment,content:e.target.value}) }} />
        <Button type="primary" style={{width:"56%",height:"30px"}} onClick={()=>{getCommentinfo()}}>欢迎您的评论</Button>
        </div>
        <Divider style={{marginBottom:"40px"}}>您的评论在审核后方可展示</Divider>
         {
          
         pinglundata.length ? pinglundata.map((item) => {
                if(item.isshow === "true"){
                    return(
                        <CommentUI key={item.id} data={item} 
                
              >   
              {
                 
              pinglunindata.length ? pinglunindata.map((itemin) => {
                if(itemin.isshow === "true"){
                    if(item.id === itemin.rid){
                        return(<CommentUI 
                            id={item.id}
                            twocomment={true}
                            key={itemin.id} 
                            data={itemin} 
                        >  </CommentUI>)
                    }else{
                        return null
                    }
                }else{
                    return null
                }
                

              }):null}
              </CommentUI>
                )
                }else{
                    return null
                }
                    
        }) :null
    }
        </Col>
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4} >
        <Rightdetail />
        </Col>


            </Row>
    )
}
export default Interactive;