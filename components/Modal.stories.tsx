import React from "react";
import Modal from "./Modal";

export default { title: "Components/Modal" };

export const modal = () => (
  <Modal onClose={() => {}} visible>
    <div>
      <p>A kitten modal!</p>
    </div>
  </Modal>
);
