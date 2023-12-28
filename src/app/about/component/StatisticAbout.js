import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';
const App = () => (
    <>
    <div className=''>

        <div className='container statistic-section mb-5'>
            <div className='statistic-main'>

                <div className='statistic-div'>
                    <Row gutter={16}>
                        <Col span={50}>
                            <Statistic  title="Product sold" value={100000} />
                        </Col>
                    </Row>

                </div>
                <hr className='horizontal-row-statistic'/>
                <div>
                    <Row gutter={16}>
                        <Col span={50}>
                            <Statistic title="Active Users" value={112893} />
                        </Col>
                    </Row>
                </div>
                <hr className='horizontal-row-statistic'/>
                <div>
                    <Row gutter={16}>
                        <Col span={50}>
                            <Statistic title="Active Users" value={112893} />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
    </>
);
export default App;