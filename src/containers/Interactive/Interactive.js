import {Row,Col,Tooltip,Comment, Avatar} from 'antd'
import React from 'react'
import ReactAplayer from 'react-aplayer';
import {LikeOutlined,DislikeOutlined} from '@ant-design/icons'
import {reqCityName} from '../../api/index'
// import Rightdetail from '../Admin/Rightdetail/Rightdetail'


const Interactive = ()=>{//箭头函数
    const [action,setaction] = React.useState(null)
    const [ComInformation,setComInformation] = React.useState({likes:0,dislike:0})
    const props = {
        theme: '#F57F17',
        lrcType: 3,
        audio: [
            //http://www.jsfan.net:3001/search/suggest?keywords=花魁   寻找id
            //http://www.jsfan.net:3001/lyric?id=553753244 id找歌词
            {
                name: '微微',
                artist: '傅如乔',
                url: 'https://www.jsfan.net/upload/微微.mp3',
                cover: 'https://www.jsfan.net/upload/微微musicimg.jpg',
                lrc: 'http://www.jsfan.net:3001/lyric?id=1433434738',
                theme: '#ebd0c2'
            },
            {
                name: '无人之岛',
                artist: '任然',
                url: 'https://www.jsfan.net/upload/无人之岛.mp3',
                cover: 'https://www.jsfan.net/upload/无人之岛img.jpg',
                lrc: 'http://www.jsfan.net:3001/lyric?id=493735012',
                theme: '#ebd0c2'
            },
            {
                name: '你的答案',
                artist: '阿冗',
                url: 'https://www.jsfan.net/upload/你的答案.mp3',
                cover: 'https://www.jsfan.net/upload/你的答案阿.jpg',
                lrc: 'http://www.jsfan.net:3001/lyric?id=1400256289',
                theme: '#ebd0c2'
            },
            {
                name: '花魁', 
                artist: '徐良',
                url: 'https://www.jsfan.net/upload/花魁.mp3',
                cover: 'https://www.jsfan.net/upload/花魁徐良.jpg',
                lrc: 'http://www.jsfan.net:3001/lyric?id=553753244',
                theme: '#ebd0c2'
            },
            {
                name: '权力的游戏',
                artist: 'Ramin Djawadi', //作者名
                url: 'https://www.jsfan.net/upload/权力的游戏.mp3',
                cover: 'https://p1.music.126.net/ME34HLKlJtYGruIxomhIOQ==/7987951976023943.jpg',
                  lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
                theme: '#ebd0c2'
            },
            {
                name: '刚好遇见你',
                artist: '李玉刚',
                url: 'https://www.jsfan.net/upload/刚好遇见你.mp3',
                cover: 'https://www.jsfan.net/upload/刚好遇见你.jpg',
                lrc: 'http://www.jsfan.net:3001/lyric?id=459159104',
                theme: '#ebd0c2'
            },
            {
                name: '下山',
                artist: '要不要买菜',
                url: 'https://www.jsfan.net/upload/下山.mp3',
                cover: 'https://www.jsfan.net/upload/下山(要不要买菜).jpg',
                lrc: 'http://www.jsfan.net:3001/lyric?id=1404885266',
                theme: '#ebd0c2'
            },
        ],
    };
     // event binding example
    const onPlay = () => {
        // console.log('on play');
    };
   const onPause = () => {
        // console.log('on pause');
    };
    // example of access aplayer instance
    let aap;
   const onInit = ap => {
        aap = ap;
    };
   const like = () => {
       console.log("LIKE");
       console.log(window.city);
       console.log(window.device);
       getCityName(window.city)
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
    const getCityName = async ()=>{
        let result = await reqCityName()
        console.log(result);
    }
    let BrowserInfo = getBrowserInfo()[0].split("/")
    let steam = navigator.appVersion
    const actions = [
        <span key="comment-basic-like">
            <Tooltip title="赞同">
            <LikeOutlined  style={{fontSize:"14px"}} onClick={like} />
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
            <DislikeOutlined  style={{fontSize:"14px"}}/>
                {/* <Icon
                    type="dislike"
                    theme={action === 'disliked' ? 'filled' : 'outlined'}
                    onClick={dislike}
                /> */}
            </Tooltip>
            <span style={{ paddingLeft: 8, cursor: 'auto' }}>{ComInformation.dislike}</span>
        </span>,
    //     <span key="comment-basic-address">
    //     <img src={this.getimgurl(this.state.data.device)} alt="" style={{height:'.75rem',position:'relative',top:'.3rem',paddingRight:'.1rem'}}/>
    //     {this.state.data.device}
    // </span>,
    // <span key="comment-basic-address">
    //     <img src={this.getimgurl(this.state.data.info)}  alt="" style={{height:'.9rem',position:'relative',top:'.2rem',paddingRight:'.1rem'}}/>
    //     {this.state.data.info=='null(undefined)'?null:this.state.data.info}</span>,
    // // this.props.nopinglun ? null :
    //     <span key="comment-basic-reply-to" onClick={this.showModal} style={{color:'#1890ff'}}>回复</span>,
    ];
    return(
        <Row className='comm-main' type='flex' justify='center'>
        <Col className='comma-left' xs={24} sm={24} md={16} lg={18} xl={14} >
        <div>
        <span>浏览器：{BrowserInfo[0]}版本：{BrowserInfo[1]}{steam}</span>
        <ReactAplayer
          {...props}
          onInit={onInit}
          onPlay={onPlay}
          onPause={onPause}
        />
      </div>
      <Comment
    actions={actions}
    author={<a href="/#">Han Solo</a>}
    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
  />
                    

        </Col>
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4} >
        {/* <Rightdetail /> */}
        </Col>


            </Row>
    )
}
export default Interactive;