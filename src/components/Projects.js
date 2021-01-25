import React,{useContext} from 'react'
import './Projects.css'
import {ThemeContext} from './Navbar'
import Projo from './Projo'

function Projects(){
    const cts=useContext(ThemeContext)
    return(
        <div className='container' style={{background:cts.darkBlue}}>
            <h2 className='Title4' style={{ borderColor: cts.green, color: cts.whiteWhite }}>Some Things I Have Built</h2>
            <div className='row' style={{marginBottom:'32px'}}>
                
                <Projo projectTitle='Image Processing In the Browser' projectDetails='An image editor I built with Javascript'
                projectTech={[{item:'Javascript',pos:1},{item:'HTML/CSS',pos:2},{item:'Webpack',pos:3}]}
                liveLink='https://viliusle.github.io/miniPaint/' gitHubLink='https://github.com/austinogola/paintjs'/>

                <Projo projectTitle='AnimateX' projectDetails='A CSS library for animating web components'
                projectTech={[{item:'Javascript',pos:1},{item:'HTML/CSS',pos:2},{item:'Sass',pos:3},{item:'Jquery',pos:4}]}
                gitHubLink='https://github.com/austinogola/animateX'/>
                
                {/* <Projo projectTitle='Google Keep Clone' projectDetails='A simple Google Keep clone built with React and Node.'
                projectTech={[{item:'React',pos:1},{item:'Node',pos:2},{item:'MySQL',pos:3}]}
                /> */}

                <Projo projectTitle="Killer Creative Site" projectDetails='The landing page for Killer Creatives'
                projectTech={[{item:'Javascript',pos:1},{item:'React',pos:2},{item:'Node/Express',pos:3}]}
                liveLink='https://www.killercreative.co.uk/' />

                <Projo projectTitle='Sheduling App' projectDetails='A calendar and scheduling application I created for my students to organize lessons'
                projectTech={[{item:'Javascript',pos:1},{item:'HTML/CSSS',pos:2},{item:'Bootstrap',pos:3}]}
                liveLink='https://austin-ogola-scheduling.netlify.app/' />

               <Projo projectTitle='ChowNows Website' projectDetails="ChowNow's website"
                projectTech={[{item:'Javascript',pos:1},{item:'HTML/CSS',pos:2},{item:'Sass',pos:3}]}
                liveLink='https://www.eat.chownow.com/'/>

                <Projo projectTitle='Browser Game Portal' projectDetails='A website containing a collection of my favourite simple video games that I cloned'
                projectTech={[{item:'Javascript',pos:1},{item:'HTML/CSSS',pos:2},{item:'Javascript',pos:3}]}
                />

            </div>
            <div className='d-flex justify-content-center'>
                <a href='https://austin-ogola-archive.netlify.app/' target='_blank' rel="noopener noreferrer">
                    <p style={{color:cts.green,fontFamily:'Cousine'}}>View whole archive</p>
                </a>
                </div>
        </div>
    )
}

export default Projects