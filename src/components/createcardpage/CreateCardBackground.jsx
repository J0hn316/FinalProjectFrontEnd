import '../createcardpage/createcard.css';
import Img from '../../../images/PokemonCards1.png';

export default function CreateCardBg() {
  return (
    <div className="CCBG">
      <img src={Img} alt="PokemonCard Background" />
    </div>
  );
}
