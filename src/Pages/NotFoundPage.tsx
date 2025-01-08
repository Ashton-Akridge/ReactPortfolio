import { Link } from 'react-router-dom';
import '../css/NotFoundPage.css'
export default function NotFoundPage(){
    return <div>

        404 Not Found
        <br/>
        <Link to='/'>
            <button className="NowFoundButton">Back to Home Page</button>
        </Link>
    </div>;
}