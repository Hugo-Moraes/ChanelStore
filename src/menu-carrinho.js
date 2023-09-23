
import { catalogo } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = {};

function abrirCarrinho() {
    document.getElementById("carrinho").classList.add("right-[0px]");
    document.getElementById("carrinho").classList.remove("right-[-360px]");
}

function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-360px]");

}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho")
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho")

    botaoFecharCarrinho.addEventListener('click', fecharCarrinho);
    botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);

}




function removerDoCarrinho(idProduto) {
    delete idsProdutoCarrinhoComQuantidade[idProduto];
    renderizarProdutosCarrinho();
}

function incrementarQuantidadedeProduto(idProduto) {
    idsProdutoCarrinhoComQuantidade[idProduto]++;
    atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadedeProduto(idProduto) {
   idsProdutoCarrinhoComQuantidade[idProduto]--;
   atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto){
    document.getElementById(`quantidade-${idProduto}`).innerHTML = 
    idsProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutoNoCarrinho(idProduto) {
    const produto = catalogo.find(p => p.id === idProduto);
    const conteinerProdutosCarrinhos = 
        document.getElementById("produtos-carrinho");
     
    
        const elementoArticle = document.createElement("article");
        const articleClasses = [
        'flex' ,
        'bg-slate-100' ,
        'rounded-lg' ,
        'p-1',
        'relative',
             ];
       
        
        for (const articleClass of articleClasses) {
            elementoArticle.classList.add(articleClass);
        }

    const cartaoProdutoCarrinho = ` 

    <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
    <img 
    src="Assets/img/${produto.Imagem}" 
    alt="carrinho: ${produto.nome}" 
    class="h-24 rounded-lg">
    <div class="p-2 flex flex-col justify-between">
    <p> ${produto.nome} </p>
    <p class="text-slate-500 ">Tamanho M</p>
    <p class="text-green-700 text-lg"> ${produto.preco}</p>
    
    </div>
    <div class="flex text-slate-950 items-end  bottom-0 right-8  text-lg ">
    <button id='decrementar-produto-${produto.id}'>-</button>
    <p id='quantidade-${produto.id}' class='ml-2'>${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
    <button class='ml-2'  id='incrementar-produto-${produto.id}'>+</button>
    </div>
`;


elementoArticle.innerHTML = cartaoProdutoCarrinho;
conteinerProdutosCarrinhos.appendChild(elementoArticle);

document.
getElementById(`decrementar-produto-${produto.id}`)
.addEventListener('click',() => decrementarQuantidadedeProduto(produto.id));

document.
getElementById(`incrementar-produto-${produto.id}`)
.addEventListener('click',() => incrementarQuantidadedeProduto(produto.id));
}

function renderizarProdutosCarrinho() {

    const idsProdutoCarrinhoComQuantidade =
    document.getElementById("produtos-carrinho");
    conteinerProdutosCarrinhos.innerHTML = "";

    for (const idProduto in idsProdutoCarrinhoComQuantidade){
        desenharProdutoNoCarrinho(idProduto)
    }
    
}

export function adicionarAoCarrinho (idProduto) {
      if (idProduto in idsProdutoCarrinhoComQuantidade){
        incrementarQuantidadedeProduto(idProduto);
        return;
      }
    idsProdutoCarrinhoComQuantidade[idProduto] = 1;
    desenharProdutoNoCarrinho(idProduto);
}