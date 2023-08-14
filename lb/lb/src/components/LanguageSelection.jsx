const germanFlag = require('../assets/flags/german.png')
const frenchFlag = require('../assets/flags/french.png');

export default function LanguageSelection(props){

    return (
        <div className="languageSelection">
            <div className="logo">LanguageBuddy</div>
            <div className="selectionBody">
                <h1>What language do you want to learn</h1>
                <div className="selectionBox">
                    <div onClick={()=>props.setLanguage('German')} className='select selectGerman'>
                        <img src={germanFlag} alt="German flag" srcset="" />
                        <div>German</div>
                    </div>
                    <div onClick={()=> props.setLanguage('French')} className='select selectFrench'>
                        <img src={frenchFlag} alt="French flag" srcset="" />
                        <div>French</div>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}