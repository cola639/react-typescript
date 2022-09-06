import React from 'react'
import './item.scss'
import logo from 'assets/logo/市水务局.webp' // I think react is built-in module to import the image

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
                <div className="flex-space-around">
                    <div className="flex-column-no-align govItem_right_wrap">
                        <span className="grw_text">100票</span>
                        {/* <van-button
            className="grw_btn"
            :color="userOnlineVoteTimes <= 0 ? '#999' : '#D31C1C'"
            @click="hadnleVote('00')"
            :loading="loadingGood"
            >好
          </van-button> */}
                    </div>

                    <div className="flex-column-no-align govItem_right_wrap">
                        <span className="grw_text">100</span>
                        {/* <van-button
            className="grw_btn"
            :color="userOnlineVoteTimes <= 0 ? '#999' : ''"
            @click="hadnleVote('01')"
            :loading="loadingGeneral"
            >一般</van-button
          > */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GovItem
