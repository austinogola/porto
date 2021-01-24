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
                        <h5 className='nameIs'style={{color:cts.green}}>A big selection of things I've programmed</h5>
                    </div>

                </div>

                <div className="Roles container" style={{color:cts.whiteDarker}}>
                    <div className="row">
                        <div className="col-2"><h5 className='fixen'>Year</h5></div>
                        <div className="col-5"><h5 className='fixen'>Title</h5></div>
                        <div className="col-3"><h5 className='fixen'>Built With</h5></div>
                        <div className="col-2"><h5 className='fixen'>Links</h5></div>
                    </div>

                    <ArchiveList Year='2020' Title='Google Keep Clone' Built={[{item:'React',pos:1},{item:'MySQL',pos:2},{item:'Node/Express',pos:3}]}
                    gitHubLink='https://github.com/austinogola/keep200'/>

                    <ArchiveList Year='2020' Title='Divonn Site'Built={[{item:'React',pos:1}]}
                    gitHubLink='https://github.com/austinogola/divonn'/>

                    <ArchiveList Year='2020' Title='Portfolio V4' Built={[{item:'React',pos:1}]} 
                    gitHubLink="https://github.com/austinogola/porto" liveLink='https://austin-ogola.netlify.app/'/>
                    
                    <ArchiveList Year='2020' Title='Custom' 
                    Built={[{item:'React',pos:1}]}/>

                    <ArchiveList Year='2019' Title='Image Processor' Built={[{item:'Python',pos:1},{item:'Tkinter',pos:2},{item:'Pandas',pos:4}]}
                    gitHubLink="https://github.com/austinogola/paintjs"/>

                    <ArchiveList Year='2019' Title='Custom' 
                    Built={[{item:'React',pos:1}]}/>

                    <ArchiveList Year='2019' Title='Portal' 
                    Built={[{item:'React',pos:1}]}/>

                    <ArchiveList Year='2019' Title='Animate' 
                    Built={[{item:'React',pos:1}]}/>

                    <ArchiveList Year='2019' Title='Custom' 
                    Built={[{item:'React',pos:1}]}/>

                    <ArchiveList Year='2018' Title='Portfolio V3' 
                    Built={[{item:'React',pos:1}]}/>

                    <ArchiveList Year='2018' Title='Killer Creative Site' 
                    Built={[{item:'React',pos:1}]}  liveLink='https://www.killercreative.co.uk/'/>

                    <ArchiveList Year='2018' Title='Templates' 
                    Built={[{item:'React',pos:1}]}/>

                    <ArchiveList Year='2018' Title='Titan Marines' 
                    Built={[{item:'React',pos:1}]} liveLink='https://www.titan-marine.com/'/>

                    <ArchiveList Year='2017' Title='Chownow Orders Site' 
                    Built={[{item:'React',pos:1}]} liveLink='https://www.eat.chownow.com/'/>

                    <ArchiveList Year='2017' Title='Portfolio V2' Built={[{item:'React',pos:1}]}
                    gitHubLink='https://github.com/austinogola/version2'/>

                    <ArchiveList Year='2016' Title='Scheduling App' Built={[{item:'React',pos:1}]}
                    gitHubLink='https://github.com/austinogola/scheduling' liveLink=''/>    

                    <ArchiveList Year='2017' Title='Student Portal' Built={[{item:'React',pos:1}]}
                    gitHubLink='https://github.com/austinogola/studentz2017'/>

                    <ArchiveList Year='2016' Title='Portfolio Site V1' 
                    Built={[{item:'React',pos:1}]}/>

                </div>
            </div>
        </div>
    )
}

export default Archive