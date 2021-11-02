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
import Contents from './content/content'
const { Header, Content,Footer} = Layout;
const Admin = ()=>{//箭头函数
      return(
        <Layout className='admin'>
        <Header className='header'><HeaderTop/></Header>
        <BackTop>
        <RocketOutlined />
        </BackTop>
        <Content className='content'>
        <Switch>
                <Route path="/admin" component={()=>(<Contents/>)} />
                <Route path="/actualcombat" component={()=>(<ActualCombat/>)} />
                <Route path="/interactive" component={()=>(<Interactive/>)}/>
                <Route path="/life" component={()=>(<Life/>)}/>
                <Route path="/record" component={()=>(<Record/>)}/>
                <Route path="/about" component={()=>(<About/>)}/>
                <Redirect to="/admin"/>
        </Switch>
        </Content>
        <Footer>AAAAAAAAAAa</Footer>
      </Layout>
      )
}
export default Admin;