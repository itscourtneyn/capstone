
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();

export default function GettingStarted() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
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
              How To Start A Starter
            </Typography>
            <Typography variant="h6" align="center" color="#422006" paragraph >

            Welcome to the world of sourdough! Embarking on the journey to create your own sourdough starter is an exciting and rewarding adventure in bread making. A sourdough starter is the heart of sourdough bread, and nurturing it is a delightful blend of science and tradition. Here's a short video to get you started:          </Typography>

          </Container>
        </Box>


        <Container sx={{ py: 1 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={12}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <iframe width="100%" height="650" src="https://www.youtube.com/embed/kbw7lDO_kuY?si=r2GDvoX0kDLiFJan" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
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
          Check out our recipe tabs for inspiration for your new starter!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}







// export default About