const F1Dashboard = (props) => {
    return (
<>
      <h1 className="d-title">Formula 1 2022 Season Dashboard</h1>
      <hr />
      <p className="mt-4" >
        Data Source: <a href="https://www.kaggle.com/datasets/rohanrao/formula-1-world-championship-1950-2020">https://www.kaggle.com/datasets/rohanrao/formula-1-world-championship-1950-2020</a>
      </p>
      <p>
     Tools:
    </p>
    <ul>
      <li>Metabase : Open source dashboard tools to Visualize the data</li>
      <li>Docker : Application container to contain Metabase App</li>
      <li>PostgreSQL : Database to store Metabase data and F1 dataset</li>
      <li>ReactJS : To create the Dashboard UI, including the sidebar</li>
    </ul>
      <p>
        The dashboard visualizes the information regarding the Formula One Championship 2022 Seasons. 
      </p>
      <p>
        The dashboard is divided into two parts:
      </p>
      <ul>
      <li>Driver : Any data information about the Driver</li>
      <li>Constructor : The team/constructor's car and driver throughout the season</li>
    </ul>  
    <img
        src="img/f1/driverComparison.png"
        alt="Weekly Data Aggregation"
        style={{objectFit: 'contain', maxWidth: '100%'}}
        className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
      />
      <p className="mt-2">
        The above image shows the 'Driver's Comparison' dashboard that analyzes the performance and achievements between two drivers. There are two filters provided, which are Driver 1 and Driver 2 to select which drivers to compare. 
      </p>
      <img
        src="img/f1/consSummary.png "
        alt="Constructor's Summary"
        style={{objectFit: 'contain', maxWidth: '100%'}}
        className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
      />
      <p className="mt-2">
        The above image shows the 'Constructor's Summary' dashboard that summarize the overall performance of each team. The images contained in the dashboard will change according to the selected filter.
        </p >
        <img
        src="img/f1/f1TablesList.png"
        alt="Constructor's Summary"
        style={{objectFit: 'contain', maxWidth: '300px'}}
        className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
      />
      <p className="mt-2" >
      As shown above, the dashboards are created from queries which requires to join on several tables. 
      </p>
                        </>

    )

}

export default F1Dashboard;