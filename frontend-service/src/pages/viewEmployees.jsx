import Header from "../components/dashboardHeader";
import Sidebar from "../components/sidenav";
import Table from "../components/table";
// import { SideNav } from "../components/sidenav";

export default function ViewEmployee() {
  return (
    <div className="flex h-screen bg-blue p-2 font-quicksand">
      <Sidebar />
      <div className="flex-1 p-2">
        <Table />
      </div>
    </div>
  );
}
