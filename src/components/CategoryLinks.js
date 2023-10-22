import { useContext, useEffect, useState } from "react"
import { categoryContext } from "../contexts/categoryContext"
import { readCategories } from "../services/category-services"
import { useNavigate } from "react-router-dom"
import "../css/components/category-links.css"

export default function CategoryLinks(){
    const [categoryList, setCategoryList] = useState([])
    const {category, setCategory} = useContext(categoryContext)
    const navigate = useNavigate();

    useEffect(() => {readCategories(setCategoryList)}, [])

    function catBtnHandler(categoryID){
        setCategory(categoryID)
        navigate("/termekek/AToZ/1")
    }

    return(
        <section>
            <h3 className="cat-title">Fedezd fel termékeinket</h3>
            <div className="cat-wrap">
                    {
                        categoryList?.map(category => (
                            <div key={category.id}><button className="category-butt" onClick={() => catBtnHandler(category.id)} >{category.title}</button> </div>
                        ))
                    }
                    <button className="category-butt-all" onClick={() => catBtnHandler("")}>Összes megtekintése</button>
                
            </div>
        </section>
    )
}