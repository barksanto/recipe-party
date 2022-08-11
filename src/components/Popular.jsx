import { useEffect, useState } from "react"

function Popular() {
  const [popularFoodData, setPopularFoodData] = useState([])

    useEffect(() => {
      getPopular();
    }, [])
  
  
// api route 'https://api.spoonacular.com/recipes/random'
  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&number=10`)
    const data = await api.json()


    setPopularFoodData(data.recipes)
  }
  



  return (
    <div>
      {popularFoodData.map((recipe) => {
        // console.log(recipe)
        return (
          <div key={ recipe.id}>
            <p >{recipe.title }</p>
            </div>
       )
      })}

    </div>
  )
}

export default Popular