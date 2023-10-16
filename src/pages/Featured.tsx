import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';


import recipe1 from "../assets/images/recipe1.jpg"
import recipe2 from "../assets/images/recipe2.jpg"
import recipe3 from "../assets/images/recipe3.jpg"
import recipe4 from "../assets/images/recipe4.jpg"
import recipe5 from "../assets/images/recipe5.jpg"
import recipe6 from "../assets/images/recipe6.jpg"
import recipe7 from "../assets/images/recipe7.jpg"
import recipe8 from "../assets/images/recipe8.jpg"
import sourdough_background from "../assets/images/sourdough_background.jpg"


const defaultTheme = createTheme();

export default function Featured() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div 
      style={{ backgroundImage: `url(${ sourdough_background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover'
      >
        <div className='flex place-items-center h-screen'>
        </div>
   
      <main>
        <Box
          sx={{
            bgcolor: 'transparent',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color= "#422006"
              gutterBottom
            >
              Featured Recipes
            </Typography>
            {/* <Typography variant="h6" align="center" color="text.secondary" paragraph >
              There are so many different types and variations of wine.  However, there are four main classifications of wines.  Lets review their characteristics below:
            </Typography> */}

          </Container>
        </Box>


        <Container sx={{ py: 1 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '75%',
                    }}
                    image= {recipe1}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    
                    <Typography align="center" gutterBottom variant="h5" component="h2" >
                      Sourdough Bread
                    </Typography>
                    <Typography align="center">
                    
                    <a href="https://www.theclevercarrot.com/2014/01/sourdough-bread-a-beginners-guide/#sourdough-recipe" style={{ color: '#422006'}}>Link to Recipe</a>
                    </Typography>
                  </CardContent>
            
                </Card>
                
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '75%',
                    }}
                    image= {recipe2}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                    Brioche Hamburger Buns
                    </Typography>
                    <Typography align="center">
              
                    <a href="https://www.theclevercarrot.com/2013/05/light-brioche-hamburger-buns/" style={{ color: '#422006'}}>Link to Recipe</a>
                    </Typography>
                  </CardContent>

                </Card>
                
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '75%',
                    }}
                    image= {recipe3}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      Sourdough Brownies
                    </Typography>
                    <Typography align="center">
                    
                    <a href="https://littlespoonfarm.com/sourdough-brownies-recipe/" style={{ color: '#422006'}}>Link to Recipe</a>
                    </Typography>
                  </CardContent>

                </Card>
                
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '75%',
                    }}
                    image= {recipe4}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      Chocolate Chip Cookies
                    </Typography>
                    <Typography align="center">
                    
                    <a href="https://littlespoonfarm.com/sourdough-chocolate-chip-cookies-recipe/" style={{ color: '#422006'}}>Link to Recipe</a>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '75%',
                    }}
                    image= {recipe5}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      Sourdough Crackers
                    </Typography>
                    <Typography align="center">
                    
                    <a href="https://www.kingarthurbaking.com/recipes/sourdough-crackers-recipe" style={{ color: '#422006'}}>Link to Recipe</a>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '75%',
                    }}
                    image= {recipe6}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      Sourdough Sandwich Bread
                    </Typography>
                    <Typography align="center">
                    
                    <a href="https://www.theclevercarrot.com/2020/04/easy-sourdough-sandwich-bread/" style={{ color: '#422006'}}>Link to Recipe</a>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '75%',
                    }}
                    image= {recipe7}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      Sourdough Pancakes
                    </Typography>
                    <Typography align="center">
                    
                    <a href="https://www.theclevercarrot.com/2020/05/homemade-fluffy-sourdough-pancakes/" style={{ color: '#422006'}}>Link to Recipe</a>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '75%',
                    }}
                    image= {recipe8}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      Sourdough Cinnamon Rolls
                    </Typography>
                    <Typography align="center">
                    
                    <a href="https://www.theclevercarrot.com/2017/12/how-to-make-sourdough-cinnamon-rolls-step-by-step-guide/" style={{ color: '#422006'}}>Link to Recipe</a>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            {/* ))} */}
          </Grid>
        </Container>
      </main>
      </div>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          We encourage you to check out your local vineyards and wineries to learn more about the different types of wine, while supporting local businesses.
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}







// export default Featured