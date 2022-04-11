
const CounterActions=(props)=>{
    return(
        <div className="text-center m-auto">
        <button className="btn btn-danger p-3 m-2" onClick={props.decrement}>-</button>
        <button className="btn btn-primary p-3 m-2" onClick={props.increment}>+</button>
        </div>
    );
}
export default CounterActions;