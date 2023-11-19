import styled from 'styled-components';

export const RecipeWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 6rem 0;
`;
export const RecipeContainer = styled(Container)`
display: flex;
flex-direction: column;
${Container};
`;

export const RecipeTitle = styled.h2`
font-size: clamp(2rem, 8vw, 5rem);
text-align: center;
margin-bottom: 3rem;
font-weight: bold;

@media only screen and (max-width:700px){
    margin-bottom: 0;
}
`;

export const RecipeContentContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const RecipeTabContainer = styled.div`
display: flex;
justify-content:center;
align-items:center;                                                                                                     
@media only screen and (max-width:700px){
    display: none;
}                                                                            
`;

export const RecipeBtn = styled(Link)`
&:not(:last-child){
    margin-right: 3rem;
}
@media only screen and (max-width: 700px){
    display: none;
 }

`;

//Recipe card section

export const RecipeCardWrapper = styled.div`                                                
display: flex;                                                                                                                                                                                                                                                                                                                                                                                                                                        
justify-content: space-between;
align-items: center;
margin-top: 6rem;
flex-direction: column;

@media only screen and (min-width:1800px) {
    flex-direction: row;
}
`;

export const RecipeFeature = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 650px;
height: 320px;
background-color: #fff;
box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.18);
border-radius: 40px;
transition: all .4s ease;
margin-bottom: 5rem;
cursor: pointer;

@media only screen and (min-width: 1800px){
    margin-right: 10rem;
    padding: 0;
}

&:hover{
    box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.12);
    transform: scale(1.05);
    background-color: #333;
    color: #fff;
}

@media only screen and (min-width:1000px) {
    flex-direction: row;
}
@media only screen and (max-width:900px){
    margin-bottom: 10rem;
}
@media only screen and (max-width:700px){
    width: 550px;
    margin-bottom: 3rem;
    &:hover{
        transform: scale(1.02);
    }
}
@media only screen and (max-width:600px){
    width: 500px;
}
@media only screen and (max-width:500px){
    width: 380px;
    height: 300px;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.10);

}
@media only screen and (max-width:400px){
    width: 330px;
}
`;

export const RecipeImg = styled.img`
height: 80%;
margin-top: 2rem;
margin-left: 2rem;
transition: all .5s ease;

&:hover {
    transform: scale(1.14) rotate(360deg);
}
@media only screen and (max-width:700px){
    height: 58%;
}
@media only screen and (max-width:600px){
    height: 50%;
}
@media only screen and (max-width:500px){
    height: 30%;
}
`;

export const RecipeFeatureContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 2rem;

@media only screen and (max-width:500px){
    padding: 2rem;
    align-items: center;
}
`;

export const RecipeFeatureTitle = styled.h3`
font-size: 3.6rem;
font-weight: 400;
line-height: 1.3;
margin-bottom: .6rem;

@media only screen and (max-width:700px){
    font-size: 3rem;
}
@media only screen and (max-width:600px){
    font-size: 2.5rem;
}
@media only screen and (max-width:400px){
    font-size: 2rem;
}
`;