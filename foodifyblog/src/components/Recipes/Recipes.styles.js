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
