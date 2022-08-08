import {changeText} from './helper'
function Manu (className, arr, classNameLi){
    return (
        <ul className = {className}>
        {arr.map((el, key) =>
        (<li className = {classNameLi} onClick = {(e)=> changeText(el.en, e)} key = {key}> {el.ukr}</li>)
        )}
        </ul>
    )
}
export default Manu