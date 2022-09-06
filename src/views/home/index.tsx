import React from 'react'
import GovItem from './components/Item'

import './index.scss' // difference from xx.modile.css

const OnlineVote: React.FC = () => {
    return (
        <div className="home">
            <div className="home_top">
                <div className="flex-column home_top_banner">投票时间还剩 0天0小时14分33秒</div>
            </div>

            <div className="home_middle">
                <div className="flex-space-around home_middle_info">
                    <div className="flex-column hmi_item">
                        <span>参评单位</span>
                        <span>100</span>
                    </div>
                    <div className="flex-column hmi_item">
                        <span>参评单位</span>
                        <span>100</span>
                    </div>
                    <div className="flex-column hmi_item">
                        <span>参评单位</span>
                        <span>100</span>
                    </div>
                </div>
                <div className="home_middle_list">
                    <span>- 各参评单位 -</span>
                    <GovItem></GovItem>
                    <GovItem></GovItem>
                    <GovItem></GovItem>
                    <GovItem></GovItem>
                    <GovItem></GovItem>
                </div>

                <div className="home_description">
                    <span>- 投票规则 -</span>
                </div>
            </div>

            <div className="home_bottom"></div>
        </div>
    )
}
export default OnlineVote
