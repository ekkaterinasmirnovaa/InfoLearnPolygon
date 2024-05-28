import { useState } from "react";
import "./App.css";
import "./LoginForm.css";
import katarium from "./images/Katarium_start.png";
import waterfall from "./images/waterfall.png";
import tina from "./images/Tina.png";
import behman from "./images/Behman.png";
import map from "./images/map.png";

function CollapseButton({ name, children, symbol }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ backgroundColor: "#EFEEEC" }}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="sign-in"
        style={{ display: "flex", gap: "40px", width: "100%", fontfontFamily: "Futura, sans serif", borderBottom: "0px solid #000000", borderRight: "0px", backgroundColor: "#EFEEEC", paddingLeft: "75px" }}
      >
        {name}{" "}
        <div
          style={{
            transform: isOpen ? "rotate(-90deg)" : "rotate(90deg)",
            marginTop: "5px",
          }}
        >
          {symbol}
        </div>
      </button>
      {isOpen && children}
    </div >
  );
}



function Burger({ isOpen, open, close, page }) {
  return (
    <div style={{ marginLeft: "auto", position: "relative", border: "0px solid #000000" }}>
      <button
        onClick={() => {
          if (isOpen) {
            close();
          } else {
            open();
          }
        }}
        style={{
          border: "0px solid #000000",
          background: page() === "information" ? "#E1D6E7" : "#EFEEEC"
        }}>
        {isOpen ? <div style={{ border: "0px solid #000000" }}>X</div> : "="}
      </button>
    </div>
  );
}


function LoginForm() {
  return (
    <div className="ring">
      {/* <i style={{ '--clr': '#00ff0a' }}></i>
      <i style={{ '--clr': '#ff0057' }}></i>
      <i style={{ '--clr': '#fffd44' }}></i> */}
      <div className="login">
        {/* <h2>Login</h2> */}
        <div className="inputBx">
          <input type="text" placeholder="Логин" />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Пароль" />
        </div>
        <div className="inputBx">
          <input type="submit" value="Войти" />
        </div>
        <div className="links">
          <a href="#">Восстановление доступа</a>
          {/* <a href="#">Signup</a> */}
        </div>
      </div>
    </div>
  );
}

function RegForm() {
  return (
    <div className="ring">
      {/* <i style={{ '--clr': '#00ff0a' }}></i>
      <i style={{ '--clr': '#ff0057' }}></i>
      <i style={{ '--clr': '#fffd44' }}></i> */}
      <div className="login">
        {/* <h2>Login</h2> */}
        <div className="inputBx">
          <input type="text" placeholder="Логин" />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Пароль" />
        </div>
        <div className="inputBx">
          <input type="submit" value="Войти" />
        </div>
        {/* <div className="links"> */}
        {/* <a href="#">Восстановление доступа</a> */}
        {/* <a href="#">Signup</a> */}
        {/* </div> */}
      </div>
    </div>
  );
}





function AuthPage({ goToinformationPage }) {
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  return (
    <>
      <div style={{ flexGrow: 1, background: "#E1D6E7" }}>
        <CollapseButton name="Вход" symbol={">"}>
          <div><LoginForm /></div>
        </CollapseButton>
        <CollapseButton name="Регистрация" symbol={">"}>
          <div><RegForm /></div>
        </CollapseButton>
      </div>
      <button onClick={goToinformationPage} style={{ backgroundColor: "#000000", padding: "10px 10px", }}><div style={{ color: "#845BFF", background: "#EEEDEB", borderRadius: "20px", fontSize: "30px" }}>{">"}</div></button>
    </>
  );
}


function MagicButton({ goToAuth }) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    opacity: isHovered ? 1 : 0.1,
    transition: 'opacity 0.3s ease',
    padding: '10px 20px',
    position: "fixed",
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      onClick={goToAuth()}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Домой
    </button>
  );

}



