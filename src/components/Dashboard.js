import React, { useContext } from "react";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";
import Chart from "./Chart";
import { mockCompanyDetails } from "../constants/mock";
import ThemeContext from "../context/ThemeContext";
const Dashboard=()=>{
const {darkMode}=useContext(ThemeContext);    
return <div className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-6 font-quicksand  ${darkMode ? "bg-gray-800 text-gray-300": "bg-neutral-100"}`}>
    <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center mt-2 ">
        <Header name={mockCompanyDetails.name}/>
    </div>
    <div className="col-span-1 md:col-spn-2 xl:col-span-2 row-span-6">
        <Chart/>
    </div>
    <div className="xl:row-span-2">
        <Overview symbol={mockCompanyDetails.ticker} price={300} change={30} changePercent={10.0} currency={"USD"}/>
    </div>
    <div className=" xl:col-span-1 xl:row-span-4 row-span-4 ">
        <Details details={mockCompanyDetails}/>
    </div>
</div>;
};

export default Dashboard