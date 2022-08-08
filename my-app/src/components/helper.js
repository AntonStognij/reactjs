import {myDescription} from './info'


  //получает инфу по клику
// const getInfo = (info)=> myDescription[`${info}`]
//функция делает элементы
const createElem = (tag, append, src = null, text = null, className = null, dataAtr=null) => {
    let elem = document.createElement(tag)
    if(src){
        elem.src = src
        elem.alt = text
        elem.title = text
    }
    if(!src && text){
        elem.innerHTML = text
    }
    if(className){
        elem.setAttribute("class", `${className}`)
    }
    if(dataAtr){
        elem.setAttribute("data-id", `${dataAtr}`)
    }
    append.append(elem)
  }

    //меняем цвет
const changeColorAllElem = ()=>{
        let infoBlock = document.querySelectorAll(`.elem-manu`); 
        infoBlock.forEach(el =>{
        el.classList.remove("active")
        })
}

// меняет текст в блоке и цвет кнопки
const changeText = (info, infoAll)=>{
    changeColorAllElem()
    infoAll.target.classList.add('active');
    let text = myDescription[info]
    let infoBlock = document.querySelector(`.info`); 
    infoBlock.innerHTML = ""
    text.forEach(el => {
    createElem("li",infoBlock, null, el, "li" )
  })
}

  export {changeText, changeColorAllElem, createElem}