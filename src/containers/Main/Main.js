
import React from 'react'
import { message } from "antd";
import {reqArticleList} from '../../api/index'
import  Content  from "../Admin/content/content";
export const ChildrenContext = React.createContext();
const Main = ()=>{
    const [dataSource, setdataSource] = React.useState('')
    const [searchValue, setsearchValue] = React.useState('');
    React.useEffect(()=>{
     const getList = async ()=>{
        let result = await reqArticleList()
        const {status,msg,data} = result
        // console.log( 
        //   `%c `,
        //   `padding:100px; 
        //   background-image: url('http://p4.music.126.net/GlZxXoxqkKtXFOnQFUtzZg==/109951165461315792.jpg');
        //   background-size: cover; 
        //   background-position: center center;`
        //   );//输出图片
        if(status === 0){
          setdataSource(data)
          console.log(data,"Main Main");
        }else{
          message.error(msg,1)
        }
      }
      getList()
      const searchArticle = async ()=>{
    //     let result = await reqArticleList()
    //     const {status,msg,data} = result
    //     if(status === 0){
    //       setdataSource(data)
    //       console.log(data,"Main Main");
    //     }else{
    //       message.error(msg,1)
    //     }
    
      }
      searchArticle()
      
    },[])
    console.log(searchValue,'MainVVVVVVVVVVVVVVVVVVVVVvv');
    return(
        <ChildrenContext.Provider value={searchValue}>
            <Content dataSource={dataSource} setsearchValue={setsearchValue}/>
         </ChildrenContext.Provider>
        
    )
}
export default Main