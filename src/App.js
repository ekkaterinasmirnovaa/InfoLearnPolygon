import { useState } from "react";
import "./App.css";

function CollapseButton({ name, children }) {
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
          {">"}
        </div>
      </button>
      {isOpen && children}
    </div>
  );
}

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
        {isOpen ? "X" : "__"}
      </button>
    </div>
  );
}

function AuthPage() {
  return (
    <>
      <div style={{ flexGrow: 1 }}>
        <CollapseButton name="Вход">
          <div>Вход</div>
        </CollapseButton>
        <CollapseButton name="Регистрация">
          <div>Регистрация</div>
        </CollapseButton>
      </div>
      <button>{">"}</button>
    </>
  );
}

function LandingPage({ goToAuth }) {
  return (
    <div>
      Landing page <button onClick={goToAuth}>Auth</button>
    </div>
  );
}

function BurgerPage() {
  return <div>Burger page</div>;
}

function App() {
  const [page, setPage] = useState("auth");
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
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
            ) : page === "burger" ? (
              <BurgerPage />
            ) : null}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