function LandingPage({ goToAuth }) {
  return (
    <div style={{ backgroundColor: "#F5F1E7", width: "100%" }}>
      <MagicButton goToAuth={() => goToAuth} />
      < img src={katarium} alt="katarium" style={{ width: "100%" }} />
      <p style={{ fontFamily: "Romile Personal Use", fontSize: "92px", paddingLeft: "230px", paddingRight: "230px" }}>ИСТОРИЯ</p>
      <p style={{ paddingLeft: "230px", paddingRight: "230px", fontFamily: "IBM Plex Sans", fontSize: "28px" }}>
        В 1550-х годах на севере острова Итугум, омываемом Аравийским морем, сложилось господство королевства Катарий, претендующего на обладание абсолютной властью. Оно постоянно вело разрушительные захватнические войны с соседями, завоевывая и присоединяя к себе все новые территории.
      </p>
      <p style={{ paddingLeft: "230px", paddingRight: "230px", fontFamily: "IBM Plex Sans", fontSize: "28px" }}>
        На южной стороне острова располагалось небольшое, но сильное королевство Риум. Его земли располагались вдоль крупных полноводных рек Гицем и Сея, а также в Ямчинских горах. Его населяли воинственные племена, грозно защищавшие границы своего королевства и совершающие стремительные набеги на территории Катария, доставляя много хлопот его властям.
      </p>
      <img src={waterfall} style={{ width: "100%" }} alt="waterfall"></img>
      <p style={{ paddingLeft: "230px", paddingRight: "230px", fontFamily: "IBM Plex Sans", fontSize: "28px" }}>
        Население Риума занималось поиском золотых и серебрянных месторождений, а также добычей железной руды, необходимой для производства оружия и военной амуниции. Кроме добычи металлов, большое внимание было уделено скотоводству и земледелию. Этому способствовало наличие плодородных земель и множества горных и равнинных пастбищ.
      </p>
      <hr style={{
        width: "25%"
      }}></hr>
      <p style={{ paddingLeft: "105px", paddingRight: "43px", fontFamily: "IBM Plex Sans", fontSize: "35px", color: "#B64D4A", position: "center" }}>
        Однако власти Катария имели большие планы на плодородные земли и богатства южной территории острова, где располагался Риум, для роста благосостояния жителей королевства.
      </p>
      <p style={{ paddingLeft: "230px", paddingRight: "230px", fontFamily: "IBM Plex Sans", fontSize: "28px" }}>
        В 1556 году Королевство Катарий начало военный поход против государства Риум. Его войска провели долгие недели в изнуряющих сражениях, так и не сумев захватить власть над столицей. Изнуренные постоянными войнами, правители двух королевств решили сесть за стол переговоров.
      </p>
      <p style={{ paddingLeft: "230px", paddingRight: "230px", fontFamily: "IBM Plex Sans", fontSize: "28px" }}>
        В ходе долгих дискуссий, правители поняли, что объединение двух королевств в одну сильную и самостоятельную республику станет наилучшим решением для процветания и благополучия жителей. Они подписали Итугумский мирный договор, который послужил началом для развития нового государства – Катариум, в составе которого находятся две провинции Катарий и Риум.
      </p>
      <p style={{ fontFamily: "Romile Personal Use", fontSize: "92px", paddingLeft: "230px", paddingRight: "230px", position: "center" }}>
        ГЕОГРАФИЧЕСКОЕ ПОЛОЖЕНИЕ
      </p>
      < img src={map} alt="map" style={{ width: "100%" }} />
      <p style={{ paddingLeft: "230px", paddingRight: "230px", fontFamily: "IBM Plex Sans", fontSize: "28px" }}>
        На территории острова преобладает тропический климат с сезоном муссонов. Температура воздуха стабильна круглый год — 25–30 градусов. С конца мая по август выпадает 80% осадков.
      </p>
      <p style={{ fontFamily: "Romile Personal Use", fontSize: "92px", paddingLeft: "230px", paddingRight: "230px", position: "center" }}>
        ПОЛИТИЧЕСКОЕ УСТРОЙСТВО
      </p>
      <p style={{ paddingLeft: "105px", paddingRight: "43px", fontFamily: "IBM Plex Sans", fontSize: "35px", textAlign: "center" }}>
        Сегодня Катариум — это демократическая республика с парламентской формой правления
      </p>
      <p style={{ paddingLeft: "105px", paddingRight: "43px", fontFamily: "IBM Plex Sans", fontSize: "35px", textAlign: "center" }}>
        Главы государства
      </p>
      <div style={{ display: "flex", paddingLeft: "350px" }}>
        <div style={{ padding: "50px", left: "200px" }}>
          < img src={tina} alt="tina" style={{ width: "100%", margin: "50px" }} />
          <p style={{ paddingLeft: "105px", paddingRight: "43px", paddingTop: "20px", fontFamily: "IBM Plex Sans", fontSize: "35px", textAlign: "center" }}>
            Тина Вильсон
          </p>
          <p style={{ paddingLeft: "105px", paddingRight: "43px", fontFamily: "IBM Plex Sans", fontSize: "35px", textAlign: "center" }}>
            Капитан-Регент
          </p>
        </div>
        <div style={{ padding: "50px", left: "200px" }}>
          < img src={behman} alt="behman" style={{ width: "100%", margin: "50px" }} />
          <p style={{ paddingLeft: "105px", paddingRight: "43px", paddingTop: "20px", fontFamily: "IBM Plex Sans", fontSize: "35px", textAlign: "center" }}>
            Бехман Гарун
          </p>
          <p style={{ paddingLeft: "105px", paddingRight: "43px", fontFamily: "IBM Plex Sans", fontSize: "35px", textAlign: "center" }}>
            Капитан-Регент
          </p>
        </div>
      </div>
    </div >
  );
}


