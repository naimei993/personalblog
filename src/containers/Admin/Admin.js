import { Layout } from 'antd';
import './css/admin.min.css'
const { Header, Footer,  Content } = Layout;






const Admin = ()=>{//箭头函数
      return(
        <Layout className='admin'>
        <Header className='header'>Header</Header>
        <Content className='content'>Content</Content>
        <Footer className='foot'>Footer</Footer>
      </Layout>
      )
}
export default Admin;