import { useEffect, useState } from "react";
import { API } from "../services";

const Home = () => {
    //os produtos vão ser inseridos no array de produtos

    const [produtos, setProdutos] = useState([])
    async function buscarProdutos(){
        //O await já faz o primeiro then
        const request = await API.get("/products");
        setProdutos(request.data)
        
    }
  
    useEffect(()=>{
        buscarProdutos()
    },[])

    return (
        <>
            <section>
                <h1>Lista de Produtos</h1>
                <ul className=" grid list-none p-0">
                    {
                        //map tem retorno
                        //sem chaves
                        produtos.map((produto)=>(
                            <li className="col-3 mb:col-3">
                                <div className="shadow-4 p-4 border-round">
                                    <div className="relative">
                                        <img 
                                            src={produto.image}
                                            alt={produto.title}
                                            className="w-full"
                                            //não é uma forma ideal colocar style, mas ajuda
                                            style={{height:"300px", objectFit:"contain"}}
                                        />
        
                                        <h6 className="absolute top-0 right-0 bg-primary px-2 py-1 border-round-md">{produto.rating.rate}</h6>
        
                                    </div>
        
                                    <h3 className="mb-0 white-space-nowrap overflow-hidden text-overflow-ellipsis">{produto.title}</h3>
                                    <h6 className="mt-0 uppercase text-primary">{produto.category}</h6>
                                    <h2>R$ {produto.price}</h2>
                                </div>

                            </li>
                        ))
                    }
                   
                </ul>
            </section>
            
        </>
    );
}
 
export default Home;