import React from 'react'

function Loading({levelup}) {

    const RemoveLoading = () => {
        document.getElementById('loading').classList.remove('active');
    }

    return (
        <div 
        onClick={RemoveLoading} 
        className = { levelup>5 ? `level-${ levelup } active` : `level`}
        id="loading" 
        >
            <h1 id='chapter'> </h1>
            <p id='ilustration'> </p>
            <p id='story'></p>
            <div id='close'></div>
        </div>
    )
}

export default Loading
