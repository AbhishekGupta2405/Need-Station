import styles from './Cards.module.css';

import image1 from '../assets/images/cardImage1.jpg';
import image2 from '../assets/images/cardImage2.jpeg';
import image3 from '../assets/images/cardImage4.jpg';

const Cards = () => {
  return <>
    <section className={`py-5 ${styles["section"]}`}>
    <div className="container">
      <h2 className={`text-center mb-4 ${styles["heading"]}`}>Explore Our Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className={`card ${styles["card"]}`}>
            <img src={image1} className="card-img-top" alt="Elder Care"/>
            <div className="card-body">
              <h5 className={`card-title ${styles["cardTitle"]}`}>Elder Care</h5>
              <p className={`card-text ${styles["cardBody"]}`}>Compassionate care for your elderly family members.</p>
              <a href="#" className={`btn btn-primary ${styles["cardButton"]}`}>Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={`card ${styles["card"]}`}>
            <img src={image2} className="card-img-top" alt="Babysitting"/>
            <div className="card-body">
              <h5 className={`card-title ${styles["cardTitle"]}`}>Babysitting</h5>
              <p className={`card-text ${styles["cardBody"]}`}>Trustworthy and experienced babysitters to safely take care of your kids.</p>
              <a href="#" className={`btn btn-primary ${styles["cardButton"]}`}>Learn More</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className={`card ${styles["card"]}`}>
            <img src={image3} className="card-img-top" alt="Household Services"/>
            <div className="card-body">
              <h5 className={`card-title ${styles["cardTitle"]}`}>Household Services</h5>
              <p className={`card-text ${styles["cardBody"]}`}>Professional help for cleaning, cooking, and more.</p>
              <a href="#" className={`btn btn-primary ${styles["cardButton"]}`}>Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  </>
}

export default Cards;