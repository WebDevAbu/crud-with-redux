import React, { useState } from "react";
import TableCom from "./components/TableCom";
import ModalCom from "./components/ModalCom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    address: {
      phoneNo: "",
      city: "",
    },
  });
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState("");
  const [editIndex, setEditIndex] = useState("");
  console.log("show", show);

  return (
    <>
      <div>
        <TableCom
          setShow={setShow}
          newUser={newUser}
          setNewUser={setNewUser}
          check={check}
          setCheck={setCheck}
          setEditIndex={setEditIndex}
        />
        {show && (
          <ModalCom
            setShow={setShow}
            newUser={newUser}
            setNewUser={setNewUser}
            check={check}
            setCheck={setCheck}
            editIndex={editIndex}
          />
        )}
      </div>
    </>
  );
};

export default App;
