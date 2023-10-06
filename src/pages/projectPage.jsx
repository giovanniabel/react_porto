// import React, { useEffect } from 'react';
import Button from '../components/Elements/Button';
import DataFilesTransfer from '../components/Elements/Content/dataFilesTransfer';
import NetworkBandwidth from '../components/Elements/Content/networkBandwidth';
import CarSalesDashboard from '../components/Elements/Content/carSalesDashboard';
import WeeklyDataAgg from '../components/Elements/Content/weeklyDataAgg';
import CoffeeDemand from '../components/Elements/Content/coffeeDemand';
import WholesalerTransaction from '../components/Elements/Content/wholesalerTransaction';
import CountriesSegmentation from '../components/Elements/Content/countriesSegmentation';
import SentenceEmotion from '../components/Elements/Content/sentenceEmotion';
import ExcelToDatabase from '../components/Elements/Content/excelToDatabase';

const projects = [
    {
        path: "/project_data_files_transfer",
        element: <DataFilesTransfer/>
    },
    {
        path: "/project_network_bandwidth",
        element: <NetworkBandwidth/>
    },
    {
        path: "/project_car_sales_dashboard",
        element: <CarSalesDashboard/>
    },
    {
        path: "/project_weekly_data_agg",
        element: <WeeklyDataAgg/>
    },
    {
        path: "/project_coffee_demand",
        element: <CoffeeDemand/>
    },
    {
        path: "/project_wholesaler_trans",
        element: <WholesalerTransaction/>
    },
    {
        path: "/project_network_bandwidth",
        element: <NetworkBandwidth/>
    },
    {
        path: "/project_car_sales_dashboard",
        element: <CarSalesDashboard/>
    },
    {
        path: "/project_countries_segmentation",
        element: <CountriesSegmentation/>
    },
    {
        path: "/project_sentence_emotion",
        element: <SentenceEmotion/>
    },
    {
        path: "/project_excel_to_database",
        element: <ExcelToDatabase/>
    }
]



const ProjectPage = (props) => {
    const{path} = props;
    const element = projects.find(item => item.path === path)?.element
      return (
        <div className="home" id = "home">
            <div className="parallax">
            <section id="card-content" className="mt-2 texticon">
                <div className="container">
                <div className="row">
                    <div className="col">
                    <div className="card mx-auto">
                    <div className="article mx-sm px-5 mt-5">
                        {element}
                        <Button/>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
      </section>

              <br />
              <p className="text-center">Copyright © 2023 Giovanni Abel Christian</p>
              <br />
            </div>
        
        </div>
        );

}

export default ProjectPage;