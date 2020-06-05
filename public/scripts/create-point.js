function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]")

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  //.then( (res) => {return res.json() })
  //ou//
  .then(res => res.json() )
  .then(states => {

    for(const state of states) {
      ufSelect.innerHTML  += `<option value="${state.id}">${state.nome}</option>`
    } 
    
  })
}
populateUFs()

function getCities(event) {
  const citySelect = document.querySelector("select[name=city]")
  const stateInput = document.querySelector("[name=state]")

  //console.log(event.target.value)

  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios
  `

  citySelect.innerHTML = "<option value>Selecione uma cidade</option>"
  citySelect.disabled = true

  fetch(url)
  .then( res => res.json() )
  .then( cities => {
  
  
    for( const city of cities) {
      citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
    }

    citySelect.disabled = false
  })
}

document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities)

  

// ITENS DE COLETA pra buscar todos os li's

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem)
}


const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
  const itemLi = event.target

  itemLi.classList.toggle("selected")

  const itemId = itemLi.dataset.id    //<--aqui
  //console.log()

/* verificar se os itens estao selecionados
pegar os itens ja selecionados */

const alreadySelected = selectedItems.findIndex( item => {
  const itemFound =  item == itemId //retorna boolean
  return itemFound
})


//se ja estiver selecionado, 'usamos um if' se sim, tirar da selecao

if(alreadySelected >= 0 ) {
  const filteredItems = selectedItems.filter(item => {
    const itemIsDifferent = item != itemId
    return itemIsDifferent 
  })

  selectedItems = filteredItems

} else {  //se nao tiver selecionado. add à selecao
  //'usamos um else'

  selectedItems.push(itemId)
}


//atualizar o campo escondido com os itens selecionados
collectedItems.value = selectedItems
}