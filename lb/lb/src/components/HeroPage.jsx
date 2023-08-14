
const image1 = require('../assets/heroPage/Image-1.png')
const image2 = require('../assets/heroPage/Image-2.png')
const image3 = require('../assets/heroPage/Image-3.png')
const image4 = require('../assets/heroPage/Image-4.png')
const image5 = require('../assets/heroPage/Image-5.png')
const image6 = require('../assets/heroPage/Image-6.png')
const image7 = require('../assets/heroPage/Image-7.png')
const image8 = require('../assets/heroPage/Image.png')



export default function HeroPage(props){
    return(
        <div className="heroPage">
            <LeftHeroPage handleIndex = {props.handleIndex}/>
            <RightHeroPage/>
        </div>
    )
}


function LeftHeroPage(props){
    return(
        <div className="leftHeroPage">
            <div className="leftHeroContainer">
                <h1>Learn a language at your pace</h1>
                <p>Learn any language of your choice from anywhere you are and chat with your buddies as you learn</p>

                <button onClick={()=>props.handleIndex("signup")} >Get Started</button>

                <div className="stats">
                    <div className="statis">
                        <h2>4.6+</h2>
                        <p>ratings</p>
                    </div>
                    <div className="statis">
                        <h2>20,000+</h2>
                        <p>students</p>
                    </div>
                    <div className="statis">
                        <h2>20+</h2>
                        <p>hours of learning</p>
                    </div>
                </div>



            </div>
            
            

        </div>
       
    )
}

function RightHeroPage(){
    return(
        <div className="rightHeroPage">
            <div className="imgContainer1">
                <div className='img_text'>
                    <img className='responsive' src={image8} alt="" />
                    <img id='firstimgtext' src= {image1} alt="" />
                </div>
                <div className='img_text'>
                    <img className='responsive' src={image4} alt="" />
                    <img id='firstimgtext' src= {image5} alt="" />
                </div>
                
            </div>
             <div className="imgContainer2">
                <div className='img_text1'>
                    <img className='responsive' src={image3} alt="" />
                    <img id='firstimgtext1' src= {image6} alt="" />
                </div>
                <div className='img_text1'>
                    <img  className='responsive' src={image2} alt="" />
                    <img id='firstimgtext1' src= {image7} alt="" />
                </div>
                
            </div>
        </div>
    )
}