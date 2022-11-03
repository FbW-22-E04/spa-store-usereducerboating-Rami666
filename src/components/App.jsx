import { useReducer, useEffect } from "react";

const initialState = {
  started: false,
  gear: 0,
  speed: 0,
  distance: 0,
};

function reducer(previousState, action) {
  if (action.type === "start") {
    if (Math.random() > 0.5) {
      alert("Failed to start");
      return previousState;
    }
    return { ...previousState, started: true };
  }

  if (action.type === "move") {
    return { ...previousState, distance: previousState.distance + previousState.speed};
  }

  if (previousState.started === false) {
    return previousState;
  }

  if (action.type === "accelerate") {
    if (previousState.gear !== 0) {
      return {
        ...previousState,
        speed: previousState.speed + previousState.gear * 10,
      };
    }
  }

  if (action.type === "gearUp") {
    if (previousState.gear < 5) {
      return { ...previousState, gear: previousState.gear + 1 };
    }
  }

  if (action.type === "gearDown") {
    if (previousState.gear > -2) {
      return { ...previousState, gear: previousState.gear - 1 };
    }
  }

  return previousState;
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect is the bonus solution
  useEffect(() => {
    const interval = setInterval(() => {
        dispatch({ type: "move" })
    }, 1000);
    return () => { clearInterval(interval); }
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Boating with useReducer</h1>
      <p>Engine {state.started ? "ON" : "OFF"}</p>
      <p>Speed: {state.speed}</p>
      <p>Current gear: {state.gear}</p>
      <p>Distance travelled: {state.distance}</p>
      
      <button onClick={() => dispatch({ type: "start" })}>Start engine</button>
      <button onClick={() => dispatch({ type: "accelerate" })}>Accelerate</button>
      <button onClick={() => dispatch({ type: "gearUp" })}>Gear up</button>
      <button onClick={() => dispatch({ type: "gearDown" })}>Gear down</button>
    </div>
  );
}