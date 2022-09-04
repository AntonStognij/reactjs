
import photo from "assets/slider.png"
import block from "assets/block.png"
import Goods from "../Goods"

const Main = () => {
    return (
        <div>
            <img className = "slider" src= {photo} alt="slider"/>
            <h2 className="wrap h2">FEATURED PRODUCTS</h2>
            <div className="wrap catalog">
           
            <Goods/>
            <div>
            <img className = "block" src= {block} alt="block"/>
            </div>
            </div>
            
        </div>
        
    )
}

export default Main;
