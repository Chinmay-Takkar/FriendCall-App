import React , {useState , useCallback }from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const [value, setValue] = useState();

    const navigate = useNavigate();

    const handleJoinRoom = useCallback( () => {
        navigate(`/room/${value}`)
    }, [navigate, value]);

    return <div>
        <input
        value={value}
        onChange={(e) => setValue(e.target.value)} 
        type="text" 
        placeholder="Enter Room Code"/>
        <button onClick={handleJoinRoom}>Join</button>
        </div>

};

export default HomePage;