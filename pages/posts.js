import React from 'react'
import Header from '../containers/Header'

const Posts = () => {
    return (
        <>
            <Header />
            <div className="container py-5">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul> 
            </div>
        </>
    )
}

export default Posts
