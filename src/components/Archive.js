import React,{useContext} from 'react'
import Navbar,{ThemeContext} from './Navbar'
import './Home.css'
import ArchiveList from './ArchiveList'

function Archive(){
    const cts=useContext(ThemeContext)
    return(
        <div style={{background:cts.darkBlue}}>
           <Navbar/>
           <div className='Home' style={{background:cts.darkBlue,height:'2080px'}}>
                <div className='container home-container'>
                    <div className=''>
                        <h1 className='Title display-4 display-sm-5 animated bounce' 
                        style={{color:cts.whiteDark}}>Archive.
                        </h1>
                        <h5 className='nameIs'style={{color:cts.green}}>A big list of things I've programmed</h5>
                    </div>

                </div>

                <div className="Roles container" style={{color:cts.whiteDarker}}>
                    <div className="row">
                        <div className="col-2"><h5 className='fixen'>Year</h5></div>
                        <div className="col-5"><h5 className='fixen'>Title</h5></div>
                        <div className="col-3"><h5 className='fixen'>Built With</h5></div>
                        <div className="col-2"><h5 className='fixen'>Links</h5></div>
                    </div>

                    <ArchiveList Year='2020' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2020' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2020' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2020' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2020' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2019' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2019' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2019' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2019' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2019' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2018' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2018' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2018' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2018' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2018' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2017' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2017' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2017' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2017' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2016' Title='Google Keep' Built="Python"/>
                    <ArchiveList Year='2016' Title='Scheduling App' Built="Python   Tkinter"/>
                </div>
            </div>
        </div>
    )
}

export default Archive