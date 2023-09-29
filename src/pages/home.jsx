import React, { useEffect } from 'react';
import Jumbotron from '../components/Fragments/jumbotron';
import AboutSection from '../components/Fragments/about';
import ProjectSection from '../components/Fragments/projects';

const HomePage = () => {
  useEffect(() => {
    const tulisan = document.getElementById("ttip");

    function show_email() {
      tulisan.style.opacity = 1;
      tulisan.style.animation = "3s anim-Appear ease-out";
      hide_email();
    }

    function hide_email() {
      if (tulisan.style.opacity === "1") {
        setTimeout(() => {
          tulisan.style.animation = "2s anim-disAppear ease-out";
          tulisan.style.opacity = 0;
        }, 6000);
      }
    }

    // Add an event listener to the 'logoemail' element
    const logoemail = document.getElementById("logoemail");
    logoemail.addEventListener("click", show_email);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      logoemail.removeEventListener("click", show_email);
    };
  }, []); 
      return (
        <div className="home" id = "home">
            <div className="parallax">
              <Jumbotron/>
              <AboutSection/>
              <ProjectSection/>
              <br />
              <p className="text-center">Copyright © 2023 Giovanni Abel Christian</p>
              <br />
            </div>
            <script src="script.js"></script>
        
        </div>
        );

}

export default HomePage;