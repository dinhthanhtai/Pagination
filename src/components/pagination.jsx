import React from 'react'

export default function Pagination({ postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul style={{ display: 'flex'}}>
                {
                    pageNumbers.map(number => (
                        <li 
                            key={number} 
                            style={{padding: '5px 10px', listStyle: 'none', background: 'lightblue', margin: '5px 10px', borderRadius: '5px'}}
                            onClick={() => paginate(number)}
                        >
                            <a>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
