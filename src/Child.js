

function Child(props){
    const data = "Sachin Kumar"
    return(
        <div>
            <button onClick={()=>props.alert(data)}>Click me</button>
        </div>
    )
}

export default Child;