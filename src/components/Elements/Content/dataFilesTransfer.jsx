const DataFilesTransfer = (props) => {
    return (
<>
<h1 className="d-title">Data Files Transfer</h1>
                  <hr />
                  <p className="mt-4">
                    The data files transfer are done using Airflow in Google
                    Cloud Composer. The first scenario is to transfer data from
                    database to data warehouse (Google BigQuery). The connection
                    of both database source and BigQuery has to be defined first
                    in the connection list in Airflow. By creating a pipeline
                    through DAG (Directed Acyclic Graph) in Airflow, the
                    automation of data file transfer can be made.
                  </p>
                  <img
                    src="img/data_eng1/database.png "
                    alt="Weekly Data Aggregation"
                    style={{objectFit: 'contain', maxWidth: '70%'}}
                    className="rounded mx-auto d-block w-75;"
                  />
                  <p className="mt-2">
                    The image above shows that the extracted query result from
                    the database are stored into the Google Cloud Storage (GCS)
                    temporarily. Then the stored data are loaded into the
                    desired datamart in the BigQuery. The scheduler is
                    configured to control the frequency of data transfer.
                  </p>
                  <p>
                    The next scenario is transfering the flat files (mostly
                    excel files) from Google Drive to BigQuery. In this case,
                    the service account that has permission to particular Google
                    Drive is utilized to download the files.
                  </p>
                  <img
                    src="img/data_eng1/flat_files.png"
                    alt="Weekly Data Aggregation"
                    style={{objectFit: 'contain', maxWidth: '70%'}}
                    className="rounded mx-auto d-block w-75;"
                  />
                  <p className="mt-2">
                    After extracting the files, there are some transformations
                    applied in order to comply with BigQuery table format before
                    the data is stored in GCS. Similarly, the stored data are
                    loaded into the desired datamart in the BigQuery.
                  </p>
                  <p>
                    The last scenario is transfering the Google Sheets files in
                    Google Drive by streaming directly using BigQuery external
                    table feature.
                  </p>
                  <img
                    src="img/data_eng1/google_sheets.png"
                    alt="Weekly Data Aggregation"
                    style={{objectFit: 'contain', maxWidth: '60%'}}
                    className="rounded mx-auto d-block w-75;"
                  />
                  <p className="mt-2">
                    Since the streamed external table could not be altered,
                    hence it may be required to do another query to cleanse or
                    modify the table and stored it into another table or view.
                  </p>
                        </>

    )

}

export default DataFilesTransfer;