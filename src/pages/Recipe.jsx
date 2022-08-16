import { useEffect, useState } from "react"
// import styled from 'styled-components'
import {useParams} from "react-router-dom"

function Recipe() {
  let params = useParams()
  const [details, setDetails] = useState({})

  useEffect(() => {
    const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_SPOON_API_KEY}`)
    const detailData = await data.json()
    setDetails(detailData)
  }
    fetchDetails()
  }, [params.name])

  return (
    <div>{details.title}</div>
  )
}

export default Recipe