import {Component} from "react"
import Headers from "../Headers"
// import OffcanvasExample from "../BNav"
import "./index.css"

class Home extends Component{
    render(){
        return(
            <div className="Home_page">
               <Headers/>
               {/* <OffcanvasExample/> */}
               <div className="home_data_card">
                 <div className="home_data">
                    <h1 className="home_data_heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <p className="home_data_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse platea dictumst.</p>
                    <button className="Home_btn">Check Pricing</button>
                 </div>
                 <img src="./images/busibudHomeImg.png" alt="home_img" className="home_img"/>
               </div>
            </div>
        )
    }
}

export default Home