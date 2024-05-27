import { useState } from "react";
import "./App.css";
import "./LoginForm.css";
import katarium from "./images/Katarium_start.png";
import waterfall from "./images/waterfall.png";

function CollapseButton({ name, children, symbol }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="sign-in"
        style={{ display: "flex", gap: "10px", width: "100%", fontfontFamily: "Futura, sans serif", borderBottom: "0px solid #000000", borderRight: "0px" }}
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

// function CollapseButtonv2({ name, children, symbol }) {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setIsOpen(!isOpen);
//         }}
//         className="sign-in"
//       >
//         {name}{" "}
//         <div
//           style={{
//             transform: isOpen ? "rotate(-90deg)" : "rotate(90deg)",
//             marginTop: "5px",
//           }}
//         >
//           {symbol}
//         </div>
//       </button>
//       {isOpen && children}
//     </div>
//   );
// }

// function InfoPage() {
//   return <>
//     <button>{"123"}</button>
//     <div style={{ flexGrow: 1 }}>
//       <h1>
//         РРЅС„РѕСЂРјР°С†РёРѕРЅРЅРѕ СѓС‡РµР±РЅС‹Р№ РїРѕР»РёРіРѕРЅ "РљР°С‚Р°СЂРёСѓРј"
//       </h1>
//       <span>
//         Рћ СЃРёСЃС‚РµРјРµ
//       </span>
//       <p>
//         Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsum
//         v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
//         v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
//         v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
//         v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
//         v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
//       </p>
//     </div>
//   </>
// }

function Burger({ isOpen, open, close }) {
  return (
    <div style={{ marginLeft: "auto", position: "relative" }}>
      <button
        onClick={() => {
          if (isOpen) {
            close();
          } else {
            open();
          }
        }}
      >
        {isOpen ? "111" : "__"}
      </button>
    </div>
  );
}

function Info({ isOpen, open, close }) {
  return (
    <div>
      <button
        onClick={() => {
          if (isOpen) {
            close();
          } else {
            open();
          }
        }}
      >
        {isOpen ? ">" : "<"}
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





function AuthPage({ goToAutismPage }) {
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  return (
    <>
      <div style={{ flexGrow: 1, background: "#EFEEEC" }}>
        <CollapseButton name="Вход" symbol={">"}>
          <div><LoginForm /></div>
        </CollapseButton>
        <CollapseButton name="Регистрация" symbol={">"}>
          <div>Р РµРіРёСЃС‚СЂР°С†РёСЏ</div>
        </CollapseButton>
      </div>
      <button onClick={goToAutismPage}>{"XXX"}</button>
      {/* <button>{"123"}</button> */}
      {/* <button
        onClick={() => }
      >
      </button> */}
      {/* <button symbol={"v"} ><div>
        <h1>
          РРЅС„РѕСЂРјР°С†РёРѕРЅРЅРѕ СѓС‡РµР±РЅС‹Р№ РїРѕР»РёРіРѕРЅ "РљР°С‚Р°СЂРёСѓРј"
        </h1>
        <span>
          Рћ СЃРёСЃС‚РµРјРµ
        </span>
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsum
          v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
        </p>
      </div></button> */}
    </>
  );
}

function LandingPage({ goToAuth }) {
  return (
    <div>
      {/* <button onClick={goToAuth}>Auth</button> */}
      {/* Landing page */}
      <img src={katarium} alt="katarium" style={{ height: "145vh" }} />
      <h1>РРЎРўРћР РРЇ</h1>
      <p>
        Р’ 1550-С… РіРѕРґР°С… РЅР° СЃРµРІРµСЂРµ РѕСЃС‚СЂРѕРІР° РС‚СѓРіСѓРј, РѕРјС‹РІР°РµРјРѕРј РђСЂР°РІРёР№СЃРєРёРј РјРѕСЂРµРј,
        СЃР»РѕР¶РёР»РѕСЃСЊ РіРѕСЃРїРѕРґСЃС‚РІРѕ РєРѕСЂРѕР»РµРІСЃС‚РІР° РљР°С‚Р°СЂРёР№, РїСЂРµС‚РµРЅРґСѓСЋС‰РµРіРѕ РЅР° РѕР±Р»Р°РґР°РЅРёРµ
        Р°Р±СЃРѕР»СЋС‚РЅРѕР№ РІР»Р°СЃС‚СЊСЋ. РћРЅРѕ РїРѕСЃС‚РѕСЏРЅРЅРѕ РІРµР»Рѕ СЂР°Р·СЂСѓС€РёС‚РµР»СЊРЅС‹Рµ Р·Р°С…РІР°С‚РЅРёС‡РµСЃРєРёРµ
        РІРѕР№РЅС‹ СЃ СЃРѕСЃРµРґСЏРјРё, Р·Р°РІРѕРµРІС‹РІР°СЏ РёВ РїСЂРёСЃРѕРµРґРёРЅСЏСЏ Рє СЃРµР±Рµ РІСЃРµ РЅРѕРІС‹Рµ С‚РµСЂСЂРёС‚РѕСЂРёРё.
      </p>
      <p>
        РќР° СЋР¶РЅРѕР№ СЃС‚РѕСЂРѕРЅРµ РѕСЃС‚СЂРѕРІР° СЂР°СЃРїРѕР»Р°РіР°Р»РѕСЃСЊ РЅРµР±РѕР»СЊС€РѕРµ, РЅРѕВ СЃРёР»СЊРЅРѕРµ РєРѕСЂРѕР»РµРІСЃС‚РІРѕ
        Р РёСѓРј. Р•РіРѕ Р·РµРјР»Рё СЂР°СЃРїРѕР»Р°РіР°Р»РёСЃСЊ РІРґРѕР»СЊ РєСЂСѓРїРЅС‹С… РїРѕР»РЅРѕРІРѕРґРЅС‹С… СЂРµРє Р“РёС†РµРј Рё РЎРµСЏ,
        Р° С‚Р°РєР¶Рµ РІ РЇРјС‡РёРЅСЃРєРёС… РіРѕСЂР°С…. Р•РіРѕ РЅР°СЃРµР»СЏР»Рё РІРѕРёРЅСЃС‚РІРµРЅРЅС‹Рµ РїР»РµРјРµРЅР°, РіСЂРѕР·РЅРѕ
        Р·Р°С‰РёС‰Р°РІС€РёРµ РіСЂР°РЅРёС†С‹ СЃРІРѕРµРіРѕ РєРѕСЂРѕР»РµРІСЃС‚РІР° Рё СЃРѕРІРµСЂС€Р°СЋС‰РёРµ СЃС‚СЂРµРјРёС‚РµР»СЊРЅС‹Рµ РЅР°Р±РµРіРё
        РЅР° С‚РµСЂСЂРёС‚РѕСЂРёРё РљР°С‚Р°СЂРёСЏ, РґРѕСЃС‚Р°РІР»СЏСЏ РјРЅРѕРіРѕ С…Р»РѕРїРѕС‚ РµРіРѕ РІР»Р°СЃС‚СЏРј.
      </p>
      <img src={waterfall} alt="waterfall"></img>
    </div>
  );
}

// function BurgerPage() {
//   return <div>Burger page</div>;
// }

function InfoPage() {
  return (
    <div>
      <h1>РРЅС„РѕСЂРјР°С†РёРѕРЅРЅРѕ СѓС‡РµР±РЅС‹Р№ РїРѕР»РёРіРѕРЅ РљР°С‚Р°СЂРёСѓРј</h1>
      <p>Рћ СЃРёСЃС‚РµРјРµ</p>
      <p>
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum
        Lorem ipsumLorem ipsum v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
        ipsumLorem ipsum v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
        ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
        ipsumLorem ipsum v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
        ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
        ipsumLorem ipsum v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
        ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
        ipsumLorem ipsum v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
        ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
        ipsumLorem ipsum
      </p>
    </div>
  );
}

function AutismPage({ goToAuth }) {
  return (
    <div style={{ display: "flex", background: "purple" }}>
      <button onClick={goToAuth}>XXX</button>
      <InfoPage />
    </div>
  );
}

function App() {
  const [page, setPage] = useState("auth");
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "E1D6E7" }}>
      {page === "landing" ? (
        <LandingPage goToAuth={() => setPage("auth")} />
      ) : (
        <>
          <header
            style={{
              display: "flex",
              padding: "20px",
              borderBottom: "0px solid black",
              background: page === "autism" ? "EFEEEC" : "EFEEEC",
            }}
          >
            <span>РљРѕРЅС‚СѓСЂ СЃРёСЃС‚РµРјС‹</span>
            <Burger
              isOpen={burgerIsOpen}
              open={() => setBurgerIsOpen(true)}
              close={() => setBurgerIsOpen(false)}
            />
          </header>
          <main style={{ display: "flex", flexGrow: 1 }}>
            {burgerIsOpen ? (
              <div style={{ border: "1px solid black", width: "100%" }}>
                <button
                  onClick={() => {
                    setPage("landing");
                    setBurgerIsOpen(false);
                  }}
                  style={{ display: "block", marginTop: "10px" }}
                >
                  Р›РµРЅРґРёРЅРі
                </button>
                <button
                  onClick={() => {
                    setPage("auth");
                    setBurgerIsOpen(false);
                  }}
                  style={{ display: "block", marginTop: "10px" }}
                >
                  РђРІС‚РѕСЂРёР·Р°С†РёСЏ
                </button>
              </div>
            ) : page === "auth" ? (
              <AuthPage goToAutismPage={() => setPage("autism")} />
            ) : // ) : page === "burger" ? (
              //   <BurgerPage />
              // ) : page === "info" ? (
              //   <InfoPage />
              infoIsOpen ? (
                <div style={{ border: "1px solid black", width: "100%" }}>
                  <button
                    onClick={() => {
                      setPage("landing");
                      setInfoIsOpen(false);
                    }}
                    style={{ display: "block", marginTop: "10px" }}
                  >
                    1234567
                    {/* <h1>РРЅС„РѕСЂРјР°С†РёРѕРЅРЅРѕ СѓС‡РµР±РЅС‹Р№ РїРѕР»РёРіРѕРЅ РљР°С‚Р°СЂРёСѓРј</h1>
                  <p>Рћ СЃРёСЃС‚РµРјРµ</p>
                  <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsum
                    v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                    v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                  </p> */}
                  </button>
                </div>
              ) : page === "auth" ? (
                <InfoPage />
              ) : page === "autism" ? (
                <AutismPage goToAuth={() => setPage("auth")} /> // ) : page === "burger" ? (
              ) : //   <BurgerPage />
                // ) : page === "info" ? (
                //   <InfoPage />
                null}
          </main>
        </>
      )}
    </div>
  );
}

export default App;