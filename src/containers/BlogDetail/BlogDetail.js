import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {marked} from 'marked'
import { Row,Col,message,Affix,Breadcrumb} from 'antd';
import hljs from "highlight.js";
import {reqBlogContent} from '../../api/index'
import Rightdetail from '../Admin/Rightdetail/Rightdetail';
import './BlogDetail.min.css'
import BlogBar from './BlogBar' //引入博客页导航
const tocify = new BlogBar() //使用
const BlogDetail = ()=>{//箭头函数
    let history = useHistory()
    const [markdownContent, setMarkdownContent] = React.useState(false) //html内容
    React.useState(()=>{//箭头函数
        const postmarkdownContent = async ()=>{
            const Blogid = history.location.pathname.split('/')[2] || ''
            let result = await reqBlogContent(Blogid)
            if(result){
                setMarkdownContent(result)
            }else{
                message.error("初始化失败,请刷新后重试",3)
            }
          }
          postmarkdownContent()
         
           
        
    })
    const renderer = new marked.Renderer()
    renderer.heading = function(text, level, raw) {
      const anchor = tocify.add(text, level);
      return `<a id="${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };
    marked.setOptions({
        renderer: renderer,
        highlight: function (code) {
          return hljs.highlightAuto(code).value;
        },
        gfm: true, // 允许 Git Hub标准的markdown.
        pedantic: false, // 不纠正原始模型任何的不良行为和错误（默认为false）
        sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
        tables: true, // 允许支持表格语法（该选项要求 gfm 为true）
        breaks: false, // 允许回车换行（该选项要求 gfm 为true）
        smartLists: true, // 使用比原生markdown更时髦的列表
        smartypants: false, // 使用更为时髦的标点
      })
    return(
        <div  >
           
    <Row  className='comm-main' type='flex' justify='center'>
  <Col className='comma-left  ' xs={24} sm={24} md={16} lg={18} xl={16} >
  <div className='bread-div'>
              <Breadcrumb>
                <Breadcrumb.Item><Link to="/admin">首页</Link></Breadcrumb.Item>
                {/* <Breadcrumb.Item><a href='/'>视频列表</a></Breadcrumb.Item> */}
                <Breadcrumb.Item>React</Breadcrumb.Item>
              </Breadcrumb>
  </div>
    <div className="contentmaked">
	  <div
		  id="content"
		  className="article-detail"
		  dangerouslySetInnerHTML={{
		      __html: markdownContent ? marked(markdownContent) : null,
			}}
		/>
	</div>
        </Col>
        <Col id="markdownBody" className='comm-right cssniceright' xs={0} sm={0} md={7} lg={5} xl={4} >
        <Rightdetail className="cssniceright" />
        <Affix offsetTop={50}>
            <div className='detailed-nav comm-box cssniceright'  style={{backgroundColor:'rgba(255,255,255,0.6)'}}>
            <div className='nav-title'>文章目录</div>
              <div className='maintoc'>
                {tocify && tocify.render()}
              </div>
              {/* <div className='nomore'>- 文章标题过小(则不显示) -</div> */}
            </div>
          </Affix>
          
        </Col>
        
            </Row>
           
        </div>
        
    )
}

export default BlogDetail