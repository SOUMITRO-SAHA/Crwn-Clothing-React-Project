import categories from '../categories-data/categories-data';
import CategoryItem from '../category-item/category-item.component';

const Directory = () => {
    return (
        <div className="directory-container">
            {
                categories.map((category) => {
                return (
                    <CategoryItem key={category.id} category = {category} />
                )
                })
            }
        </div>
    )
}

export default Directory