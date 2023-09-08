import { Link } from "react-router-dom";
import { ListProduct as listP } from "./ListProduct";
import './Product.css';
export default function Product(props) {
  return (

    
    <>
       <div className="product-card">
          <div className="product-card-image">
              <img src={props.image} alt={props.nome} width={240} height={200}/>
          </div>
          <h2>{props.nome}</h2>
          <p>R$ {props.preco}</p>
          <Link to={`vizualizar/produtos/${props.id}`}> <button>Vizualizar</button> </Link>
       </div>
      
    </>
  );
}