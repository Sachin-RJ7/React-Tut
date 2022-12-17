import React,{ forwardRef } from "react";

// forwardRef

// forwardRef is a higher-order component in React that allows you to pass a ref through a component to one of its children. This is useful when you need to access the properties of a DOM element that is rendered by a child component.

function Child(props,ref){
    
    return(
        <div>
            <h1>Forward Ref</h1>
            <input type="text" ref={ref} />
        </div>
    )
}

export default forwardRef(Child);