import {Link} from 'react-router-dom';
import '../css/NavigationPane.css'
import Logo from '../cv22.png'

export default function NavigationPane( {page, baseURL, saveFormF}={} ) {

    const generateLink = (pageName, whatTheCoolUserSees) => {
        return <li><Link style={{textDecoration: 'none',color: '#335C67'}} key={pageName} className={page === pageName ? "highlighted" : ""} to={''+baseURL+'/'+pageName+'/'} id={pageName}>{whatTheCoolUserSees}</Link></li>
    }
    return  <span className='navSpan'> 
            <a href='http://localhost:3000'><img src={Logo} alt="Logo" width="50" height="25" id="Headerimg"/></a> 
                {
                    [
                        generateLink('missiondetails', 'Mission Details'),
                        generateLink('aircraftdetails', 'Aircraft Details'),
                        generateLink('kit', 'Kit'),
                        generateLink('cargo', 'Cargo'),
                        generateLink('summary', 'Summary'),
                    ]
                }
                <input type="button" value="Save" className='saveButton' onClick={saveFormF} />
            </span>
} 
