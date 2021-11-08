import { Layout,BackTop} from 'antd';
import { Route,Switch,Redirect } from 'react-router'
import { RocketOutlined } from '@ant-design/icons';
import './css/admin.min.css'
import ActualCombat from '../ActualCombat/ActualCombat'
import Interactive from '../Interactive/Interactive'
import Life from '../Life/Life'
import Record from '../Record/Record'
import About from '../About/About'
import HeaderTop from './header/header';
import Main from '../Main/Main'
import React from 'react';
const { Header, Content} = Layout;
const Admin = ()=>{//箭头函数

      return(
        <Layout className='admin'>
        <Header className='header' id="header"><HeaderTop/></Header>
        <BackTop>
        <RocketOutlined />
        </BackTop>
        <Content className='content'>
        <Switch>
                <Route path="/admin" component={()=>(<Main/>)} />
                <Route path="/actualcombat" component={()=>(<ActualCombat/>)} />
                <Route path="/interactive" component={()=>(<Interactive/>)}/>
                <Route path="/life" component={()=>(<Life/>)}/>
                <Route path="/record" component={()=>(<Record/>)}/>
                <Route path="/about" component={()=>(<About/>)}/>
                <Redirect to="/admin"/>
        </Switch>
        </Content>
      </Layout>
      )
}
export default Admin;