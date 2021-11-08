import { Col,Avatar,Breadcrumb,Divider,Tooltip} from 'antd';
import { EnvironmentOutlined,MailOutlined,GithubOutlined,QqOutlined,WechatOutlined,LinkOutlined} from '@ant-design/icons';
import img5 from './img5.jpg'

const Rightdetail = ()=>{//箭头函数
    const AvatarPic = ()=>{
        return(
          <img src={img5} alt=""/>
        )
      }
    return(
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4} >
        <div className="contentRight">
          <div className="UserImg-box">
        <Avatar
          size={90}
          icon={<AvatarPic/>}
        />
        
        
          </div>
          <div style={{color:'#f8bc31' ,marginTop:'5px',fontSize:"22px"}}>夜已成殇</div>
          <div style={{color:'#22a2c3' ,marginTop:'5px',fontSize:"12px"}}>软件工程专业</div>
        
        <div >
        <Breadcrumb className="detailmsg" separator=" ">
          <Breadcrumb.Item >
            <EnvironmentOutlined style={{fontSize:"14px"}} />
            <span>重庆</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item >
           <span>前端：React + Antd Design</span>
         </Breadcrumb.Item>
         <Breadcrumb.Item >
           <span>后端：Node + Mysql</span>
         </Breadcrumb.Item>
         <Breadcrumb.Item >
         <MailOutlined style={{fontSize:"14px"}}/>
           <span>2267225243@qq.com</span>
         </Breadcrumb.Item>
         <Breadcrumb.Item >
         <span></span>
         </Breadcrumb.Item>
          </Breadcrumb>,
        </div>
        <Divider>社交账号</Divider>
        <div className="social">
        <Tooltip  title="GitHub">
        <a href="https://github.com/naimei993" target="_blank" rel="noopener noreferrer">
        <Avatar
          size={36}
          icon={<GithubOutlined />}
        />
        </a>
        </Tooltip>
        <Tooltip  title="QQ">
        <a href="https://qm.qq.com/cgi-bin/qm/qr?k=Oumjk86LEy6oc2YlyyLRosL9PcsRE1Vg&noverify=0" target="_blank" rel="noopener noreferrer">
        <Avatar
          size={36}
          icon={<QqOutlined />}
        />
        </a>
        </Tooltip>
        <Tooltip  title="WeChat">
        <a href="https://u.wechat.com/MPKDw0GfmBWXy28rtJ3l0qA" target="_blank" rel="noopener noreferrer">
        <Avatar
          size={36}
          icon={<WechatOutlined />}
        />
        </a>
        </Tooltip>
        <Tooltip  title="CSDN">
        <a href="https://blog.csdn.net/weixin_45846840?spm=1000.2115.3001.5343" target="_blank" rel="noopener noreferrer">
        <Avatar
          size={36}
          icon={<LinkOutlined />}
        />
        </a>
        </Tooltip>
        </div>
        </div>
 
      </Col>
    )
}
export default Rightdetail