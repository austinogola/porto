import React,{useContext} from 'react'
import {ThemeContext} from './Navbar'
import { FiExternalLink,FiGithub} from 'react-icons/fi'
import './Archive.css'
import './Home.css'

function ArchiveList(props){
    
    const cts=useContext(ThemeContext)
    return(
        <div className="ArchiveList row" style={{transition:'.3s',height:'60px',marginBottom:'15px',background:cts.projoBg}} >
            <div className="col-2" style={{color:cts.green}}>{props.Year}</div>
            <div className="col-5"><h5 className="fixen">{props.Title}</h5></div>
            <div className="col-3">{props.Built}</div>
            <div className="col-2 row">
                <div className='col-3'>
                    <a style={{cursor:'pointer'}} href={props.gitHub}><FiExternalLink/></a>
                </div>
                <div className="col-3">
                    <a style={{cursor:'pointer'}} href={props.live}><FiGithub/></a>
                </div>
            </div>
        </div>
    )
}

export default ArchiveList