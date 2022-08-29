
function setRecord (id, text) {
    let info =JSON.parse(sessionStorage.getItem(id));
    if (info){
        info.push(text)
    } else {
        info = [text]
    }
    console.log("info",info)
    sessionStorage.setItem(id, JSON.stringify(info))
} 
export {setRecord}