
import {Link} from "react-router-dom";
function Card (props) {

    return <div className="card">
  <img src={"/assets/"+props.pic} alt="Avatar" style={{width: "100%"}} />
  <div class="card-text">
    <div className="card-title">

    <h4>{props.dish}</h4>
    <span>{props.price}</span>

    </div>
    <p>{props.description}</p>
    <Link to="#">Order a delivery</Link>
  </div>
    </div>
    
}

export default Card;