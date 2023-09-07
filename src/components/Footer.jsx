import './Footer.css'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {RiTwitterXFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'


export default function Footer() {

    return(
        <>
            <div className='footer-container'>
                
                <div className='footer-icons'>
                    <ul>
                        <li> <Link> <BsInstagram className='icons'/> </Link></li>
                        <li><Link><RiTwitterXFill className='icons'/> </Link> </li>
                        <li> <Link> <BsLinkedin className='icons'/> </Link> </li>
                    </ul>
                </div>
                    <p id='footer-text'>@© 2023 Produtos do professor Ale. Todos os direitos reservados.</p>

            </div>
        </>
    )
}