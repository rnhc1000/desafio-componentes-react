import './styles.css';
import car from '../../assets/car-card.svg';

export default function CardCar() {
    return (
        <>
            <section id="card-car-section" className="card-car-container">
                
                <div className="card-car">
                    <img src={car} alt="car" />
                    <h3>Lorem ipsum dolor</h3>
                </div>
                <div className="card-car">
                    <img src={car} alt="car" />
                    <h3>Lorem ipsum dolor</h3>

                </div>
            </section>
        </>
    );
}