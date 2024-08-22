const list = document.querySelector('ul')
const buttonShowAll = document.querySelector(".mostrar")
const buttonMapAll = document.querySelector(".map-All")
const sumAll = document.querySelector(".soma-All")
const filterAll = document.querySelector(".filter-All")
let myLi = ''

//adicionar moedas BR nos preços
function valor(value){
const newValue = value.toLocaleString('pt-br',{
  style: 'currency',
  currency: 'BRL',
})
 return newValue
}
// Função para chamar meus produtos na tela 
function showAll(productArray) {
  let myLi = ''
  productArray.forEach(product => {
        myLi += `
      <li class"bloco">
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="items-price">Por ${valor(product.price)}</p>
      </li>
      `

   
    })
        list.innerHTML = myLi
}
// Função para Mapear myLi
function mapAllItems(){
  const newPrice = menuOptions.map((product) =>({
...product,
price: product.price* 0.9  // 10% de desconto
  }
  ))

  showAll(newPrice)
}

//Função para somar tudo
function sumAllItems(){
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
list.innerHTML = `
  <li>
    <p class="total"> Valor Total R$ ${valor(totalValue)}</p>
  </li>
`
}
// Função para filtra o  que procura
function filterAllItems(){
  const  filterresult = menuOptions.filter((product) => product.vegan)

  showAll(filterresult)
}

//Evento de clicks nos botoes 
buttonShowAll.addEventListener('click', ()=>  showAll (menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems )