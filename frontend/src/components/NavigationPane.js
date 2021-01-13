import {Link} from 'react-router-dom';

export default function NavigationPane( {page} ) {

    const generateLink = (pageName, whatTheCoolUserSees) => {
        return <Link key={pageName} className={page === pageName ? "highlighted" : ""} to={'/'+pageName+'/'} id={pageName}>{whatTheCoolUserSees}</Link>
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
