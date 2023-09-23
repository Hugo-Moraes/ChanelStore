import { adicionarAoCarrinho } from "./menu-carrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalago() {

    for (const produtoCatalogo of catalogo) {
        
        const cartaoProduto = `<div class='border-solid  w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-500 rounded-lg group' id="card-produto-${produtoCatalogo.id}">
        <img 
        src="Assets/img/${produtoCatalogo.Imagem}" 
        alt="Produto1"
        class="group-hover:scale-110 duration-300 my-3 rounded-lg  ";
        />
        <p class='text-sm'>${produtoCatalogo.nome}</p>
        <P class='text-sm'>${produtoCatalogo.marca}</P>
        <p class='text-sm'>${produtoCatalogo.preco}</p>
        <button id='adicionar-${produtoCatalogo.id}' class="bg-slate-950 hover:bg-slate-700 text-slate-200"><i class="fa-solid fa-cart-plus"></i></button>
        </div>` ;
        
        document.getElementById('conteiner-produto').innerHTML += cartaoProduto
    }

for (const produtoCatalogo of catalogo ) { 

    document.getElementById(`adicionar-${produtoCatalogo.id}`)
    .addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id));
}
}