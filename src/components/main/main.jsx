import {useState , useEffect} from 'react'
import { Stack,Box,Container, Typography } from '@mui/material'
import {colors} from "../../constants/colors"
import { Category ,Videos } from '../'
import {ApiService} from "../../server/api.service"
const Main=()=> {
  const [selectedCategory,setSelectedCategory ] = useState('New')
  
  const selectedCategoryHandler = category => setSelectedCategory(category)
    
  useEffect(()=>{
    ApiService.fetching('search').then(data=> console.log(data))

  },[])
 
  
  return (
    
  <Stack>
<Category
selectedCategoryHandler={selectedCategoryHandler}
selectedCategory={selectedCategory}
/>

<Box p={2} sx={{height: '90vh'}}>
  <Container maxWidth={'90%'}>
    <Typography variant='h4' fontWeight={'bold'} nb={2}>
      {selectedCategory }<span style={{color:colors.secondary}}> video</span>
      </Typography>
      <Videos/>
  </Container>

</Box>
  </Stack>
  )
}

export default Main