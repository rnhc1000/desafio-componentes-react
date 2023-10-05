import './styles.css';
import HeaderCar from '../../components/HeaderCar';
import CardCar from '../../components/CardCar';
import CommentCard from '../../components/CommentCard';
import FooterCar from '../../components/FooterCar';

export default function CarIndex() {

   return (
      <>
         <HeaderCar />
         <main>
            <h1 className="car-title">Venha nos visitar</h1>
            <CardCar />
            <CommentCard />
         </main>
         <FooterCar />
      </>
   );

}
