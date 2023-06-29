import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React from "react";

const Menu = (props) => {
  const { setSection, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        style={{ top: "50px", left: "50px", position: "fixed" }}
        onClick={() => setMenuOpened(!menuOpened)}
      ></button>
      {menuOpened ? (
        <div
          style={{
            top: "100px",
            left: "0px",
            width: "400px",
            bottom: "0px",
            position: "fixed",
            backgroundColor: "red",
          }}
        >
          <MenuButton lable="About" onClick={() => setSection(0)} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const MenuButton = (props) => {
  const { lable, onClick } = props;

  return <button onClick={onClick}>{lable}</button>;
};

export default Menu;
