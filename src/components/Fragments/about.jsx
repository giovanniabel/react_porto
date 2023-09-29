const AboutSection = () => {
    return (

        <section id="about" className="mt-2">
        <div className="diagonal-box">
          <div className="content pt-5">
            <div className="container" id="aboutme">
              <div className="row">
                <div className="col mt-5">
                  <h2 className="text-start mt-2">About Me</h2>
                </div>
                <div className="col mt-5">
                  <h2 className="text-end mt-2 mb-1">Languages and Technologies</h2>
                </div>
              </div>

              <div className="row">
                <div className="col-6 fs-5 text-start">
                  A data engineer with experience in:
                  <ul>
                    <li>Handling big data</li>
                    <li>Machine Learning modelling</li>
                    <li>Data visualization</li>
                  </ul>
                  Passionate in processing data to provide meaningful insights.
                </div>

                <div className="col-6 mt-4">
                  <div className="container">
                    <div className="row text-center mb-3">
                      <div
                        className="col-sm-3 col-lg-3 col-6 align-self-end wrapper fs-7"
                      >
                        <img
                          src="img/languages and tech/python.png"
                          alt="Python"
                          className="icontech"
                          style={{ width: '80%' }}
                        />
                        <h5 className="mt-3 texticon">Python</h5>
                      </div>
                      <div
                        className="col-sm-3 col-lg-3 col-6 align-self-end wrapper fs-7"
                      >
                        <img
                          src="img/languages and tech/sql.png"
                          alt="SQL"
                          className="icontech"
                          style={{ width: '80%' }}
                        />
                        <h5 className="mt-3 texticon">SQL</h5>
                      </div>
                      <div
                        className="col-sm-3 col-lg-3 col-6 align-self-end wrapper fs-7"
                      >
                        <img
                          src="img/languages and tech/R.png"
                          alt="R"
                          className="icontech"
                          style={{ width: '80%' }}
                        />
                        <h5 className="mt-3 texticon">R</h5>
                      </div>
                      <div
                        className="col-sm-3 col-lg-3 col-6 align-self-end wrapper fs-7"
                      >
                        <img
                          src="img/languages and tech/powerbi.png"
                          alt="PowerBI"
                          className="icontech"
                          style={{ width: '80%' }}
                        />
                        <h5 className="mt-3 texticon">PowerBI</h5>
                      </div>
                    </div>

                    <div className="row mt-2 text-center mb-3">
                      <div
                        className="col-sm-3 col-lg-3 col-6 align-self-end wrapper fs-7"
                      >
                        <img
                          src="img/languages and tech/airflow.png"
                          alt="Airflow"
                          className="icontech"
                          style={{ width: '80%' }}
                        />
                        <h5 className="mt-3 texticon">Airflow</h5>
                      </div>
                      <div
                        className="col-sm-3 col-lg-3 col-6 align-self-end wrapper fs-7"
                      >
                        <img
                          src="img/languages and tech/git.png"
                          alt="Git"
                          className="icontech"
                          style={{ width: '80%' }}
                        />
                        <h5 className="mt-3 texticon">Git</h5>
                      </div>
                      <div
                        className="col-sm-3 col-lg-3 col-6 align-self-end wrapper fs-7"
                      >
                        <img
                          src="img/languages and tech/bigquery.png"
                          alt="BigQuery"
                          className="icontech"
                          style={{ width: '80%' }}
                        />
                        <h5 className="mt-3 texticon">BigQuery</h5>
                      </div>
                      <div
                        className="col-sm-3 col-lg-3 col-6 align-self-end wrapper fs-7"
                      >
                        <img
                          src="img/languages and tech/tensorflow.png"
                          alt="TensorFlow"
                          className="icontech"
                          style={{ width: '80%' }}
                        />
                        <h5 className="mt-3 texticon">TensorFlow</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    )

}

export default AboutSection;