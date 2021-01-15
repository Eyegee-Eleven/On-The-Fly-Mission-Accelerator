import {Link} from 'react-router-dom';
import '../css/NavigationPane.css'

export default function NavigationPane( {page, baseURL}={} ) {

    const generateLink = (pageName, whatTheCoolUserSees) => {
        return <Link key={pageName} className={page === pageName ? "highlighted" : ""} to={''+baseURL+'/'+pageName+'/'} id={pageName}>{whatTheCoolUserSees}</Link>
    }

    return  <div>
                {
                    [
                        generateLink('missiondetails', 'Mission Details'),
                        generateLink('aircraftdetails', 'Aircraft Details'),
                        generateLink('kit', 'Kit'),
                        generateLink('cargo', 'Cargo'),
                        generateLink('summary', 'Summary'),
                    ]
                }
            </div>
} 
