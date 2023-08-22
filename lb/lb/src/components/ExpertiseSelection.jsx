const beginner = require('../assets/expertise/beginner.png')
const expert = require('../assets/expertise/expert.png')

export default function ExpertiseSelection(props){


    return (
        <div className="languageSelection">
            <div className="logo">LanguageBuddy</div>
            <div className="selectionBody">
                <h1>How will you rate your Knowledge of {props.language}</h1>
                <div className="selectionBox">
                    <div onClick={()=>props.handleAccountReg('Beginner')}  className='select selectGerman'>
                        <img src={beginner} alt="select beginner" srcset="" />
                        <div>I am a Beginner</div>
                    </div>
                    <div onClick={()=>props.handleAccountReg('Expert')} className='select selectFrench'>
                        <img src={expert} alt="Select expert" srcset="" />
                        <div>I am an Expert</div>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}