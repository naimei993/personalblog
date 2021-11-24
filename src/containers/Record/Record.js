import {Row,Col } from 'antd';
import Rightdetail from '../Admin/Rightdetail/Rightdetail'
import './Record.min.css'

const Record = ()=>{//箭头函数
    return(
        <Row className='comm-main' type='flex' justify='center'>
            <Col className='comma-left' xs={24} sm={24} md={16} lg={18} xl={14} >
            
                </Col>
            <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4} >
                    <Rightdetail />
                </Col>
        </Row>
    )
}
export default Record;