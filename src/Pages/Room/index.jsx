import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) =>{
        const appID = 1516655857;
        const serverSecret = "54a64a2c4821c6b80e0b079effede74f";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomId , 
            Date.now().toString(), 
            "VideoCallUser1"
            );
            const zc = ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url: `http://localhost:3000/room/${roomId}`,
                    }
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall,
                },
                showScreenSharingButton: true,
            });
    };

    return (
    <div>
        <div ref={myMeeting}/>

    </div>
    )
};

export default RoomPage;