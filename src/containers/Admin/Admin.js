import React from 'react';
import { Layout,BackTop} from 'antd';
import { Route,Switch,Redirect } from 'react-router'
import {RocketTwoTone} from '@ant-design/icons'
import './css/admin.min.css' 
import BlogDetail from '../BlogDetail/BlogDetail';
import ActualCombat from '../ActualCombat/ActualCombat'
import Interactive from '../Interactive/Interactive'
import Life from '../Life/Life'
import Record from '../Record/Record'
import About from '../About/About'
import HeaderTop from './header/header';
import Main from '../Main/Main'

const { Header, Content} = Layout;
const Admin = ()=>{//箭头函数

      return(
        <Layout className='admin'>
        <Header className='header' id="header"><HeaderTop/></Header>
        <Content id="backTop" className='content'>
        <BackTop target={() => document.getElementById('backTop')} >
        <div className="ant-back-top-inner" ><RocketTwoTone twoToneColor="#eb2f96" style={{fontSize:"30px"}}/></div>
       </BackTop>
        <Switch>
                <Route path="/admin" component={Main} />
                <Route path="/blog/:id" component={BlogDetail}/>
                <Route path="/actualcombat" component={ActualCombat} />
                <Route path="/interactive" component={Interactive}/>
                <Route path="/life" component={Life}/>
                <Route path="/record" component={Record}/>
                <Route path="/about" component={About}/>
                <Redirect to="/admin"/>
        </Switch>
        </Content>
      </Layout>
      )
}
export default Admin;