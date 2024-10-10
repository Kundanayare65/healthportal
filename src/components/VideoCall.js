// src/components/VideoCall.js
import React, { useEffect, useRef, useState, useCallback } from 'react';
import io from 'socket.io-client';
import './VideoCall.css'; // Import your CSS styles

const VideoCall = () => {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const [socket, setSocket] = useState(null);
    const [localStream, setLocalStream] = useState(null);
    const [isCallActive, setIsCallActive] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Establish socket connection
    useEffect(() => {
        const socketConnection = io('http://localhost:3001');
        setSocket(socketConnection);

        socketConnection.on('offer', (offer) => {
            // Handle offer received from other client
            // Set remote description here
        });

        socketConnection.on('answer', (answer) => {
            // Handle answer received from other client
            // Set remote description here
        });

        socketConnection.on('candidate', (candidate) => {
            // Handle ICE candidate received from other client
            // Add ICE candidate here
        });

        return () => {
            socketConnection.disconnect();
        };
    }, []);

    // Function to start video call
    const startVideoCall = useCallback(async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            if (localVideoRef.current) {
                localVideoRef.current.srcObject = stream;
            }
            setLocalStream(stream);
            setIsCallActive(true);
            // Emit an offer to the server here
        } catch (error) {
            console.error("Error accessing media devices:", error);
            setErrorMessage("Could not access camera and microphone. Please check permissions.");
            alert("Could not access camera and microphone. Please check permissions.");
        }
    }, []);

    // Function to stop video call
    const stopVideoCall = useCallback(() => {
        if (localStream) {
            localStream.getTracks().forEach(track => track.stop());
            setLocalStream(null);
            if (localVideoRef.current) {
                localVideoRef.current.srcObject = null;
            }
            setIsCallActive(false);
        }
    }, [localStream]);

    return (
        <div className="video-call-container">
            <h2 className="video-call-title">Video Call</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="button-container">
                <button 
                    onClick={startVideoCall} 
                    className={`call-button ${isCallActive ? 'disabled' : ''}`} 
                    disabled={isCallActive}
                >
                    Start Video Call
                </button>
                <button 
                    onClick={stopVideoCall} 
                    className={`call-button ${!isCallActive ? 'disabled' : ''}`} 
                    disabled={!isCallActive}
                >
                    Stop Video Call
                </button>
            </div>
            <div className="video-container">
                <video ref={localVideoRef} autoPlay muted className="video" />
                <video ref={remoteVideoRef} autoPlay className="video" />
            </div>
        </div>
    );
};

export default VideoCall;
