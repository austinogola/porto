import React,{useContext} from 'react'
import './ProjItems2.css'
import {ThemeContext} from './Navbar'
import { FiExternalLink} from 'react-icons/fi'
import { FaGithub} from 'react-icons/fa'

function ProjItems2(props){
    return(
        <div className='ProjItems2 col-12 row'>
            <div className="col-6 d-flex align-items-center">
                <div className="ProjItems2-sticker shadow"></div>
            </div>
            <div className="col-6 shadow">
                <img alt='Not found' src={props.image} style={{width:'100%',height:"350px"}}/>
            </div>
        </div>
    )
}

export default ProjItems2