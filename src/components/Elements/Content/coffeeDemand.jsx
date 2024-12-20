const CoffeeDemand = () => {
    return (
      <>
     <h1 className="d-title">Coffee Demand Prediction</h1>
      <hr />
      <h3>Background</h3>
      <p className="mt-2">
        The considerably growing number of customers causes the
        coffee shop to encounter complications in inventory
        management. Moreover, the establishment of social
        restrictions by the government to prevent COVID-19
        transmission leads to demand uncertainty and unpredictable
        number of customers.
      </p>
      <p className="mt-2">
        Therefore, A forecasting model and its application was
        developed to implemented into the business in order to:
      </p>
      <ul>
        <li>Avoid oversupply and undersupply of coffee beans</li>
        <li>
          Establish a method to use the forecasting model into the
          business system
        </li>
        <li>
          Be implemented as a fundamental step in deciding a supply
          order
        </li>
      </ul>
      <h3>Methodology</h3>
      <p className="mt-2">
        Steps in developing and implementing the model includes:
      </p>
      <ul>
        <li>
          Data Collection: Gathering internal data (coffee demand)
          from POS System and external data (Weather, holiday, etc)
        </li>
        <li>
          Data Pre-processing: Transform transaction data to coffee
          demands
        </li>
        <li>
          Model Training: model selection, hyperparameter tuning,
          feature engineering
        </li>
        <li>
          Perfomance Comparison: Compare the error and result
          generated by the models
        </li>
        <li>
          Model Implementation: Dashboard creation and supply order
          planning
        </li>
      </ul>
      <img
        src="img/ds2/ds2_process_flow.png "
        alt="Process Flow"
        style={{objectFit: 'contain', width: '100%'}}
        className="rounded mx-auto d-block w-75 gambar_alur max-width: 100%;"
      />
      <p>
        The machine learning including the data processing were
        performed using Python programmin, while PowerBI were used
        for dashboard modeling.
      </p>
      <p className="mt-2">
        TThe training dataset consists of between '1/1/2020' to
        '31/5/2021', while the testing dataset consists between
        '1/6/2021' to '30/31/2020'
      </p>
      <img
        src="img/ds2/data_variables.png"
        alt="Data Variables"
        style={{objectFit: 'contain', maxWidth: '45%'}}
        className="rounded mx-auto d-block w-75 gambar_alur;"
      />
      <p>
        The dependent or variable is the coffee beans demand in
        grams, the value that will be predicted. The other variables
        are the independent variables or predictor variables.
      </p>
      <h3>Data Exploration</h3>
      <p>
        To understand the data further before the model training,
        the data exploration were performed for the following
        aspects:
      </p>
      <ul>
        <li>
          Actual data plotting with information regarding the
          enforced social restrictions
        </li>
        <img
          src="img/ds2/ds2_data_observation.png"
          alt="Process Flow"
          style={{objectFit: 'contain', maxWidth: '70%'}}
          className="rounded mx-auto d-block w-75;"
        />
        <li>
          Time series decomposition (trend and monthly seasonality)
        </li>
        <img
          src="img/ds2/ts_decomposition.png "
          alt="Time Series Decomposition"
          style={{objectFit: 'contain', maxWidth: '80%'}}
          className="rounded mx-auto d-block w-75;"
        />
        <img
          src="img/ds2/Weekly Seasonal.png"
          alt="Weekly Seasonal"
          style={{objectFit: 'contain', maxWidth: '60%'}}
          className="rounded mx-auto d-block w-75;"
        />
        <img
          src="img/ds2/Monthly_Seasonal.png"
          alt="Monthly Seasonal"
          style={{objectFit: 'contain', maxWidth: '60%'}}
          className="rounded mx-auto d-block w-75;"
        />
        <li>Day vs average demand</li>
        <img
          src="img/ds2/average_daily_demand.png"
          alt="Average Daily Demand"
          style={{objectFit: 'contain', maxWidth: '60%'}}
          className="rounded mx-auto d-block w-75;"
        />
        <li>Rain intensity vs average demand</li>
        <img
          src="img/ds2/average_rain_condition.png"
          alt="Average Rain Condition"
          style={{objectFit: 'contain', maxWidth: '60%'}}
          className="rounded mx-auto d-block w-75;"
        />
        <h3>Forecasting Result</h3>
        <p>The models were trained with two different datasets:</p>
        <li>Dataset that consist of date variable only</li>
        <li>
          Dataset that uses all the variables that was listed in the
          previous table
        </li>
        <img
          src="img/ds2/d2_error_measurements.png "
          alt="Forecast Result"
          style={{objectFit: 'contain', maxWidth: '45%'}}
          className="rounded mx-auto d-block w-75 mb-2"
        />
        <p>
          MLR model using all variables achieved the lowest MAPE
          with the value of 41.428, whereas DT model using all
          variables achieved the lowest RMSE and MAE value of
          132.625 and 95.14 respectively.
        </p>
        <p>
          Overall, the models that use all variables produce smaller
          errors than those that use only the date variable.
        </p>
      </ul>
      <div className="row">
        <div className="col">
          <img
            src="img/ds2/pred_date_var.png"
            alt="FARIMA Result"
            style={{objectFit: 'contain', maxWidth: '100%'}}
            className="rounded mx-auto d-block w-75;"
          />
        </div>
        <div className="col">
          <img
            src="img/ds2/pred_all_var.png"
            alt="ANN-MLP Result"
            style={{objectFit: 'contain', maxWidth: '100%'}}
            className="rounded mx-auto d-block w-75;"
          />
        </div>
      </div>
      <p className="mt-2">
        ANN-MLP forecast result resembles more the variation of the
        past data, where as FARIMA forecast values creates a single
        straight line in other words, almost identical forecast
        values.
      </p>
      <p>
        Consequently, ANN-MLP with parameter of (4,0.2,1) was
        selected as the best model. This model was used to generate
        the forecast value of the next 30 days in the dashboard.
      </p>
      <h3>Model Implementation</h3>
      <p>
        Based on the prediction pattern and error measurements, the
        DT model has been selected as the best model to predict the
        future value of coffee beans demand.
      </p>
      <img
        src="img/ds2/ds2_dashboard.png"
        alt="Dashboard Prototype"
          style={{objectFit: 'contain', maxWidth: '60%'}}
          className="rounded mx-auto d-block w-75;"
      />
      <p>
        The displayed predicted value was based on the prediction
        results of the DT model. The dashboard not only informs the
        number of demanded coffee beans in the future, but also the
        number of bags that is needed to order.
      </p>
      <p>
        The FIFO method helps the estimation for the costs of buying
        coffee beans are determined and this could help to consider
        the company's income and expenses.
      </p>
      <img
        src="img/ds2/fifo.png"
        alt="Dashboard Prototype"
        style={{objectFit: 'contain', maxWidth: '80%'}}
        className="rounded mx-auto d-block w-75;"
      />
      <p>
        The total price shown is an estimate of the costs that need
        to be incurred for ordering coffee beans in July 2021.
      </p>
            </>

    )

}

export default CoffeeDemand;