import React from 'react'

const SearchBox = (props:any) => {
  return (
    <div>
      <div className="w-50 background">
          <center>
            <h1 style={{ margin: "0px" , color:'white' }} >weather forcast</h1>
            <h2  style={{ margin: "240px 0px 20px 0px",color:'White' }}>The only Weather Forcast You  Need</h2>
            <hr style={{width:'150px',height:'2px'}} color="white" />
            <input
            type="text"
            value={props.value}
            onChange={props.change}
            placeholder="cityname"
            style={{ margin: "16px" }}
          /><br></br>
          <button onClick={props.click}>done</button>
          </center>
        </div>
    </div>
  )
}

export default SearchBox
