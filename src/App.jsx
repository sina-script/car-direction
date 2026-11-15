import "./App.css";

export default function App() {
  return (
    <div className="motor-wrap">
      <div className="glow-top"></div>
      
      <div className="container">
        <header className="header">
          <div className="brand-tag">PREMIUM ARCHIVE</div>
          <h1 className="title">BRANDS <span className="ruby-stroke">UNIT</span></h1>
          
          <div className="select-mega-wrapper">
            <div className="select-inner-panel">
              <div className="panel-status"></div>
              <select id="origin-filter" className="real-black-select">
                <option value="all">-- ALL LEGENDS --</option>
                <option value="german">GERMAN ENGINEERING</option>
                <option value="italian">ITALIAN DESIGN</option>
              </select>
              <div className="select-arrow"></div>
            </div>
            <div className="panel-shadow"></div>
          </div>
        </header>

        <section className="gallery">
          <div className="grid">
            
            <article className="card" data-origin="german">
              <div className="shimmer-effect"></div>
              <div className="card-top">
                <span className="idx">01</span>
                <span className="origin">GERMANY</span>
              </div>
              <div className="logo-area">
                <div className="ring-anim"></div>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Porsche_logo.svg/1200px-Porsche_logo.svg.png" alt="Porsche" />
              </div>
              <div className="details">
                <h2>PORSCHE</h2>
                <div className="line"></div>
                <p>STUTTGART ORIGIN</p>
              </div>
            </article>

            <article className="card" data-origin="italian">
              <div className="shimmer-effect"></div>
              <div className="card-top">
                <span className="idx">02</span>
                <span className="origin">ITALY</span>
              </div>
              <div className="logo-area">
                <div className="ring-anim"></div>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Ferrari-Logo.svg/800px-Ferrari-Logo.svg.png" alt="Ferrari" />
              </div>
              <div className="details">
                <h2>FERRARI</h2>
                <div className="line"></div>
                <p>MARANELLO ORIGIN</p>
              </div>
            </article>

            <article className="card" data-origin="german">
              <div className="shimmer-effect"></div>
              <div className="card-top">
                <span className="idx">03</span>
                <span className="origin">GERMANY</span>
              </div>
              <div className="logo-area">
                <div className="ring-anim"></div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png" alt="Mercedes" />
              </div>
              <div className="details">
                <h2>MERCEDES</h2>
                <div className="line"></div>
                <p>STUTTGART ORIGIN</p>
              </div>
            </article>

            <article className="card" data-origin="italian">
              <div className="shimmer-effect"></div>
              <div className="card-top">
                <span className="idx">04</span>
                <span className="origin">ITALY</span>
              </div>
              <div className="logo-area">
                <div className="ring-anim"></div>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png" alt="Lamborghini" />
              </div>
              <div className="details">
                <h2>LAMBORGHINI</h2>
                <div className="line"></div>
                <p>SANT'AGATA ORIGIN</p>
              </div>
            </article>

          </div>
        </section>
      </div>
    </div>
  );
}