function InfoPage() {
  return (
    <div style={{ fontFamily: "Futura, sans-serif", paddingLeft: "75px", paddingRight: "125px" }}>
      <p style={{ fontSize: "80px" }}>Информационный учебный полигон “Катариум”</p>
      <p style={{ fontSize: "28px", marginTop: "50px" }}>О системе</p>
      <p style={{ fontSize: "28px" }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
        dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
        sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
        vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      </p>
    </div>
  );
}

function InformationPage({ goToAuth }) {
  return (
    <div style={{ display: "flex", background: "E1D6E8" }}>
      <button onClick={goToAuth} style={{ backgroundColor: "#000000", padding: "10px 10px", }}><div style={{ color: "#845BFF", background: "#EEEDEB", borderRadius: "20px", fontSize: "30px" }}>{"<"}</div></button>
      <InfoPage />
    </div>
  );
}

function App() {
  const [page, setPage] = useState("auth");
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {page === "landing" ? (
        <LandingPage goToAuth={() => setPage("auth")} />
      ) : (
        <>
          <header
            style={{
              display: "flex",
              padding: "20px",
              borderBottom: "1px solid black",
              background: page === "information" ? "#E1D6E7" : "#EFEEEC",
            }}
          >
            <span>О системе</span>
            <Burger
              isOpen={burgerIsOpen}
              open={() => setBurgerIsOpen(true)}
              close={() => setBurgerIsOpen(false)}
              page={() => page}
            />
          </header>
          <main style={{ display: "flex", flexGrow: 1, backgroundColor: "#E1D6E7" }}>
            {burgerIsOpen ? (
              <div style={{ flexGrow: 1, background: "#E1D6E7" }}>
                <button
                  onClick={() => {
                    setPage("landing");
                    setBurgerIsOpen(false);
                  }}
                  style={{ display: "flex", padding: "30px", gap: "40px", width: "100%", fontfontFamily: "Futura, sans serif", borderBottom: "1px solid #000000", borderTop: "0px solid #000000", borderRight: "0px", backgroundColor: "#EFEEEC", paddingLeft: "75px", fontSize: "42px" }}
                >
                  Лендинг
                </button>
                <button
                  onClick={() => {
                    setPage("auth");
                    setBurgerIsOpen(false);
                  }}
                  style={{ display: "flex", gap: "40px", padding: "30px", width: "100%", fontfontFamily: "Futura, sans serif", borderBottom: "1px solid #000000", borderTop: "0px solid #000000", borderRight: "0px", backgroundColor: "#EFEEEC", paddingLeft: "75px", fontSize: "42px" }}
                >
                  Сайт политического устройства
                </button>
                <button
                  onClick={() => {
                    setPage("auth");
                    setBurgerIsOpen(false);
                  }}
                  style={{ display: "flex", gap: "40px", padding: "30px", width: "100%", fontfontFamily: "Futura, sans serif", borderBottom: "1px solid #000000", borderTop: "0px solid #000000", borderRight: "0px", backgroundColor: "#EFEEEC", paddingLeft: "75px", fontSize: "42px" }}
                >
                  Биржа труда
                </button>
                <button
                  onClick={() => {
                    setPage("auth");
                    setBurgerIsOpen(false);
                  }}
                  style={{ display: "flex", gap: "40px", padding: "30px", width: "100%", fontfontFamily: "Futura, sans serif", borderBottom: "1px solid #000000", borderTop: "0px solid #000000", borderRight: "0px", backgroundColor: "#EFEEEC", paddingLeft: "75px", fontSize: "42px" }}
                >
                  Новостной ресурс
                </button>
              </div>
            ) : page === "auth" ? (
              <AuthPage goToinformationPage={() => setPage("information")} />
            ) :
              infoIsOpen ? (
                <div style={{ border: "1px solid black", width: "100%" }}>
                  <button
                    onClick={() => {
                      setPage("landing");
                      setInfoIsOpen(false);
                    }}
                    style={{ display: "block", marginTop: "10px" }}
                  >
                  </button>
                </div>
              ) : page === "information" ? (
                <InformationPage goToAuth={() => setPage("auth")} />
              ) :
                null}
          </main>
        </>
      )}
    </div>
  );
}

export default App;