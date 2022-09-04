import React from 'react'
// import styles from './index.module.scss'
import './index.scss' // difference from xx.modile.css

const OnlineVote: React.FC = () => {
    return (
        // <div className={`flex-center ${styles.online}`}>
        //     <div className={styles.online_wrap}></div>
        //     <span>OnlineVote</span>
        // </div>
        <>
            <div className="home">
                <div className="home_top">
                    {/* <head-title title="网上投票" url="/person" />  */}
                    <div className="flex-column home_top_banner">
                        <div className="htb_wrap">{/* <times :onlineEndTime="onlineEndTime" /> */}</div>
                        <div className="flex-center htb_info">
                            <div className="flex-column htb_info_item">
                                <span>参评单位</span>
                                <span>5</span>
                            </div>
                            <div className="flex-column htb_info_item">
                                {/* <span>累积投票</span><span>{{ voteCount }}</span> */}
                            </div>
                            <div className="flex-column htb_info_item">
                                {/* <span>访问次数</span><span>{{ voteViewCount }}</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OnlineVote
