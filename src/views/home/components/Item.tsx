import React from 'react'
import './item.scss'
import logo from '@/assets/logo/市水务局.webp' // I think react is built-in module to import the image
import {Button} from 'antd'

const GovItem: React.FC = () => {
    return (
        <div className="flex-center govItem">
            <div className="flex-center govItem_left">
                <div className="flex-column govItem_left_logo">
                    <img src={logo} />
                    <span>点击查看详情</span>
                </div>
            </div>
            <div className="flex-column-no-align govItem_right">
                <span className="govItem_right_title">市水务局</span>
                <div className="flex-space-around govItem_right_vote">
                    <div className="flex-column-no-align govItem_right_wrap">
                        <span className="grw_text">100</span>
                        <Button className="grw_btn" type="primary">
                            好
                        </Button>
                    </div>

                    <div className="flex-column-no-align govItem_right_wrap">
                        <span className="grw_text">100</span>
                        <Button className="grw_btn grw_btn-black" type="primary">
                            一般
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GovItem
