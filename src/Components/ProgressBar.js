import React from 'react'

function XpCounter({XPcount, levelup}) {

     return (
        <div className='leveling'>
            <h1>Level: {levelup}</h1>
    
            <div className="progress">
                
                <div className="progress-done" style={{ width: XPcount + '%' }}>
                    <p>{XPcount}%</p>
                </div>
            </div> 
        </div>
    )
}

export default XpCounter