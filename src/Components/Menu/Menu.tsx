import { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const clickClose = () => {
    setOpen((prev) => !prev);
  };

  const openPage = () => {
    setOpen((prev) => !prev);
  };
  const data = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4flTslBliKMcEH5OspXJD6aoLwVauPBi_w&usqp=CAU",
      title: "Lorem im",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    },
  ];
  const [state, setState] = useState(data);
  return (
    <div>
      <Button openPage={openPage} />
      {state.map((item, index) => (
        <Modal
          open={open}
          clickClose={clickClose}
          key={index}
          image={item.img}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default Menu;
