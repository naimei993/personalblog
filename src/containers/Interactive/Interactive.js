import {Row,Col,message} from 'antd'
import React from 'react'
import ReactAplayer from 'react-aplayer';
import {BASE_URL} from '../../config/index'
import Rightdetail from '../Admin/Rightdetail/Rightdetail'
import {reqGetComment} from '../../api/index'
import CommentUI  from './comment/comment';
import './Interactive.min.css'


const Interactive = ()=>{//箭头函数
    
    
    // const [action,setaction] = React.useState(null)
    const [ComInformation,setComInformation] = React.useState([])
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
    const pinglundata = ComInformation.filter((item) => { return !item.rid })
    const pinglunindata = (ComInformation.filter((item) => { return item.rid })).reverse()
    console.log(pinglundata,"AAAAAAAAAAAAAAAAAA");
    console.log(pinglunindata,"BBBBBBBBBBBBBBBBBBBB");
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
        console.log("on Init");
         aap = ap;
         console.log(aap);

     };
     console.log(aap);
     
    
  
//    const like = () => {
//        console.log("LIKE");
//        console.log(window.device);
//         console.log(window.city,"CITY",window.ip,"IP"); 
//         console.log(window.device);
       
//         // if (this.state.condition === 0) {
//         //     let a = parseInt(this.state.likes) + 1
//         //     this.setState({
//         //         likes: a,
//         //         // dislikes: 0,
//         //         action: 'liked',
//         //         condition:1
//         //     }, () => {
//         //         this.likesordislikes()
//         //     });
            
//         // }

//     };
//     const dislike = () => {
//         console.log("DISLIKE");
//          // if (this.state.condition === 0) {
//          //     let a = parseInt(this.state.likes) + 1
//          //     this.setState({
//          //         likes: a,
//          //         // dislikes: 0,
//          //         action: 'liked',
//          //         condition:1
//          //     }, () => {
//          //         this.likesordislikes()
//          //     });
             
//          // }
 
//      };
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
                    return(
                        <CommentUI key={item.id} data={item} like={item.like} dislike={item.dislike} device={item.device} equipment={item.equipment}
                
              >   
              {
                 
              pinglunindata.length ? pinglunindata.map((itemin) => {
                    if(item.id === itemin.rid){
                        
                        return(<CommentUI 
                            id={item.id}
                            twocomment={true}
                            key={itemin.id} 
                            data={itemin} 
                            like={itemin.like} 
                            dislike={itemin.dislike} 
                            device={itemin.device} 
                            equipment={itemin.equipment}
                        >  </CommentUI>)
                    }else{
                        return null
                    }
                  
                

              }):null}
              </CommentUI>
                )
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