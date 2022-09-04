import categories from "../categories-data/categories-data";
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
