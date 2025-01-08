import Sidebar from "./Sidebar";
import { useState } from "react";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log('clicked');
  };

  return (
    <>
      <nav 
        onClick={handleSidebar}
        className={`w-full py-5 px-5 fixed flex justify-end bg-slate-900 text-slate-50
          
        `}
      >
        MENU
      </nav>
      <Sidebar isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar} />
      <main className="w-full h-screen bg-slate-950 text-slate-50">
        CONTENT
      </main>
    </>
  );
}