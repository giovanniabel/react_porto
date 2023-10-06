const ExcelToDatabase = (props) => {
    return (
<>
                  <h1 className="d-title">Excel to Database</h1>
                  <hr />
                  <p className="mt-4">
                    This project aims to transform raw files (such as excel) into database.​
                  </p>
                  <p>
                  Technology used:
                  </p>
                  <ul>
                    <li>Programming Language: Python</li>
                    <li>Package/Library: FastAPI, Great Expectations, Pandas, Pendulum, SQLAlchemy</li>
                    <li>Container: Docker</li>
                    <li>Database: PostgresSQL</li>
                  </ul>
                  <img
                    src="react_porto/img/excel_to_database/fastapi_diagram.png "
                    alt="FastAPI Diagram"
                    style={{objectFit: 'contain', width: '100%'}}
                    className="rounded mx-auto d-block"
                  />
                  <p className="mt-2">
                   Steps in Data Processing:
                  </p>
                  <p>
                    <b>Data Validation</b>
                  </p>
                  <p className="mt-2">
                  Validating data using the Great Expectations library to ensure the data quality.
                  The expectations includes column order, columns values to be not null and identifying duplicate values. The validations ensures the data quality to prevent
                  inconsistency of the input data. 
                  </p>
                  <p>
                    <b>Data Transformation</b>
                  </p>
                  <p className="mt-2">
                  Data transformations involves tasks such as optimizing column names according to best practices, 
                  adjusting data types when needed, and introducing supplementary columns like timestamp information for data capture times.
                  </p>
                  <p>
                    <b>Table Definition</b>
                  </p>
                  <p className="mt-2">
                  Establish the requisite database table if it doesn't already exist to maintain data integrity during the loading process.
                  </p>
                  <p>
                    <b>Data Insertion</b>
                  </p>
                  <p className="mt-2">
                  Incorporating the refined data into the database while also specifying efficient loading techniques, 
                  encompassing parameters like chunk size and other configuration settings for insertion processes.
                                    </p>
                        </>

    )

}

export default ExcelToDatabase;