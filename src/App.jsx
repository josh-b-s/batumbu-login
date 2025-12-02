import {useState} from 'react'

function App() {
    const [activeScreen, setActiveScreen] = useState(1)
    const handlePress = () => {
        setActiveScreen(2)
    }

    return (<>
            <div className="w-full h-screen flex flex-col justify-center items-center gap-8 bg-[#F5F5F7]">
                {activeScreen === 1 && <LoginScreen onPress={handlePress}/>}
                {activeScreen === 2 && <WelcomeScreen name={"Josh"}/>}
            </div>
        </>)
}

function LoginScreen({onPress}) {
    return (<>
        <h1 className="text-5xl font-bold text-[#C42127]">
            PT.Berdayakan Usaha Indonesia (Batumbu)
        </h1>

        <button
            onClick={onPress}
            className="px-8 py-2 rounded-4xl bg-[#C42127] text-white text-xl opacity-80 hover:opacity-100 cursor-pointer">
            Login
        </button>
    </>)
}

function WelcomeScreen({name}) {
    return (<>
        <h1 className="text-4xl font-bold text-[#C42127]">
            Logged in already {name}
        </h1>
    </>)
}


export default App
