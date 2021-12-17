import React from 'react'

export default function Posts({ posts, loading}) {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <ul> 
            {
                posts.map(post => (
                    <ol key={post.id}>
                        {`${post.id}  ${post.title}` }
                    </ol>
                ))
            }
            
        </ul>
    )
}
