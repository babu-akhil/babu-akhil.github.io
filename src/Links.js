import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, fa} from '@fortawesome/free-regular-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import './Links.css'


function Links()
{
    let github = 'https://www.github.com/babu-akhil'
    let email = 'mailto:realakhilbabu@gmail.com'
    let linkedin = 'https://www.linkedin.com/in/akhil-babu-520561199/'

    return(
        <div className = 'links'>
            <ul>
                <li>
                    <a href = {linkedin}> <FontAwesomeIcon icon = {faLinkedin} /></a>
                </li>

                <li>
                    <a href = {github}> <FontAwesomeIcon icon = {faGithub} /></a>
                </li>
                <li>
                    <a href = {email}><FontAwesomeIcon icon = {faEnvelope} /></a>
                </li>

                <li className = 'leftFloat'>
                    <a href = '/'><FontAwesomeIcon icon = {faArrowLeft} /></a>
                </li>
            </ul>
        </div>
    )
}


export default Links