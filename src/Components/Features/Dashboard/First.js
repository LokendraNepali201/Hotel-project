import React,{useState} from 'react';
import Dashboard from './Dashboard'
import ServicesAdmin from './ServicesAdmin';
import AddProduct from './Addproduct';
import Menubar from './Menubar';
import AddService from './AddService';
import EditProduct from './EditProduct';

const First = () => {
    const [activePage, setActivePage] = useState('dashboard');
  return (
    <div className="flex">
        < Menubar onNavigate={setActivePage} />
        <div className="ml-[250px] p-6 w-full">
          {activePage === 'dashboard' && <Dashboard />}
          {activePage === 'Services' && <ServicesAdmin/>}
          {activePage === 'Product' && <AddProduct/>}
          {activePage === 'Service' && <AddService/>}
          {activePage === 'EditProduct' && <EditProduct/>}
        </div>
      </div>
  )
}

export default First
