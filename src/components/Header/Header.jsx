import {Link} from 'react-router-dom'
import cart from '../../assets/shopping-cart.png'
import './Header-module.css'

export default function Header(){
    return(
        <>
            <div className="header-container"> 
                
                <div className="logo">
                    <img src={cart} alt="cart" width={60} height={60}/>
                </div>
            
                <div className='menu'>
                    <ul className='menu-items'>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/aparelhos`}>Aparelhos</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}