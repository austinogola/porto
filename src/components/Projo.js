import React,{useContext} from 'react'
import './Projo.css'
import {ThemeContext} from './Navbar'
import { FiExternalLink,FiFolder,FiGithub} from 'react-icons/fi'

function Projo(props){
    const cts=useContext(ThemeContext)

    const tech=props.projectTech
    return(
        <div className="Projo col-12 col-md-6 col-lg-4 p-2" style={{height:'300px'}}>
            <div className='Projo-mini p-4' style={{background:cts.projoBg,height:'280px'}}>
                <div className="Projo-mini-header row mb-3">
                    <div className="col-9"><FiFolder size='32px' color={cts.green}/></div>
                    <div className="col-1" >
                        <FiGithub size="22px" style={{cursor:'pointer',color:cts.whiteDark}} 
                        title='View code'/>
                    </div>

                    <div className="col-1 ml-1" style={{position:'relative',bottom:'2px'}}>
                        <FiExternalLink size="24px" style={{cursor:'pointer',color:cts.whiteDark}}
                        title='Live site'/>
                    </div>
                </div>

                <div className="Projo-mini-details">
                    <h5 style={{ color: cts.projoTitle}}>{props.projectTitle}</h5>
                    <p style={{color:cts.projoColor,fontSize:'14px'}}>{props.projectDetails}</p>
                    
                    <ul style={{color:cts.projoTech,display:'inline-flex',position:'absolute',bottom:'0px'}}>
                       {tech.map(tech=>{
                           return <li key={tech.pos} style={{listStyle:'none',marginRight:'10px'}}><p>{tech.item}</p></li>
                       })} 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projo