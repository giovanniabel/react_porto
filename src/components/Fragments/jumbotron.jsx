import { Linkedin, EnvelopeFill } from 'react-bootstrap-icons';

const Jumbotron = () => {
    return (
        <section className="jumbotron text-center">
                        <img
                        src="img/1656345570288.jpg"
                        alt="Giovanni Abel"
                        width="200"
                        className="rounded-circle img-thumbnail"
                        />
                        <h1 className="display-4 lineRight">Giovanni Abel Christian</h1>
                        <p className="lead lineLeft">
                        Data Engineer | Data Scientist | BI Developer
                        </p>
                        <hr className="mx-auto" style={{ width: '600px' }} />
                        <div className="row">
                        <div className="col lineUp">
                            <div className="iconatas mx-auto">
                            <a href='https://www.linkedin.com/in/giovanni-abel-a7145a22b/'  target="_blank" className='p-2'
                            >
                                <Linkedin className="icons_edit" size={30}/>
                            </a>
                            {/* <a href="https://github.com/giovanniabel" target="_blank" styles="color: #000; text-decoration: none">
                                <i className="fab fa-github fa-2x fa-fw icons_edit"></i>
                            </a>  */}
                            <a
                            style={{ color: '#000000', textDecoration: 'none', cursor: 'pointer' }}
                                    id="logoemail"
                            >
                                <EnvelopeFill className="icons_edit" size={34} />
                            </a>
                            <p
                                className="tultip mt-2 fw-semibold"
                                id="ttip"
                                styles="opacity: 0; pointer-events: none"
                            >
                                giovanniabel@outlook.com
                            </p>
                            </div>
                        </div>
                        </div>
        </section>
    )

}

export default Jumbotron;