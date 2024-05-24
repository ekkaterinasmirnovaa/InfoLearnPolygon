import { useState } from "react";
import "./App.css";
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
        style={{ display: "flex", gap: "10px", width: "100%" }}
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
    </div>
  );
}

function CollapseButtonv2({ name, children, symbol }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="sign-in"
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
    </div>
  );
}

// function InfoPage() {
//   return <>
//     <button>{"123"}</button>
//     <div style={{ flexGrow: 1 }}>
//       <h1>
//         Информационно учебный полигон "Катариум"
//       </h1>
//       <span>
//         О системе
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
  return <div>
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
}

function AuthPage() {
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  return (
    <>
      <div style={{ flexGrow: 1 }}>
        <CollapseButton name="Вход" symbol={">"}>
          <div>Вход</div>
        </CollapseButton>
        <CollapseButton name="Регистрация" symbol={">"}>
          <div>Регистрация</div>
        </CollapseButton>
      </div>
      <button>{"XXX"}</button>
      {/* <button>{"123"}</button> */}
      {/* <button
        onClick={() => }
      >
      </button> */}
      {/* <button symbol={"v"} ><div>
        <h1>
          Информационно учебный полигон "Катариум"
        </h1>
        <span>
          О системе
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
      <img src={katarium} alt="katarium" style={{ height: "145vh", }} />
      <h1>ИСТОРИЯ</h1>
      <p>В 1550-х годах на севере острова Итугум, омываемом
        Аравийским морем, сложилось господство королевства
        Катарий, претендующего на обладание абсолютной
        властью. Оно постоянно вело разрушительные
        захватнические войны с соседями, завоевывая
        и присоединяя к себе все новые территории.
      </p>
      <p>
        На южной стороне острова располагалось небольшое,
        но сильное королевство Риум. Его земли располагались
        вдоль крупных полноводных рек Гицем и Сея, а также в
        Ямчинских горах. Его населяли воинственные племена, грозно защищавшие границы своего королевства и
        совершающие стремительные набеги на
        территории Катария, доставляя много хлопот его властям.
      </p>
      <img src={waterfall} alt="waterfall"></img>
    </div>
  );
}

// function BurgerPage() {
//   return <div>Burger page</div>;
// }

function InfoPage() {
  return <div><h1>Информационно учебный полигон Катариум</h1>
    <p>О системе</p>
    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsum
      v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      v Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum v v v v vLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
    </p></div>
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
            }}
          >
            <span>Контур системы</span>
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
                  Лендинг
                </button>
                <button
                  onClick={() => {
                    setPage("auth");
                    setBurgerIsOpen(false);
                  }}
                  style={{ display: "block", marginTop: "10px" }}
                >
                  Авторизация
                </button>
              </div>
            ) : page === "auth" ? (
              <AuthPage />
              // ) : page === "burger" ? (
              //   <BurgerPage />
              // ) : page === "info" ? (
              //   <InfoPage />
            )
              : infoIsOpen ? (
                <div style={{ border: "1px solid black", width: "100%" }}><button
                  onClick={() => {
                    setPage("landing");
                    setInfoIsOpen(false);
                  }}
                  style={{ display: "block", marginTop: "10px" }}
                >
                  1234567
                  {/* <h1>Информационно учебный полигон Катариум</h1>
                  <p>О системе</p>
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
                // ) : page === "burger" ? (
                //   <BurgerPage />
                // ) : page === "info" ? (
                //   <InfoPage />
              )
                : null}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
