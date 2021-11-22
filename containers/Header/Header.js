import React from 'react'
import Link from "next/link"
import HeaderWrapper from './HeaderWrapper'

const Header = () => {
    return (
        <HeaderWrapper className="shadow py-3 bg-light">
            <div className="container d-flex justify-content-between">
                <div className="w-25">
                <img src="https://tender-bardeen-28c7e9.netlify.app/static/media/logo.6ce24c58.svg" alt="" className="w-25"/>
                </div>
                <ul className="d-flex m-0 p-0">
                    <li><Link href="/"><a className="btn me-2"><h4>Home</h4> </a></Link></li>
                    <li><Link href="/users"><a className="btn me-2"><h4>Users</h4> </a></Link></li>
                    <li><Link href="/todos"><a className="btn me-2"><h4>Todos</h4></a></Link></li>
                    <li><Link href="/photos"><a className="btn me-2"><h4>Photos</h4></a></Link></li>
                    <li><Link href="/posts"><a className="btn me-2"><h4>Posts</h4></a></Link></li>
                </ul>
            </div>
        </HeaderWrapper>
    )
}

export default Header
