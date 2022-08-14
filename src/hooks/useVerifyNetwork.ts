import { useEffect, useState } from "react"
import { useNetInfo } from "@react-native-community/netinfo";
export const useVerifyNetwork = () => {
    const netInfo = useNetInfo()
    const [isWifiConnected,setIsWifiConnected] = useState<boolean>(false)
    const verifyConnection = () => {
        if(netInfo.isConnected!==null){
            setIsWifiConnected(netInfo.isConnected)
        }
        
    }
    useEffect(()=>{
        verifyConnection()
    },[JSON.stringify(netInfo)])
    return{
        verifyConnection,
        isWifiConnected
    }
}

/*
create this link to maintain control of the network with a focused application state

but I could not use it to test since in expo it did not allow me to leave and return from the application

Basically the idea was to show some screen to indicate that internet is needed
*/