const CarSalesDashboard = (props) => {
    return (
<>
                  <h1 className="d-title">Car Sales Dashboard</h1>
                  <hr />
                  <p className="mt-4">
                    The dashboard is based on the customer sales report. The
                    sales report consists of various information in regard to
                    customer profile and transaction detail.
                  </p>
                  <p>
                    From the report, some of dashboard pages are created in
                    which each page covers a certain topic, which are:
                  </p>
                  <ul>
                    <li>Sales Summary</li>
                    <li>Salesperson Performance</li>
                    <li>Showrooms Performance</li>
                    <li>Sales Information Detail</li>
                  </ul>
                  <img
                    src="img/bi1/sales_summary.png "
                    alt="Weekly Data Aggregation"
                    style={{objectFit: 'contain', width: '100%'}}
                    className="rounded mx-auto d-block"
                  />
                  <p style={{fontStyle: 'italic', fontSize: '10px'}}>
                    &emsp;*The values shown are dummy data
                  </p>
                  <p className="mt-2">
                    The above image is the Sales Summary page of the dashboard.
                    Basic information includes graph of sold unit by yearly
                    basis, most car models sold, customer type proportions and
                    bar graph of unit sold by showroom branches. There are some
                    visualizations that requires measurement using DAX functions
                    such as monthly averge unit sold.
                  </p>
                  <p>
                    Using the source data and transform it into time-series
                    data, the further analysis about the trend and seasonility
                    are obtained and the forecasting of future values are
                    generated. Therefore, three dashboard pages are created from
                    seasonal and trend decomposition and forecasted result, that
                    is:
                  </p>
                  <ul>
                    <li>Seasonality and Trend</li>
                    <li>Car Model Forecasting</li>
                    <li>Showroom Branches Forecasting</li>
                  </ul>
                  <img
                    src="img/bi1/data_exploration.png"
                    alt="Weekly Data Aggregation"
                    style={{objectFit: 'contain', width: '80%'}}
                    className="rounded mx-auto d-block mt-3"
                  />
                  <p style={{fontStyle: 'italic', fontSize: '10px'}}>
                    &emsp;*The values shown are dummy data
                  </p>
                  <p className="mt-2">
                    The above image shows the Seasonality and Trend dashboard
                    page. The page shows the decomposition of time-series data
                    of based on sales quantity and date. The trend and
                    seasoanility, as well as a short summary on the right bottom
                    part allow the user to analyze the sales pattern in a
                    particular time of year.
                  </p>
                        </>

    )

}

export default CarSalesDashboard;