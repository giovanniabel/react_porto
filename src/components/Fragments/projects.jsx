import ProjectCard from "../Elements/ProjectCard";
import Carousel from "react-grid-carousel";
import 'react-multi-carousel/lib/styles.css';

const ProjectSection = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3,
  //   },
  //   desktop: {
  //     breakpoint: { max: 1024, min: 800 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 800, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  const productData = [
    {
      refpage : "/project_excel_to_database",
      imgsource : "img/projects/png/mika-baumeister-Wpnoqo2plFA-unsplash.png",
      title  : 'Excel to Database',
      filter : '',
      content : "Transform raw files into proper tables in database using FastAPI and Great Expectations",
      hashtag : '# Data Engineering | FastAPI '
    },
    {
      refpage : "/project_data_files_transfer",
      imgsource : "img/projects/png/guerrillabuzz-crypto-pr-IlUq1ruyv0Q-unsplash.png",
      title  : 'Data Files Transfer',
      filter : 'grayscale(100%)',
      content : 'Processing the data transfering between platforms, including Google Sheets, Database and Google Drive',
      hashtag : '# Data Engineering'
    },
    {
      refpage : "/project_coffee_demand",
      imgsource : "img/projects/png/maemu_unspalsh.png",
      title  : 'Coffee Demand Prediction',
      filter : '',
      content : 'Analyzing and Predicting the coffee beans demand based on internal and external variables',
      hashtag : '# Data Science | Machine Learning'
    },
    {
      refpage : 'https://giovanni-abel.shinyapps.io/ProjectDVGiovanniAbel/',
      imgsource : "img/projects/png/fidel-fernando-val59UQ3PqU-unsplash.png",
      title  : 'Ramen Classification Dashboard',
      filter : '',
      content : 'Data visualization of ramen ratings using R Shiny Dashboard',
      hashtag : '# Business Intelligence | R '
    },
    {
      refpage : "/project_wholesaler_trans",
      imgsource : "img/projects/png/chuttersnap-BNBA1h-NgdY-unsplashedit.png",
      title  : 'Wholesaler Transaction Structuring',
      filter : 'grayscale(100%)',
      content : "Creating data pipeline of a wholesaler's data to obtain financial insights",
      hashtag : '# Data Engineering' 
    },
    {
      refpage : "/project_network_bandwidth",
      imgsource : "img/projects/png/jan-huber-ZWH6Wm4rUw4-unsplash.png",
      title  : 'Network Bandwidth Prediction',
      filter : 'grayscale(100%)',
      content : "Predicting the bandwidth capacity of telecommunication tower using time-series model",
      hashtag : '#  Data Science | Machine Learning' 
    },
    {
      refpage : "/project_car_sales_dashboard",
      imgsource : "img/projects/png/kevin-bonilla-YPfnvLc3bbQ-unsplashedit.png",
      title  : 'Car Sales Dashboard',
      filter : '',
      content : "Creating dashboard based on sales report of a car dealership, prodiving insights for business decision",
      hashtag : '#  Business Intelligence | PowerBI' 
    },
    {
      refpage : "/project_weekly_data_agg",
      imgsource : "img/projects/png/giorgio-tomassetti-QCbZ4ASLhM8-unsplashedit.png",
      title  : 'Weekly Data Aggregation',
      filter : '',
      content : 'Transforming various sources of sales order data and aggregating them into weekly-based table',
      hashtag : '# Data Engineering'
    },
    {
      refpage : "/project_sentence_emotion",
      imgsource : "img/projects/png/finn-mund-CiUs9eCvNb8-unsplash.png",
      title  : 'Sentence Emotion Detection',
      filter : '',
      content : "Classifying each sentence of a short story based on the expressed words",
      hashtag : '# Data Science | Machine Learning'
    },
    {
      refpage : "/project_countries_segmentation",
      imgsource : "img/projects/png/brett-zeck-eyfMgGvo9PA-unsplash.png",
      title  : 'Countries Segmentation',
      filter : '',
      content : "Clustering of countries based on income and life expentancy using K-Means clustering algorithm",
      hashtag : '# Data Science | Machine Learning'
    },
  ]
  const product = productData.map((item) => (
    <Carousel.Item>
    <ProjectCard
      refpage = {item.refpage}
      imgsource = {item.imgsource}
      title  = {item.title}
      filter = {item.filter}
      content = {item.content}
      hashtag = {item.hashtag}
    />
  </Carousel.Item>
  ))
    return (
        <section id="projects">
        <div className="container">
          <div className="row text-center justify-content-center mb-1">
            <div className="col">
              <h2 className="mb-3 mt-1" styles={{fontSize: '50px'}}>My Projects</h2>
            </div>
          </div>
          <Carousel cols={3} rows={3} gap={10} loop = {false} showDots = {true} >
            {product}
          </Carousel>
        </div>
      </section>
    )

}

export default ProjectSection;