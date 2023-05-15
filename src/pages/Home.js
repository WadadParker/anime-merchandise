import {Link} from "react-router-dom";

export const Home=()=>
{
    return (
        <div>
            This is home, you need to go to Products Page for now
            <p>As your boi has decided to start with that</p>
            <Link to="/products">Click Here Dawg</Link>
        </div>
    )
}