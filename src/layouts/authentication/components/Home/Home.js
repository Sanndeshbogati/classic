import React from 'react';
import { Button, Typography, Grid, Paper, Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import sp1 from '../../../../assets/images/slidHome/sp1.jpg';
import sp2 from '../../../../assets/images/slidHome/sp2.png';
import s1 from '../../../../assets/images/slidHome/s1.jpg';
import s2 from '../../../../assets/images/slidHome/s2.jpg';

const items = [
  {
    backgroundImage: s1,
    img: sp1,
    title: 'Water Filter',
    subtitle: 'Online shop',
    description:
      'There are many different varieties of flower honey available… Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac laoreet lacus. Morbi auctor quam tempus massa vestibulum aliquet eu vitae ligula.',
    buttonLabel: 'Buy Now',
    
  },
  {
    backgroundImage: s2,
    img: sp2,
    title: 'Aqua Filter',
    subtitle: 'Online shop',
    description:
      'There are many different varieties of flower honey available… Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac laoreet lacus. Morbi auctor quam tempus massa vestibulum aliquet eu vitae ligula.',
    buttonLabel: 'Buy Now',
  },
 
];

const Home = () => {
  return (
    <div maxWidth="xl" style={{ height: '100vh', overflow: 'hidden' }}>
      <Carousel interval={500} timeout={500} animation="fade">
        {items.map((item, index) => (
          <Paper
            key={index}
            style={{
              backgroundImage: `url(${item.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div className="carousel-caption d-md-block" style={{ margin: '20px' }}>
              <Grid container>
                <Grid item xs={12} lg={6} className="animate__animated animate__bounceInLeft text-start" style={{padding:"100px",    animation: "slide-left 3s"}}>
                  <Typography variant="h4" className="fs-12 fw-bolder text-start text-white" style={{fontSize:"5.5rem"}}>
                    {item.title}
                    <br />
                    <span className="text-primary" style={{color:"blue"}}>{item.subtitle}</span>
                  </Typography>
                  <Typography variant="body1" className="text-dark d-none d-md-block text-start text-white" style={{padding:"20px"}}>
                    {item.description}
                  </Typography>
                  <div className="d-inline-block pt-5 text-start d-none d-lg-block">
                    <Button variant="contained" color="primary" className="fs-5 fw-bolder px-5 py-2" style={{backgroundColor: "#1690f0",borderColor: "#1690f0",color: "#ffff",fontSize: "25px"}}>
                      {item.buttonLabel}
                    </Button>
                    <Button variant="outlined" style={{ border:"2px solid  #1690f0",color: "'#1690f0",marginLeft:"20px",fontSize: "25px",color:"#1690f0"}}>{item.buttonLabel}</Button>
                  </div>
                </Grid>
                <Grid item xs={12} lg={6} className="animate__animated animate__bounceInRight d-none d-lg-block" style={{transform: "translateZ(0px)",animation: "slide-left 3s"}}>
                  <img src={item.img} alt="" className="w-100" style={{width:"90%",marginTop:"50px"}} />
                </Grid>
              </Grid>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
