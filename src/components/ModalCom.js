import React from "react";
import { Modal, Button } from "react-bootstrap";
import { add, editItem } from "../actions/index";
import { useDispatch } from "react-redux";
import "./style.css";

const ModalCom = ({
  setShow,
  newUser,
  setNewUser,
  check,
  setCheck,
  editIndex,
}) => {
  const toggle = () => {
    setShow(false);
  };
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Modal show={true} onHide={toggle} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              {check === "add" ? "Enter you details" : "Update your details"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="d-flex justify-content-around">
                <div>
                  <label>FirstName</label>
                  <br />
                  <input
                    type="email"
                    className="px-2 py-1 rounded"
                    value={newUser.firstName}
                    onChange={(e) =>
                      setNewUser({ ...newUser, firstName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label>LastName</label>
                  <br />
                  <input
                    type="text"
                    className="px-2 py-1 rounded"
                    value={newUser.lastName}
                    onChange={(e) =>
                      setNewUser({ ...newUser, lastName: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="d-flex justify-content-around pt-2">
                <div>
                  <label>Phone No</label>
                  <br />
                  <input
                    type="number"
                    className="px-2 py-1 rounded"
                    value={newUser.address.phoneNo}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        address: {
                          ...newUser.address,
                          phoneNo: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div>
                  <label>City</label>
                  <br />
                  <input
                    type="text"
                    className="px-2 py-1 rounded"
                    value={newUser.address.city}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        address: { ...newUser.address, city: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setShow(false);
              }}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setShow(false);
                check === "add"
                  ? dispatch(add(newUser))
                  : dispatch(editItem(newUser, editIndex));
              }}
            >
              {check === "add" ? "Add" : "Save"}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ModalCom;
