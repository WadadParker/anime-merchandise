import { useNavigate } from "react-router";

export const EmptyCart=()=>
{
    const navigate = useNavigate();
    const styles={
        fontSize: "1.5rem",
        backgroundColor: "black",
        border: "0",
        borderRadius: "0.6rem",
        padding:"1rem 2rem",
        cursor: "pointer",
        color: "white",
    }
    return (
        <div>
            <p style={{fontSize:"2.5rem"}}>It's so lonely here, let's do some shopping?</p>
            <button style={styles} onClick={()=>navigate("/products")}>Explore Products</button>
        </div>
    )
}