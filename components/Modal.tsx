import React from "react";
import Rodal from "rodal";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ visible, onClose, children }: Props) {
  return (
    <Rodal
      height={440}
      width={600}
      visible={visible}
      onClose={onClose}
      enterAnimation="slideRight"
      leaveAnimation="slideRight"
      customStyles={{
        marginLeft: "55%",
        padding: "0",
      }}
    >
      {children}
    </Rodal>
  );
}
