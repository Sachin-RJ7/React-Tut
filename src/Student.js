 
 {/* <h1>Student Component</h1> */}

function Student(props)
{
    console.log(props);
    return(
        <div style={{backgroundColor:"skyblue", margin:10}}>
            <h2>Hello,{props.name} </h2>
        </div>
    )
}

export default Student