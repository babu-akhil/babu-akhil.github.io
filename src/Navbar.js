import React, {useState, useEffect} from 'react'

function Navbar() {

    let [active, setActive] = useState('home')
    let pages = ['home', 'work', 'blog', 'contact']

    function toggleActive(e) {
        console.log(e.target.innerText.toLowerCase())
        setActive(e.target.innerText.toLowerCase())
    }

    return(
        <div className = 'Navbar'>
            <ul>
            {pages.map(page => {
                if(page===active){
                    return(<li className = 'active'>
                        <a href = {'/'+page==='home'?'':page} onClick = {toggleActive}>{page}</a>
                    </li>
                    )
                }
                else {
                    return(<li>
                        <a href = {'/'+page==='home'?'':page} onClick = {toggleActive}>{page}</a>
                    </li>)
                }
            }
            )
            }
            </ul>
        </div>
    )
}

export default Navbar