import { Button, Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const todo = () => {
   const [todo,setTodo]=useState([])

   useEffect(()=>{
    axios.get('http://localhost:3000/basics/').then((res)=>{
      setCourse(res.data);
    })
  },[])
      let deleteCourse=(p)=>{
        axios.delete('http://localhost:3000/basics/delete/'+p).then((res)=>{
          alert('deleted');
          window.location.reload();
        })
      }
  return (
    
    <div style={{ padding: '20px', marginTop:'6%'}}> 
    
     <Grid2 container spacing={1} >
      {todo.map((item) => (
        <Grid2 item xs={12} sm={6} md={4} lg={3} key={item.courseId}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%',width:'300px' }}>
            <CardMedia
              sx={{ height: 250 }}
              title={item.description}
            />
            <CardContent sx={{flex: '1 0 auto'}}>
              
              
              
              <Typography><br />
                
                <Button sx={{backgroundColor:'red',color:'white'}} onClick={()=>{deleteCourse(item._id)}}>Delete</Button>
                
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
 

  </div>
  )
}

export default todo
