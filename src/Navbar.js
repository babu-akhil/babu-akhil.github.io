import React, {useState, useEffect} from 'react'

function Navbar() {

    let pages = ['work', 'blog', 'contact']


    return(
        <div className = 'Navbar'>
            <ul>
            {pages.map(page => {
                    return(<li>
                        <a href = {'/'+page}>{page}</a>
                    </li>)
                }
            )
            }
            </ul>
        </div>
    )
}

export default Navbar