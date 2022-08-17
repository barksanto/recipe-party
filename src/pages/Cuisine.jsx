import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom" //useParams allow to pull out keyword from the URL
import {useState, useEffect} from "react"

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams() // @ use params from URL

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results) // @ set state of cuisine to results of fetch
    // console.log(recipes)
  }

  useEffect(() => {
    console.log(params)
    getCuisine(params.type) //@ pass params (name) to getCuisine
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/"+item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
        </Card>
      )
      })}
    </Grid>
  )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(15rem, 1fr));
grid-gap: 2rem;
`

const Card = styled.div`
img{
  width: 100%;
  border-radius: 2rem;
  align-self: center;
}

a{
  text-decoration: none;
}

h4{
  text-align: center;
  padding: 1rem;
}
`


export default Cuisine