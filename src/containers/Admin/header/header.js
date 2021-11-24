import { Menu } from 'antd';
import React from "react";
import  * as Icon from '@ant-design/icons';
import { Link} from 'react-router-dom';
import './header.min.css'
import logo from '../../../static/logo.png'
import menuList from '../../../config/menu_config'
const { SubMenu } = Menu;
const Header = ()=>{//箭头函数
    const [current, setcurent] = React.useState('');
    
    const handleClick = e => {
        setcurent({current:e.key})
        //判断路径，如果为互动路由，切换路由时停止播放音乐
        // if(e.key !== "interactive"){
        //   window.player.pause()
        // }
        
        
      };
      const menus = ['admin','actualcombat','life','record','interactive','about','more','bar','line','pie']
    const hasAuth = (item)=>{//箭头函数
        const menusList = menus.toString().split(',')
        if(!item.children){
            return menusList.find((item2)=>{return item2 === item.key})
          }
        else{
            return item.children.some((item3)=>{return menusList.indexOf(item3.key) !== -1})
          }
        
        }
         const createMenu = (target)=>{//箭头函数
            return (target.map((item)=>{//箭头函数
              if(hasAuth(item)){
              if(!item.children){
                return(
                <Menu.Item key={item.key}>
                  <span>{
                    React.createElement(
                      Icon[item.icon],
                      
                    )
                  }</span>
                  <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
                )}else{
                  return(
      <SubMenu key={item.key} icon={React.createElement(Icon[item.icon],{})} title={<span>{item.title}</span>}>
        {
          createMenu(item.children)
        }
        
      </SubMenu> 
                  )
                }
              }
              else{
                return false
              }
        }))
          }
      return(
          <div id="scrolldisplay" className='headerall'>
              <div className='headerleft'>
                  <img src={logo} alt=""/>
                  <span>Hello</span></div>
              <div className="headerright">
            <Menu  theme='dark' className="headermenu"  onClick={handleClick} selectedKeys={[current]} mode="horizontal">
              {
                createMenu(menuList)
              }
        </Menu></div>
            
        </div>
      
    )
}
export default Header