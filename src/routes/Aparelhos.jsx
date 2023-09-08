import { ListProduct } from "../components/Product/ListProduct"
import Product from "../components/Product/Product"
import './Aparelhos.css'

export default function Aparelhos(){
    return(
        
        <>
        <div className="aparelhos-container">
            <div className='aparelhos-title'>
                <h1>Aparelhos</h1>
            </div>
        <div className = "aparelhos">

            {ListProduct.map((p) =>{
                return(
                    <Product key={p.id} {...p}/>
                    )
                })}
        </div>
        </div>
        </>
    )
}