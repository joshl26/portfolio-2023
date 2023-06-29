import React from "react";

const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        style={{ top: "50px", left: "50px", position: "fixed" }}
        onClick={() => setMenuOpened(!menuOpened)}
      >
        Menu
      </button>
      {menuOpened ? (
        <div
          style={{
            top: "100px",
            left: "0px",
            width: "400px",
            bottom: "0px",
            position: "fixed",
            backgroundColor: "grey",
          }}
        >
          <MenuButton lable="About" onClick={() => onSectionChange(0)} />
          <MenuButton lable="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton lable="Projects" onClick={() => onSectionChange(2)} />
          <MenuButton lable="Contact" onClick={() => onSectionChange(3)} />
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
