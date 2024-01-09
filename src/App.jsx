import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex h-[1428px] w-[1440px] ml-auto mr-auto">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
