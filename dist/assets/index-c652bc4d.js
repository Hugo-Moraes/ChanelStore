(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=c(r);fetch(r.href,t)}})();const m=[{id:"1",nome:"Blazer de Terno Com Textura",marca:"Zara",preco:"R$ 699",Imagem:"0070622780_1_1_1.jpg",feminine:!1},{id:"2",nome:"Calça de Terno Com textura",marca:"Chanel",preco:"R$ 279",Imagem:"0070622840_1_1_1.jpg",feminine:!1},{id:"3",nome:"Calça Terno Xadrez ",marca:"Christian Dior",preco:"R$ 369",Imagem:"0156437340_1_1_1.jpg",feminine:!1},{id:"4",nome:"Blazer Com Manga Enrolada",marca:"Gucci",preco:"R$ 379",Imagem:"7940578400_2_1_1.jpg",feminine:!0},{id:"5",nome:"Colete com Risco de Giz ",marca:"Versace",preco:"R$ 379",Imagem:"2753322064_1_1_1.jpg",feminine:!0},{id:"6",nome:"Blaze Com Estampa CLP",marca:"Valentino",preco:"R$ 179",Imagem:"3975432330_2_3_1.jpg",feminine:!0},{id:"7",nome:"Macacão Camisa",marca:"Givenchy",preco:"R$ 799",Imagem:"3948346926_1_1_1.jpg",feminine:!0},{id:"8",nome:"Blaze Com Estrutura de Piquê",marca:"Balenciaga",preco:"R$ 479",Imagem:"6861670405_2_1_1.jpg",feminine:!1},{id:"9",nome:"Camiseta Básica Light Weight Preta",marca:"Yves Saint Laurent",preco:"R$ 99",Imagem:"1887411800_1_1_1.jpg",feminine:!1},{id:"10",nome:"Conjunto Corte Curto ",marca:"Prada",preco:"R$ 479",Imagem:"7760816508_1_1_1.jpg",feminine:!0},{id:"11",nome:"Blazer Terno Risca de Giz",marca:"Alexander McQueen",preco:"R$ 799",Imagem:"5527144401_2_1_1.jpg",feminine:!1},{id:"12",nome:"Calça com Pregas e com Linho",marca:"Dolce & Gabbana",preco:"R$ 479",Imagem:"3312586622_2_1_1.jpg",feminine:!0},{id:"13",nome:"Camiseta Básica Light Weight",marca:"Burberry",preco:"R$ 179",Imagem:"1887440700_1_1_1.jpg",feminine:!0},{id:"14",nome:"Colete Alfaiataria Curto",marca:"Louis Vuitton",preco:"R$ 259",Imagem:"9929329711_1_1_1.jpg",feminine:!0},{id:"15",nome:"Moletom Basico com Capuz",marca:"Yves Saint Laurent ",preco:"R$ 259",Imagem:"12 (1).jpg",feminine:!1},{id:"16",nome:"Body De Tule Estampado",marca:"Hermès ",preco:"R$ 179",Imagem:"12 (6).jpg",feminine:!1},{id:"17",nome:"Jaqueta com Bolsos Color Block",marca:"Ralph & Russo ",preco:"R$ 599",Imagem:"12 (5).jpg",feminine:!1},{id:"18",nome:"Pakar Watar Repellent",marca:" Elie Saab ",preco:"R$ 779",Imagem:"12 (4).jpg",feminine:!0},{id:"19",nome:"Berbuda Jogger Premium ",marca:"Giorgio Armani ",preco:"R$ 229",Imagem:"12 (3).jpg",feminine:!0},{id:"20",nome:"Moletom Acid Wash",marca:"Jean Paul Gaultier ",preco:"R$ 279",Imagem:"12 (2).jpg",feminine:!1},{id:"21",nome:"Bluse Square Neck Sheer",marca:"Zuhair Murad",preco:"R$ 229",Imagem:"12 (7).jpg",feminine:!0}],i={};function l(){document.getElementById("carrinho").classList.add("right-[0px]"),document.getElementById("carrinho").classList.remove("right-[-360px]")}function u(){document.getElementById("carrinho").classList.remove("right-[0px]"),document.getElementById("carrinho").classList.add("right-[-360px]")}function g(){const e=document.getElementById("fechar-carrinho"),a=document.getElementById("abrir-carrinho");e.addEventListener("click",u),a.addEventListener("click",l)}function s(e){i[e]++,d(e)}function p(e){i[e]--,d(e)}function d(e){document.getElementById(`quantidade-${e}`).innerHTML=i[e]}function f(e){const a=m.find(o=>o.id===e),c=document.getElementById("produtos-carrinho"),n=document.createElement("article"),r=["flex","bg-slate-100","rounded-lg","p-1","relative"];for(const o of r)n.classList.add(o);const t=` 

    <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
    <img 
    src="Assets/img/${a.Imagem}" 
    alt="carrinho: ${a.nome}" 
    class="h-24 rounded-lg">
    <div class="p-2 flex flex-col justify-between">
    <p> ${a.nome} </p>
    <p class="text-slate-500 ">Tamanho M</p>
    <p class="text-green-700 text-lg"> ${a.preco}</p>
    
    </div>
    <div class="flex text-slate-950 items-end  bottom-0 right-8  text-lg ">
    <button id='decrementar-produto-${a.id}'>-</button>
    <p id='quantidade-${a.id}' class='ml-2'>${i[a.id]}</p>
    <button class='ml-2'  id='incrementar-produto-${a.id}'>+</button>
    </div>
`;n.innerHTML=t,c.appendChild(n),document.getElementById(`decrementar-produto-${a.id}`).addEventListener("click",()=>p(a.id)),document.getElementById(`incrementar-produto-${a.id}`).addEventListener("click",()=>s(a.id))}function h(e){if(e in i){s(e);return}i[e]=1,f(e)}function _(){for(const e of m){const a=`<div class='border-solid  w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-500 rounded-lg group' id="card-produto-${e.id}">
        <img 
        src="Assets/img/${e.Imagem}" 
        alt="Produto1"
        class="group-hover:scale-110 duration-300 my-3 rounded-lg  ";
        />
        <p class='text-sm'>${e.nome}</p>
        <P class='text-sm'>${e.marca}</P>
        <p class='text-sm'>${e.preco}</p>
        <button id='adicionar-${e.id}' class="bg-slate-950 hover:bg-slate-700 text-slate-200"><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;document.getElementById("conteiner-produto").innerHTML+=a}for(const e of m)document.getElementById(`adicionar-${e.id}`).addEventListener("click",()=>h(e.id))}_();g();
