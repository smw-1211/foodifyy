import {OutlineButton} from '../../Globalstyles';
import SalmonImg from '../../images/salmon.png';

import {
    RecipeContainer,
    RecipeWrapper,
    RecipeTitle,
    RecipeContentContainer,

} from './Recipes.styles';
const Recipes = () => {
    return (
        <div>
            <RecipeWrapper>
                <RecipeContainer>
                    <RecipeTitle>Recipes</RecipeTitle>
                </RecipeContainer>
            </RecipeWrapper>
            
        </div>
    );
}

export default Recipes;