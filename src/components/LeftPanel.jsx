import React from 'react'
import '../css/LeftPanel.css'
import DashboardIcon from '../images/Dashboard.png'
import CustomRatingIcon from '../images/CustomRating.png'
import Reports from '../images/Reports.png'
import SystemDescription from '../images/SystemDescription.png'
import HelpFeetback from '../images/HelpFeetback.png'


function LeftPanel() {
    return (
        <>

            <div className="LeftPanel">
                <div className='CurrentPage'>
                    <div className='text'> Current Page </div>
                </div>

                {/* AnalyticsHub */}
                <div className='AnalyticsHub '>
                    <div className='text' > Analytics Hub </div>

                    <div className='Dashboard'>
                        <img src={DashboardIcon} alt="DashboardIcon" />
                        <div className='text'>Dashboard </div>
                    </div>

                    <div className='CustomRating'>
                        <img src={CustomRatingIcon} alt="CustomRatingIcon" />
                        <div className='text'>Custom Rating </div>
                    </div>

                    <div className='Reports'>
                        <img src={Reports} alt="Reports" />
                        <div className='text'> Reports </div>
                    </div>

                </div>




                {/* UsefulInformation */}
                <div className='UsefulInformation '>
                    <div className='text' > Useful Information </div>

                    <div className='SystemDescription'>
                        <img src={SystemDescription} alt="SystemDescription" />
                        <div className='text'>System description </div>
                    </div>

                    <div className='HelpFeetback'>
                        <img src={HelpFeetback} alt="HelpFeetback" />
                        <div className='text'>Help & Feetback </div>
                    </div>



                </div>

            </div>
        </>
    )
}


export default LeftPanel;