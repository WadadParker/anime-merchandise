import {Link} from "react-router-dom";

export const Home=()=>
{
    return (
        <div>
            <p>This is home, you need to go to Products Page for now</p>
            <Link to="/products">Click Here Dawg</Link>
            <p>As your boi has decided to start with that</p>
            
            <img src="https://i.ytimg.com/vi/5Qqtx2BIG04/maxresdefault.jpg"/>
        </div>
    )
}