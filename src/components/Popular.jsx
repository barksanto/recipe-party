import { useEffect, useState } from "react"
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Popular() {
  const [popularFoodData, setPopularFoodData] = useState([])

    useEffect(() => { // before render, fetch recipes
      getPopular();
    }, [])
  
  // api route 'https://api.spoonacular.com/recipes/random'
  const getPopular = async () => {
    const checkLocalStorage = localStorage.getItem("popular");

    if (checkLocalStorage) {
      setPopularFoodData(JSON.parse(checkLocalStorage))
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&number=10`)
      const data = await api.json()

      localStorage.setItem("popular", JSON.stringify(data.recipes))
      
      setPopularFoodData(data.recipes)
      console.log(data.recipes)
    }
  }
  

  return (
    <div>
          <Wrapper>  {/* Key goes on the outermost returned div */}
            <h3>Popular Dishes</h3>
            <Splide options={splideOptions}>
              {popularFoodData.map((recipe) => {
                return (
                    <SplideSlide key={recipe.id}>
                      <Card>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient/>
                      </Card>
                    </SplideSlide>
                  )
                })}
            </Splide>
          </Wrapper>
    </div>
  )
}

const splideOptions = {
  perPage: 4,
  // arrows: false,
  drag: "free",
  gap: "2rem",
}

const Wrapper = styled.div`
margin: 4rem 2rem;`;

const Card = styled.div`
min-height: 25rem;
min-width: 40rem;
overflow: hidden;


img{
  border-radius: 2rem;
  object-fit: cover;
  position: absolute;
  height: 95%;
  width: 100%;

}

p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%);
  color:white;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: .8rem;
  height: 25%;
  display: flex;
  justify-content:center;
  align-items: center;
  color: white;
}




`;

const Gradient = styled.div`
  z-index:3;
  position: absolute;
  width: 100%;
  height: 95%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6));
  border-radius: 2rem;
`

export default Popular