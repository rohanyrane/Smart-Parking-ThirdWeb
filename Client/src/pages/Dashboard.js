import {React,useContext,useEffect} from 'react';
import { Route, Routes,useNavigate } from 'react-router-dom';



// import Maps from "./Maps";
import Transaction from "./Transaction";
import TransactionDetail from "./TransactionDetail";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Maps from './Maps';
import { AuthContext } from '../contexts/AuthContext';
const Dashboard = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    // Update the document title using the browser API
    if(!auth.state.isLoggedIn){
      navigate("/login")
    }
  },[]);
  return (  
      <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
        <div className="sm:flex hidden mr-10 relative">
          <Sidebar/>
        </div>

        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar/>

          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/maps" element={<Maps />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/transaction-details/:id" element={<TransactionDetail />} />
          </Routes>
        </div>
      </div>
  )
}

export default Dashboard;