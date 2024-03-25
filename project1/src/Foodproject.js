import React, { useState } from 'react';

const Foodproject = () => {
    const[search,setsearch]=useState("")
    const submithandler= e =>{
        e.preventDefault();
        console.log(search)
    }
    return (
        <div>
            <center>
                <h4>Food Recipe App</h4>
                <form onSubmit={submithandler}>
                   <input type="text"value={search} onChange={(e)=>setsearch(e.target.value)}/><br></br>
                   <input type="submit" value="search"/>
                </form>
            </center>
        </div>
    );
};

export default Foodproject;