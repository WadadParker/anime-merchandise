export const FilterBar=()=>
{
    return (
        <div>
            <header>
                <strong>Filters</strong>
                <u>Clear</u>
            </header>
            <strong>Rating</strong>
            <input type="range" min={0} max={5}></input>

            <strong>Category</strong>
            <div className="category-container">
            <input type="checkbox"/>
            <label>Men clothing</label>
            <br/>
            <input type="checkbox"/>
            <label>Women clothing</label>
            <br/>
            <input type="checkbox"/>
            <label>Idhar kya dekhre ho, we just have 2 genders</label>
            </div>

            <strong>Price</strong>
            <div className="rating-container">
                <input type="radio" name="sort"/>
                <label for="sort">Sort High to Low</label>
                <br/>
                <input type="radio" name="sort"/>
                <label for="sort">Sort Low to High</label>
            </div>


        </div>
    )
}