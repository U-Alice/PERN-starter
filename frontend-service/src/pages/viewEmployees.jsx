import { useEffect, useState } from "react";
import Header from "../components/dashboardHeader";
import Sidebar from "../components/sidenav";
import Table from "../components/table";
import axios from "axios";
import Cookies from "js-cookie";
import PaginatedTable from "../components/PaginatedTable";
import UpdateEmployee from "../components/updateEmployee";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { BiSolidTrash } from "react-icons/bi";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
// import { SideNav } from "../components/sidenav";

export default function ViewEmployee() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const headers = [
    "First Name",
    "Last Name",
    "Email",
    "Phone Number",
    "National Id",
    "Email",
    "Department",
    "Position",
    "Laptop Manufacturer",
  ];

  const getData = async () => {
    const api = await fetch("http://localhost:8000/api/v1/employees/getAll", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + Cookies.get("accessToken"),
      },
    });
    let data = await api.json();
    let employees = await data.data;
    setData(employees);
    console.log(employees);
  };

  useEffect(() => {
    getData();
  }, []);

  const updateRecord = (employee) => {
    return <UpdateEmployee employee={employee} />;
  };
  const deleteRecord = (id) => {
    const sendRequest = async () => {
      // setLoading(true);
      const api = await axios
        .delete(`http://localhost:8000/api/v1/employees/deleteEmployee/${id}`)
        .then(({ data }) => {
          notification.success({ message: data.message });
          navigate("/viewEmployees");
        })
        .catch((err) => {
          console.log(err)
          notification.error({
            message: "Error Occurred!",
          });
        });
    };

    return (
      <Tooltip content="Delete User">
        <IconButton variant="text">
          <BiSolidTrash
            className="h-4 w-4 text-red-400"
            onClick={sendRequest}
          />
        </IconButton>
      </Tooltip>
    );
  };

  return (
    <div className="flex h-screen w-full bg-blue p-2 font-quicksand">
      <div className="w-[35%]">
        <Sidebar />
      </div>
      <div className="w-[80%] flex-1 p-[0.5%]">
        <PaginatedTable
          data={data}
          itemsPerPage={5}
          headers={headers}
          UpdateRecord={updateRecord}
          deleteRecord={deleteRecord}
        />
      </div>
    </div>
  );
}
