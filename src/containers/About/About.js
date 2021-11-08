
import {Row,Col} from 'antd'
import Rightdetail from '../Admin/Rightdetail/Rightdetail';
const About = ()=>{//箭头函数
    return(
        <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14} >
        <div className="contentTop">
        </div>
        </Col>
        <Rightdetail />
        </Row>
    )
}
export default About;