import { useReducer } from "react";

function App() {

const initialState = {
    switchOn: false,
    gear: 0,
    speed: 0,
    }


    const reducer = (state, action) => {

        switch (action.type) {
        
            case "switchOn":
                return { ...state, switchOn: true };

                case 'gearUp':
                    return { ...state, gear: state.gear + 1 };

                    case 'gearDown':
                        return { ...state, gear: state.gear - 1 };

                        case 'speedUp':
                            return { ...state, speed: state.speed + 1 };

                            case 'speedDown':
                                return { ...state, speed: state.speed - 1 };

                                case 'switchOff':
                                    return { ...state, switchOn: false };

                                    default:
                                        return state;
    
    }
}
const [state, dispatch] = useReducer(reducer, initialState);    





  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className="bg-black w-[30rem] h-[20rem]">
        <button className="border-2 p-2 bg-green-400">Start/Stop</button>
        <button className="border-2 p-2 bg-red-600">Gear up</button>
        <button className="border-2 p-2 bg-red-300">Gear Down</button>
        <button className="border-2 p-2 bg-blue-500">Speed Up</button>
        <button className="border-2 p-2 bg-blue-300">Speed down</button>
      </div>
    </div>
  );
}

export default App;
