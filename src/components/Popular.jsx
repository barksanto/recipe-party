import { useEffect, useState } from "react"
import styled from "styled-components";

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
            <Wrapper>
              <h3>Popular Dishes</h3>
              {popularFoodData.map((recipe) => {
                return (
                  <Card key={recipe.id }>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                  </Card>
                )
              })}
            </Wrapper>
       )
      })}

    </div>
  )
}

const Wrapper = styled.div`
margin: 4rem 0rem`

const Card = styled.div`
minHeight: 25rem;
border-radius: 2rem;

overflow: hidden;

img{
  border-radius: 2rem;
}`

export default Popular