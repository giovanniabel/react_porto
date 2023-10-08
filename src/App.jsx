import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './pages/home';
import ProjectPage from './pages/projectPage';
import Navbar from './components/Elements/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    // errorElement: <ErrorPage/>
    // loader: rootLoader,
  },
  {
    path: "/project_data_files_transfer",
    element: <ProjectPage path = "/project_data_files_transfer"/>,
    // loader: teamLoader
  },
  {
    path: "/project_car_sales_dashboard",
    element: <ProjectPage path = "/project_car_sales_dashboard"/>
  },
  {
    path: "/project_weekly_data_agg",
    element: <ProjectPage path = "/project_weekly_data_agg"/>
  },
  {
    path: "/project_coffee_demand",
    element: <ProjectPage path = "/project_coffee_demand"/>
  },
  {
    path: "/project_wholesaler_trans",
    element: <ProjectPage path = "/project_wholesaler_trans"/>
  },
  {
    path: "/project_network_bandwidth",
    element: <ProjectPage path = "/project_network_bandwidth"/>
  },
  {
    path: "/project_countries_segmentation",
    element: <ProjectPage path = "/project_countries_segmentation"/>
  },
  {
    path: "/project_sentence_emotion",
    element: <ProjectPage path = "/project_sentence_emotion"/>
  },
  {
    path: "/project_excel_to_database",
    element: <ProjectPage path = "/project_excel_to_database"/>
  },
]);



export default function App() {
  return (
    <>
                <Navbar/>
    <RouterProvider router={router}/>
    </>
  );
}