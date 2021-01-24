import React,{useContext} from 'react'
import {ThemeContext} from './Navbar'
import { FiExternalLink,FiGithub} from 'react-icons/fi'
import './Archive.css'
import './Home.css'

function ArchiveList(props){
    
    const cts=useContext(ThemeContext)
    return(
        <div className="ArchiveList row pt-3 shadow" style={{transition:'.3s',height:'60px',marginBottom:'15px',background:cts.projoBg}} >
            <div className="col-2" style={{color:cts.green}}>{props.Year}</div>
            <div className="col-5"><h5 className="fixen">{props.Title}</h5></div>
            <div className="col-3">
                <ul style={{color:cts.projoTech,display:'inline-flex',position:'relative',right:'40px'}}>
                       {props.Built.map(tech=>{
                           return <li key={tech.pos} style={{listStyle:'none',marginRight:'10px'}}><p>{tech.item} </p></li>
                       })} 
                </ul>
            </div>
            <div className="col-2 row">
                <div className='col-3'>
                    {props.liveLink?<a target='_blank'  rel="noopener noreferrer" style={{cursor:'pointer'}} href={props.liveLink}>
                        <FiExternalLink size='20px'/>
                        </a>:null}
                </div>
                <div className="col-3">
                    {props.gitHubLink?<a target='_blank'  rel="noopener noreferrer" style={{cursor:'pointer'}} href={props.gitHubLink}>
                        <FiGithub size='20px'/>
                        </a>:null}
                </div>
            </div>
        </div>
    )
}

export default ArchiveList