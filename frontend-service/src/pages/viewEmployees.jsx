import { useEffect, useState } from "react";
import Header from "../components/dashboardHeader";
import Sidebar from "../components/sidenav";
import Table from "../components/table";
import axios from 'axios';
import Cookies from 'js-cookie';
import PaginatedTable from "../components/PaginatedTable";
// import { SideNav } from "../components/sidenav";

export default function ViewEmployee() {
  const [data, setData] = useState([]);

  const headers = ['First Name', 'Last Name', 'Email', 'Phone Number', 'National Id', 'Telephone', 'Email', 'Department', 'Position', 'Laptop Manufacturer']

  const getData = async () => {
    const api = await fetch("http://localhost:8000/api/v1/employees/getAll", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
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
  return (
    <div className="flex h-screen w-full bg-blue p-2 font-quicksand">
      <div className="w-[35%]">
        <Sidebar />
      </div>
      <div className="w-[80%] flex-1 p-[0.5%]">
        <PaginatedTable data={data} itemsPerPage={5} headers={headers} />
      </div>
    </div>
  );
}
