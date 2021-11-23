import React from 'react'

function Loading({Lvlup}) {

    const RemoveLoading = () => {
        document.getElementById('loading').classList.remove('active');
    }

    return (
        <div
        className = { Lvlup<6 ? `level-${ Lvlup } active` : `level`}
        id="loading" 
        >
            <h1 id='chapter'> </h1>
            <p id='ilustration'> </p>
            <p id='story'> </p>
            <div onClick={RemoveLoading} id='close'> </div>
        </div>
    )
}

export default Loading