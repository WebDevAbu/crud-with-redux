import React from "react";
import { Button, Table } from "react-bootstrap";
import { deleteItem } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const TableCom = ({ setShow, setNewUser, setCheck, setEditIndex }) => {
  let allData = useSelector((state) => state.crudReducer.allData);
  console.log("allData", allData);
  const dispatch = useDispatch();

  const formFillUp = (i) => {
    setNewUser(allData[i]);
  };
  const clearForm = () => {
    setNewUser({
      firstName: "",
      lastName: "",
      address: {
        phoneNo: "",
        city: "",
      },
    });
  };

  return (
    <>
      <div className="mt-3 ms-3">
        <div>
          <Button
            onClick={() => {
              clearForm();
              setCheck("add");
              setShow(true);
            }}
          >
            Add User
          </Button>
        </div>
        {allData.length !== 0 ? (
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone No</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allData.map((val, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{val.firstName}</td>
                    <td>{val.lastName}</td>
                    <td>{val.address.phoneNo}</td>
                    <td>{val.address.city}</td>
                    <td>
                      <Button
                        id="btn-edit"
                        onClick={() => {
                          setEditIndex(i);
                          setCheck("edit");
                          setShow(true);
                          formFillUp(i);
                        }}
                      >
                        Edit
                      </Button>
                      <Button onClick={() => dispatch(deleteItem(i))}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : null}
      </div>
    </>
  );
};

export default TableCom;
