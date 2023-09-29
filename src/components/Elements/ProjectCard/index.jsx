const ProjectCard = (props) => {
    const { refpage, imgsource, title, filter, content, hashtag } =props;
    return (
        <div className="card cardbox" >
        <div style={{ height: '200px'}}>
          <a href={refpage}>
            <img
              src={imgsource}
              className="card-img-top"
              alt={title}
              style={{ height: '100%', filter: filter
                    }}
            />
          </a>
        </div>
        <div className="card-body">
          <h5>{title}</h5>
          <p className="card-text">
           {content}
          </p>
        </div>
        <p className="hashtags">&emsp;{hashtag}</p>
      </div>

    )

}

export default ProjectCard;