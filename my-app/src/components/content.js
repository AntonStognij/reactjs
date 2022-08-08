function Content (className, arr){
    return (
        <ul className = {className}>
        {arr.map((el, key) =>
        (<li key = {key}> {el}</li>)
        )}
        </ul>
    )
}
export default Content