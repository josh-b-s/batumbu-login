import {useState} from 'react'
import './App.css'

function App() {
    const [activeScreen, setActiveScreen] = useState(1)
    const handlePress = () => {
        setActiveScreen(2)
    }

    return (<>
            <div className="w-full h-screen flex flex-col justify-center items-center gap-8 bg-[#F5F5F7]">
                {activeScreen === 1 && <Screen1 onPress={handlePress}/>}
                {activeScreen === 2 && <Screen2/>}
            </div>
        </>)
}

function Screen1({onPress}) {
    return (<>
        <h1 className="text-5xl font-bold text-[#C42127]">
            PT.Berdayakan Usaha Indonesia (Batumbu)
        </h1>

        <button
            onClick={onPress}
            className="px-8 py-2 rounded-4xl bg-[#C42127] text-white text-xl opaci ty-80 hover:opacity-100 cursor-pointer">
            Login
        </button>
    </>)
}

function Screen2() {
    return (<>
        <h1 className="text-4xl font-bold text-[#C42127]">
            Logged in already
        </h1>
    </>)
}


export default App
