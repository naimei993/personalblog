import React from 'react';
import { message } from "antd";
import './ActualCombat.min.css'
import 'antd/dist/antd.css';
import {reqActualCombat} from '../../api/index'
import  Content  from "../Admin/content/content";

export const ChildrenContext = React.createContext();
const ActualCombat = ()=>{//箭头函数
    const [dataSource, setdataSource] = React.useState('')
    const [searchValue, setsearchValue] = React.useState('');
    React.useEffect(()=>{
     const getList = async ()=>{
        let result = await reqActualCombat()
        const {status,msg,data} = result
        if(status === 0){
          setdataSource(data)
          console.log(data,"ACACACACACACACACA");
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
    console.log(searchValue,"ActualCombat");
    return (
      <ChildrenContext.Provider value={searchValue}>
         <Content dataSource={dataSource} setsearchValue={setsearchValue}/>
     </ChildrenContext.Provider>
    )
    }
export default ActualCombat;