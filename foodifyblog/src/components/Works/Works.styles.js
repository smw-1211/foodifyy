import styled from 'styled-components';
import {BiCheck, BiDetail, BiDish} from 'react-icons/bi';
import {Container} from '../../Globalstyles';

export const WorksContent = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 3rem;
`;
export const WorksContainer = styled(Container)`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 5rem 8rem;
color: #333333;

${Container};
`;

export const WorksTitle = styled.h2`
font-size: clamp(2rem, 8.5vw, 5rem);
font-weight: bold;
`;

export const WorksCardContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 5rem;

@media only screen and (max-width:900px){
    flex-direction: column;
}
`;