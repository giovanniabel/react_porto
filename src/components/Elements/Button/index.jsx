const Button = (props) => {
    // const {children, classname = "bg-black", onClick = () => {}, type = "button"} = props;
    return(
        <a href="/#projects" style={{textDecoration: 'none'}}>
                <button className="mx-auto d-block button mb-5 mt-5">
                <span className="buttontext fs-6">See other projects</span>
                </button>
            </a> 
    //   <button
    //     className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
    //     type={type}
    //     onClick={onClick}
    //   >
    //     {children}
    //   </button>
    );
  };

export default Button;