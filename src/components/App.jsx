import '../styles/index.scss';
import Recipes from './Recipes';
import sword from '../images/swc-sword.png';
import swordSvg from '../images/sword.svg';

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh hi, React</h1>
        </section>
        <img src={sword} alt="sword" width={100} />
        <img src={swordSvg} alt="sword" width={100} />
        <Recipes />
      </main>
    </>
  );
};

export default App;
