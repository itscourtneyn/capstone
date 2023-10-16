
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import sourdough1 from "../assets/images/sourdough1.jpg";
import sourdough2 from "../assets/images/sourdough2.jpg";
import sourdough3 from "../assets/images/sourdough3.jpg";
import sourdough4 from "../assets/images/sourdough4.jpg";
import sourdough_background from "../assets/images/sourdough_background.jpg"

const defaultTheme = createTheme();

export default function About() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            backgroundImage: `url(${ sourdough_background })`,
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color= "#78350f"
            
              gutterBottom
            >
              All About Sourdough
            </Typography>
            <Typography variant="h6" align="center" color="#422006" paragraph >

            Sourdough, the revered artisanal bread-making method, not only celebrates the heritage and alchemy of fermentation but also offers a plethora of wholesome benefits. Beyond its role in creating delectable loaves, sourdough embodies a unique synergy between wild yeasts and lactic acid bacteria, delivering a bread rich in flavor and texture. Yet, its appeal extends beyond taste, as sourdough boasts nutritional advantages, including increased digestibility and bioavailability of nutrients. For those drawn to its slower, more deliberate pace, sourdough baking becomes a mindfulness practice, fostering a sense of connection to the food we create and consume. In the world of sourdough, we delve into the time-honored craft that not only delights the palate but nourishes the body and soul.            </Typography>

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
                      pt: '100%',
                    }}
                    image= {sourdough1}
                  />
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
                      pt: '100%',
                    }}
                    image= {sourdough2}
                  />
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
                      pt: '100%',
                    }}
                    image= {sourdough3}
                  />
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
                      pt: '100%',
                    }}
                    image= {sourdough4}
                  />
                  </Card>
              </Grid>
            {/* ))} */}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Visit our "Getting Started" tab to learn how to make a sourdough starter.
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}







// export default About