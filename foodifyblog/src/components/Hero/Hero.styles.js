import styled from 'styled-components';
import ImgBg from '../../images/hero-bg.png';

export const HeroContainer = styled.div`
background-image: linear-gradient( to top right, rgba(11, 10, 10, 0.38), rgba(11, 10, 10, 0.19)), url(${ImgBg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 74vh;

@media only screen and (max-width:1600px) {
    height: 85vh;
}
`;

export const HeroContent = styled.section`
height: 100%;
width: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
color: #FFFEFE;

@media only screen and (max-width:375px) {
    text-align: start;
    height: 80%;
}
`;

export const HeroTitle = styled.h1`
font-size: clamp(1rem, 10vw, 5rem);
font-weight: 900;
letter-spacing: .5rem;
line-height: 1.3;
`;