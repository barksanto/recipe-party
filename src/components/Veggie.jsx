import { useEffect, useState } from "react"
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Veggie() {

  const [veggieFoodData, setVeggieFoodData] = useState([])

    useEffect(() => { // before render, fetch recipes
      getVeggie();
    }, [])
  
  // api route 'https://api.spoonacular.com/recipes/random'
  const getVeggie = async () => {
    const checkLocalStorage = localStorage.getItem("veggie");

    if (checkLocalStorage) {
      setVeggieFoodData(JSON.parse(checkLocalStorage))

    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&tags=vegetarian&number=50`)
      const data = await api.json()

      localStorage.setItem("veggie", JSON.stringify(data.recipes))
      
      setVeggieFoodData(data.recipes)
      console.log(data.recipes) // log data from API call (Veggie food only )
    }
  }
  
 return (
    <div>
          <Wrapper>  {/* Key goes on the outermost returned div */}
            <h3>Vegetarian Picks</h3>
            <Splide options={splideOptions}>
              {veggieFoodData.map((recipe) => {
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
  perPage: 3,
  // arrows: false,
  drag: "free",
  gap: "2rem",
}

const Wrapper = styled.div`
margin: 4rem 2rem;`;

const Card = styled.div`
min-height: 25rem;
min-width: 25rem;
overflow: hidden;
/* position: relative; */



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
  bottom: 5%;
  transform: translate(-50%);
  color:white;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
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

export default Veggie