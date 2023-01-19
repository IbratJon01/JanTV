import {Link} from 'react-router-dom'
import { Stack,Box,Container, Typography } from '@mui/material'
import {useState} from 'react'
import {colors} from "../../constants/colors"
import { Category } from '../'
import { category } from '../../constants'
const Main=()=> {
  const [selectedCategory,setSelectedCategory ] = useState('New')
  
  const selectedCategoryHandler = category => setSelectedCategory(category)
    
  
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
      Vedos
  </Container>

</Box>
  </Stack>
  )
}

export default Main