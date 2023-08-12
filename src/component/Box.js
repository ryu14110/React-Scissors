import React from 'react';

const Box = (props) => {
  // console.log(props)
  let result;
  if(props.title ==="Computer" && props.result !=="tie" && props.result !==""){
    result = props.result ==="win" ? "lose" : "win";
  }else{
    result =props.result
  }
  return (
    <div className={`box ${result}`}>
      <h2>{props.title}</h2>
      <img src={props.item && props.item.img} className="item-img" alt="" />
      <h3>{result}</h3>
    </div>
  )
}

export default Box;
