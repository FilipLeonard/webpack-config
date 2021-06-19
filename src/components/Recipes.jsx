import { useState } from 'react';

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 3,
};

const Recipes = () => {
  const [recipe, setRecipe] = useState({});

  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>Shield</button>
      <button onClick={() => setRecipe(elvenGauntletRecipe)}>Gauntlet</button>
      <ul>
        {Object.keys(recipe).map(material => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
