const Counter = (props) => {
    
    return (<div className="text-dark m-auto " style={{height:"100px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"35px"}}>
        {props.counter}
    </div>);
}
export default Counter;