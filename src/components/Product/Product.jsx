import { Link } from "react-router-dom";
import { ListProduct as listP } from "./ListProduct";
import './Product.css';
export default function Product(props) {
  return (

    
    <>
       <div className="product-card">
          <div className="product-card-image">
              <img src={props.image} alt={props.nome} width={200} height={200}/>
          </div>
          <h3>{props.nome}</h3>
          <p>{props.preco}</p>
          <Link to={`/aparelhos/vizualizar/produtos/${props.id}`}> <button>Vizualizar</button> </Link>
       </div>
      
    </>
  );
}