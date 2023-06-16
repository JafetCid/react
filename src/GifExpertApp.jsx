import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        //el setCategories lo necesitamos llamar cuando queremos cambiar las
        //categorias
        // console.log(NewCategory);
        //Formas de agregar una nueva categoria
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [...cat, 'Demon Slayer']);
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={(value) => onAddCategory(value)}
        />
        {
            categories.map( (category) => (
                <GifGrid 
                    key={category} 
                    category={category}
                />
            ))
        }
    </>
  )
}

