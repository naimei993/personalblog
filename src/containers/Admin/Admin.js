import { Layout } from 'antd';
import { Route,Switch,Redirect } from 'react-router'
import './css/admin.min.css'
import ActualCombat from '../ActualCombat/ActualCombat'
import Interactive from '../Interactive/Interactive'
import Life from '../Life/Life'
import Record from '../Record/Record'
import About from '../About/About'
import HeaderTop from './header/header';
const { Header, Content,Footer} = Layout;
const Admin = ()=>{//箭头函数
      return(
        <Layout className='admin'>
        <Header className='header'><HeaderTop/></Header>
        <Content className='content'>Content
        <Switch>
                <Route path="/actualcombat" component={()=>(<ActualCombat/>)} />
                <Route path="/interactive" component={()=>(<Interactive/>)}/>
                <Route path="/life" component={()=>(<Life/>)}/>
                <Route path="/record" component={()=>(<Record/>)}/>
                <Route path="/about" component={()=>(<About/>)}/>
                <Redirect to="/admin"/>
              </Switch>
        </Content>
        <Footer>AAA</Footer>
      </Layout>
      )
}
export default Admin;