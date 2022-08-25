import { useEffect, useState } from "react"
import styled from 'styled-components'
import {useParams} from "react-router-dom"

function Recipe() {
  let params = useParams()
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')

  useEffect(() => {

    const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_SPOON_API_KEY}`)
    const detailData = await data.json()
    setDetails(detailData)
    }


    try {
      fetchDetails()
    } catch(err) {
      // catches errors both in fetch and response.json
      console.log(err)
      alert(err);
    }






    
  }, [params.name])
// console.log(details.extendedIngredients[0].original)
  return (
    <DetailWrapper className="detail-wrapper">
      
      <div className="recipe-details">
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>

      <Info>
        <ButtonContainer className="button-container">
          <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>Instructions</Button>
          <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
        </ButtonContainer>
       
        {activeTab === "instructions" && 
          <div>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
          </div>
        }
      
        {activeTab === "ingredients" &&
        <ul>
          {
            details.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original }</li>
            })
          }
        </ul> }
        
      </Info>
      
    </DetailWrapper>
  )
}



const DetailWrapper = styled.div`
margin-bottom: 5rem;
display: flex;

.active{
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
}

h2{
  margin-bottom: 2rem;
}

li{
  font-size: 1.2rem;
  line-height: 2.5rem;
}

ul{
  margin-top: 2rem;
  padding-left: 2rem;
}
`

const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin: 1rem;
font-weight: 600;
`

const Info = styled.div`
/* display: flex; */
/* height: 50px; */
/* flex-direction: row; */
/* margin-left: 2rem; */
`

const ButtonContainer = styled.div`
  display: flex;
`



export default Recipe