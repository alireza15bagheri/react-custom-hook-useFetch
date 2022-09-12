import React from 'react'
import useFetch from '../hooks/useFetch'

function CustomHookExample1() {
    
    // Destructuring returned values from the custom hook:
    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts', {})

    if(loading) {
        return <h3>Loading...</h3>
    }

    const lineBreak = <br />
  
    return (
    <div>
        {data.map((post) => (
            <h3 key={post.id}>{post.title}{lineBreak}{lineBreak}</h3>
        ))}
    </div>
  )
}

export default CustomHookExample1