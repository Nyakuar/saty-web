import BlueImage from '../images/blue2.PNG';
import GoldImage from '../images/Gold1.PNG';
import GreyImage from '../images/grey.PNG';
import RedImage from '../images/red1.PNG';
import BlackImage from '../images/black.png';

const Collections = () => {
  return (
    <>
      <div className="categoryTitle" id="id-best">
        <h1>Our best Collections</h1>
      </div>

      <section className="products-area">
        <section className="cards-area">
          <div className="card">
            {/* <!-- <div className="newSymbol">SALE</div> --> */}
            <div className="cardImage">
              <img src={BlueImage} className="card-img-top" alt="product" />
            </div>

            <div className="card-body">
              <h5 className="card-title">Smart Whistle Alarm </h5>
              {/* <!-- <div className="product-prices">
              <p className="discountpr">$00.00</p>
              <p className="card-text price">$00.00</p> --> */}
            </div>

            <a href="#" className="btn btn-dark cartButton">
              Add to Cart
            </a>
          </div>
          {/* </div> */}

          <div className="card">
            {/* <!-- <div className="newSymbol">SALE</div> --> */}
            <div className="cardImage">
              <img src={GoldImage} className="card-img-top" alt="product" />
            </div>

            <div className="card-body">
              <h5 className="card-title">Smart Whistle Alarm </h5>
              {/* <!-- <div className="product-prices"> -->
              <!-- <p className="discountpr">$00.00</p>
              <p className="card-text price">$00.00</p> --> */}
            </div>

            <a href="#" className="btn btn-dark cartButton">
              Add to Cart
            </a>
          </div>
          {/* </div> */}

          <div className="card">
            {/* <!-- <div className="newSymbol">SALE</div> --> */}
            <div className="cardImage">
              <img src={GreyImage} className="card-img-top" alt="product" />
            </div>

            <div className="card-body">
              <h5 className="card-title">Smart Whistle Alarm </h5>
            </div>

            <a href="#" className="btn btn-dark cartButton">
              Add to Cart
            </a>
          </div>
          {/* </div> */}

          <div className="card">
            <div className="cardImage">
              <img src={RedImage} className="card-img-top" alt="product" />
            </div>

            <div className="card-body">
              <h5 className="card-title">Smart Whistle Alarm </h5>
              {/* <!-- <div className="product-prices"> -->
              <!-- <p className="discountpr">$00.00</p>
              <p className="card-text price">$00.00</p> --> */}
            </div>

            <a href="#" className="btn btn-dark cartButton">
              Add to Cart
            </a>
          </div>
        </section>

        <div className="card">
          {/* <!-- <div className="newSymbol">SALE</div> --> */}
          <div className="cardImage">
            <img src={BlackImage} className="card-img-top" alt="product" />
          </div>

          <div className="card-body">
            <h5 className="card-title">Smart Whistle Alarm </h5>
            {/* <!-- <div className="product-prices"> -->
              <!-- <p className="discountpr">$00.00</p>
              <p className="card-text price">$00.00</p> --> */}
          </div>

          <a href="#" className="btn btn-dark cartButton">
            Add to Cart
          </a>
        </div>
      </section>
      <div className="text-center">
        <button className="shopButton viewAllButon">View All</button>
      </div>
    </>
  );
};

export default Collections;
