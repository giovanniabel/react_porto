const CountriesSegmentation = () => {
    return (
      <>
    <h1 className="d-title">Countries Segmentation</h1>
    <hr />
    <p className="mt-2">
    Data Source:
    <a
        href="https://www.kaggle.com/rohan0301/unsupervised-learning-on-country-data"
        >Here</a
    >
    </p>
    <h3>Data Exploration</h3>
    <p>
    This projects aims to classify countries based on its
    parameters using clustering algorithm. There are several
    variables in the data, however only two variables are used
    for the project which are:
    </p>
    <ul>
    <li>Income: Net income per person</li>
    <li>
        Life Expectancy: The average number of years a new born
        child would live
    </li>
    </ul>
    <img
    src="img/ds3/ds3_data_table.png"
    alt="Data Variables"
    style={{objectFit: 'contain', maxWidth:'100%'}}
    className="rounded mx-auto d-block w-75;"
    />
    <p>
    It is essential to discover the statistical summary of the
    variables as shown below
    </p>
    <img
    src="img/ds3/statistical_summary.png"
    alt="Data Variables"
    style={{objectFit: 'contain', maxWidth:'70%'}}
    className="rounded mx-auto d-block w-75;"
    />
    <h3>Model Training</h3>
    <p>
    The model used is K-Means Clustering, therefore it is vital
    to determine the K value (number of groups) by training the
    models using 1 K to 10 K in which for each K the
    Within-Cluster Sum of Square (WCSS) value is calculated then
    the result is plotted.
    </p>
    <img
    src="img/ds3/elbow method.png"
    alt="Elbow Method"
    style={{objectFit: 'contain', maxWidth: '80%'}}
    className="rounded mx-auto d-block w-75;"
    />
    <p>
    By using the plotted result of different K value, the best K
    value is when the next line is flat in other words, when the
    difference in WCSS is not significant to the next K Value.
    </p>
    <p>The K value of 3 is selected based on the Elbow Method.</p>
    <img
    src="img/ds3/clustering_result.png"
    alt="Dashboard Prototype"
    style={{objectFit: 'contain', maxWidth:'90%'}}
    className="rounded mx-auto d-block w-75;"
    />
    <p>Clustering Description</p>
    <ul>
    <li>
        Cluster 1: Countries with low to high Expectancy and low
        income
    </li>
    <li>
        Cluster 2: Countries with high Expectancy and high income
    </li>
    <li>
        Cluster 3: Countries with low Expectancy and medium income
    </li>
    </ul>
    <p>
    Checkout the source code on &nbsp;
     <a href="https://github.com/giovanniabel/dsprojects"
        >Github</a
    >
    </p>
            </>

    )

}

export default CountriesSegmentation;