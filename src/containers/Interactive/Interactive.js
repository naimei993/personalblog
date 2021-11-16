import {Row,Col,Tooltip,Comment, Avatar} from 'antd'
import React from 'react'
import ReactAplayer from 'react-aplayer';
import {LikeOutlined,DislikeOutlined} from '@ant-design/icons'
import {BASE_URL} from '../../config/index'
import Commentdata from '../../config/Comment'
// import Rightdetail from '../Admin/Rightdetail/Rightdetail'
import './Interactive.min.css'

const Interactive = ()=>{//箭头函数
    
  
    const [action,setaction] = React.useState(null)
    const [ComInformation,setComInformation] = React.useState({likes:0,dislike:0,device:'Windows 10',info:''})
    React.useEffect(()=>{
        
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
                name: '无人之岛',
                artist: '任然',
                url: `${BASE_URL}/upload/music/无人之岛.mp3`,
                cover: `${BASE_URL}/upload/music/无人之岛.jpg`,
                lrc: `${BASE_URL}/upload/music/无人之岛.lrc`,
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
    const pinglundata = Commentdata.filter((item) => { return !item.rid })
    const pinglunindata = (Commentdata.filter((item) => { return item.rid })).reverse()
     // event binding example
    const onPlay = () => {
        console.log('on play');
    };
   const onPause = () => {
        console.log('on pause');
    };
    // example of access aplayer instance
    let aap;
   const onInit = ap => {
        aap = ap;
    };
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
   const like = () => {
       console.log("LIKE");
       console.log(window.device);
        console.log(window.city,"CITY",window.ip,"IP"); 
        console.log(window.device);
        console.log(getimgurl(window.device));
       
        // if (this.state.condition === 0) {
        //     let a = parseInt(this.state.likes) + 1
        //     this.setState({
        //         likes: a,
        //         // dislikes: 0,
        //         action: 'liked',
        //         condition:1
        //     }, () => {
        //         this.likesordislikes()
        //     });
            
        // }

    };
    const dislike = () => {
        console.log("DISLIKE");
         // if (this.state.condition === 0) {
         //     let a = parseInt(this.state.likes) + 1
         //     this.setState({
         //         likes: a,
         //         // dislikes: 0,
         //         action: 'liked',
         //         condition:1
         //     }, () => {
         //         this.likesordislikes()
         //     });
             
         // }
 
     };
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
    let steam = navigator.appVersion
    console.log(BrowserInfo,steam );
    const actions = [
        <span key="comment-basic-like">
            <Tooltip title="赞同">
            <LikeOutlined  style={{fontSize:"16px"}} onClick={like} />
                {/* <Icon
                    type="like"
                    theme={action === 'liked' ? 'filled' : 'outlined'} 
                    onClick={like}
                /> */}
            </Tooltip>
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{ComInformation.likes}</span>
        </span>,
        <span key=' key="comment-basic-dislike"'>
            <Tooltip title="无趣" onClick={dislike}>
            <DislikeOutlined  style={{fontSize:"16px"}}/>
                {/* <Icon
                    type="dislike"
                    theme={action === 'disliked' ? 'filled' : 'outlined'}
                    onClick={dislike}
                /> */}
            </Tooltip>
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{ComInformation.dislike}</span>
        </span>,
        <span key="comment-basic-address">
        <img src={getimgurl(ComInformation.device)} alt="" style={{height:'12px',position:'relative',top:"0",paddingRight:'2px',marginLeft:'5px'}}/>
        {ComInformation.device}
    </span>,
    <span className="AA" key="comment-basic-address" style={{marginRight:"15px"}}>
        <img src={getimgurl(browserType)}  alt="" style={{height:'16px',position:'relative',top:"0",paddingRight:'5px',marginLeft:'5px'}}/>
       {browserType}({version})</span>,
    // this.props.nopinglun ? null :
        <span key="comment-basic-reply-to" onClick={console.log("AAA")} style={{color:'#1890ff'}}>回复</span>,
    ];
    return(
        <Row className='comm-main' type='flex' justify='center'>
        <Col className='comma-left' xs={24} sm={24} md={16} lg={18} xl={14} >
       
        <ReactAplayer
          {...props}
          onInit={onInit}
          onPlay={onPlay}
          onPause={onPause}
        />
         {
          
         pinglundata.length ? pinglundata.map((item) => {
            console.log(pinglundata);
            console.log(pinglunindata);
                    return(
                        <Comment
                key={item.id}
                actions={actions}
                author={<a href="/#">{item.name}</a>}
                datetime={<div><span style={{marginRight:"10px"}}>{item.time}</span><span>{window.city}</span></div>}
                avatar={<Avatar style={{height:"32px",width:"32px"}} src={`${BASE_URL}/upload/${item.img}`} alt={`${item.name}`} />}
                content={
                  <p style={{marginTop:"10px",marginBottom:"15px"}}>
                  {item.content}
                  </p>
                }
              >   
              {
              pinglunindata.length ? pinglunindata.map((itemin) => {
                  return(
                    item.id == itemin.rid ? <Comment
                    key={itemin.id}
                    actions={actions}
                    author={<a href="/#">{itemin.name}</a>}
                    datetime={<div><span style={{marginRight:"10px"}}>{itemin.time}</span><span>{window.city}</span></div>}
                    avatar={<Avatar style={{height:"32px",width:"32px"}} src={`${BASE_URL}/upload/${itemin.img}`} alt={`${itemin.name}`} />}
                    content={
                      <p style={{marginTop:"10px",marginBottom:"15px"}}>
                      {itemin.content}
                      </p>
                    }
                >  
                </Comment> 
                : null
                  )
                

              }):null}
              </Comment>
                )
        }) :null
    }
        {/* {      

        
            Commentdata.map((item)=>{
                console.log(pinglundata);
                console.log(pinglunindata);
                console.log(item);
                return(
                <Comment
                key={item.id}
                actions={actions}
                author={<a href="/#">{item.name}</a>}
                datetime={<div><span style={{marginRight:"10px"}}>{item.time}</span><span>{window.city}</span></div>}
                avatar={<Avatar style={{height:"32px",width:"32px"}} src={`${BASE_URL}/upload/${item.img}`} alt={`${item.name}`} />}
                content={
                  <p style={{marginTop:"10px",marginBottom:"15px"}}>
                  {item.content}
                  </p>
                }
              >   
              {
                  item.children ? item.children.map((item1)=>{
                      return(
                    <Comment
                        key={item1.id}
                        actions={actions}
                        author={<a href="/#">{item1.name}</a>}
                        datetime={<div><span style={{marginRight:"10px"}}>{item1.time}</span><span>{window.city}</span></div>}
                        avatar={<Avatar style={{height:"32px",width:"32px"}} src={`${BASE_URL}/upload/${item1.img}`} alt={`${item1.name}`} />}
                        content={
                          <p style={{marginTop:"10px",marginBottom:"15px"}}>
                          {item1.content}
                          </p>
                        }
                    >   
                    </Comment>
                      )
                  }) : null
              }
              
              </Comment>
                )
                
            })
        } */}
     
                    

        </Col>
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4} >
        {/* <Rightdetail /> */}
        </Col>


            </Row>
    )
}
export default Interactive;