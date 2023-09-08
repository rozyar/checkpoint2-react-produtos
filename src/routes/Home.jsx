import Product from '../components/Product/Product'
import { ListProduct } from '../components/Product/ListProduct'
import './Home-module.css'

export default function Home(){
     return(
        <>
            <div className="home-container">
                <div className='home-title'>
                    <h1>Produtos em destaque</h1>
                </div>
                
                <div className='home-featured-products'>
                    <Product {...ListProduct[0]}/>
                    <Product {...ListProduct[1]}/>
                </div>
            </div>          
        </>
     )
}