import React from 'react';
import { useParams } from 'react-router-dom';
import { ListProduct as listP } from '../components/Product/ListProduct';
import './VisualizarProdutos.css';

export default function VizualizarProdutos() {
    const {id} = useParams();

    //procurar o produto na lista de produtos pelo id
    const product = listP.find((p) => p.id === parseInt(id));
    
    //se o produto não existir, retornar uma mensagem de erro
    if(!product) return (<h1>Produto não encontrado</h1>)

    return (
        <>

            <div className="visualizarProduto-container">
                <div className='visualizarProduto-title'>
                    <h1>{product.nome}</h1>
                </div>
                
            <div className="product-details">
                <img src={product.image} alt={product.nome}  width={200} height={200}/>
                <p>{product.descricao}</p>
                <p>{product.preco}</p>
            </div>
            
            </div>       
        </>
    )
}