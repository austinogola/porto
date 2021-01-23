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
                <Projo projectTitle='Google Keep Clone' projectDetails='A simple Google Keep clone built with React and Node.'
                projectTech={[{item:'React',pos:1},{item:'Node',pos:2},{item:'MySQL',pos:3}]}
                />

                <Projo projectTitle='Website Templates' projectDetails='A collection of website templates I made for quick web development'
                projectTech={[{item:'Javascript',pos:1},{item:'HTML/CSS',pos:2},{item:'Sass',pos:3}]}
                />

                <Projo projectTitle='AnimateX' projectDetails='A CSS library for animating web components'
                projectTech={[{item:'Javascript',pos:1},{item:'HTML/CSS',pos:2},{item:'Sass',pos:3},{item:'Jquery',pos:4}]}
                />

                <Projo projectTitle='Browser Game Portal' projectDetails='A website containing a collection of my favourite simple video games that I cloned'
                projectTech={[{item:'Javascript',pos:1},{item:'HTML/CSSS',pos:2},{item:'Javascript',pos:3}]}
                />

                <Projo projectTitle="Divonn's Main Site" projectDetails='The landing page for Divonn'
                projectTech={[{item:'Javascript',pos:1},{item:'React',pos:2},{item:'Node/Express',pos:3}]}
                />

                <Projo projectTitle='Python Image Processing App' projectDetails='An app for editing images I built with python'
                projectTech={[{item:'Python',pos:1},{item:'Pandas',pos:2},{item:'OpenCV',pos:3}]}
                />

            </div>
            <div className='d-flex justify-content-center'>
                <a href='/archive' target='_blank'>
                    <p style={{color:cts.green,fontFamily:'Cousine'}}>View whole archive</p>
                </a>
                </div>
        </div>
    )
}

export default Projects