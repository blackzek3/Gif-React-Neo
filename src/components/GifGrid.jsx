import { GitNewItem } from "./GitNewItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

   


  export const GifGrid = ({ category }) => {
  
    const { images, isLoading } = useFetchGifs( category );

 
    
  
    return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && ( <h2>Cargando...</h2> )
        }
        
        
        
        
        
        <div className="card-grid">
          {
            images.map( ( image ) => (
              <GitNewItem 
              key={ image.id }
              { ...image }
              
              />
            ))
          }

        </div>
        
    </>
  )
}

{/*         // const [counter, setcounter] = useState(10);
        <h5>{ counter }</h5>
        <button onClick={ () => setcounter( counter + 1 ) }>+1</button> */}