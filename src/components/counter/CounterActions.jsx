
const CounterActions=(props)=>{
    return(
        <div className="text-center m-auto">
        <button className="btn btn-danger p-2 m-2" onClick={props.decrement}>decrement -</button>
        <button className="btn btn-primary p-2 m-2" onClick={props.increment}>increment +</button>
        </div>
    );
}
export default CounterActions;