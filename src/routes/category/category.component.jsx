//Styles import
import {CategoryContainer, CategoryTitle} from '../category/category.styles.jsx'

//React imports
import {useState, useEffect, Fragment } from 'react';

//Redux selectors
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCategoriesMap } from '../../store/categories/categories.selector.js';

//Component imports
import ProductCard from '../../components/product-card/product-card.component';


const Category = () => {
    const {category} = useParams()
    const categoriesMap= useSelector(selectCategoriesMap)
    const [products, setProducts]= useState(categoriesMap[category])

    useEffect(()=> {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])


    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        <CategoryContainer>
            
            {products &&
                products.map((product)=> <ProductCard key={product.id} product={product}/>)
            }
        </CategoryContainer>
        </Fragment>
    )
}

export default Category;