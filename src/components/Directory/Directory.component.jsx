import categories from "../categories-data/categories-data";
import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./Directory.style";

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
