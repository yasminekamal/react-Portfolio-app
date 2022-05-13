import { createStore } from "redux"
import todosProducer from "./producers/todosProducer"

const store = createStore(todosProducer);

export default store;