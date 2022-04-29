import Home from '../component/HomePage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Withdraw from '../component/Withdraw';
import Bills from '../component/Bills';
import Car from '../component/Car';
import Booking from '../component/Booking';
import MobileRecharge from '../component/MobileRecharge';
import React from 'react';
import Login  from '../component/Login';
const AppRouter: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" />
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/car" element={<Car />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/mobile" element={<MobileRecharge />} />
        </Routes>
    </Router>
)


export { AppRouter }