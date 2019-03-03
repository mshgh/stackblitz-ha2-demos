/** @jsx h */ 
import { h, app } from "hyperapp"
//import { delay } from "@hyperapp/time" // doesn't exist yet

const delay = (fx => (action, { duration }) => [
  fx,
  { action, duration }
])((props, dispatch) =>
  setTimeout(() => dispatch(props.action), props.duration)
)

const changeName = (state, name) => ({ ...state, name })
 
export default (container) =>
  app({
    init: [
      { name: "Hello" },
      delay([changeName, "World"], {
        duration: 1000
      })
    ],
    view: state => <h1>{state.name}</h1>,
    container
  })
