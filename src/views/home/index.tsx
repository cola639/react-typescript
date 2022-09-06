import React from 'react'

import './index.scss' // difference from xx.modile.css

const OnlineVote: React.FC = () => {
    return (
        <div className="home">
            <div className="home_top">
                <div className="flex-column home_top_banner">
                    <span className="htb_text"> 网上投票</span>

                    {/* <div className="htb_wrap"><times :onlineEndTime="onlineEndTime" /></div> */}
                    {/* <div className="flex-center htb_info">
                        <div className="flex-column htb_info_item">
                            <span>参评单位</span>
                            <span>5</span>
                        </div>
                        <div className="flex-column htb_info_item">
                            <span>累积投票</span>
                            <span> 5 </span>
                        </div>
                        <div className="flex-column htb_info_item">
                            <span>访问次数</span>
                            <span> 5 </span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default OnlineVote
