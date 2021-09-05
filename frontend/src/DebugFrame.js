import React from 'react';

const DebugFrame = () => {
    const styleObj = {
        height: "100%",
        background: "none",
        border: "0px",
        bottom: "0px",
        float: "none",
        left: "0px",
        margin: "0px",
        padding: "0px",
        position: "absolute",
        right: "0px",
        width: "100%"
    }
    return (
        <iframe src="http://localhost:8000/debug" allowtransparency="true" frameBorder="0" scrolling="no" title="djdt" style={styleObj} />
    );
};
export default DebugFrame;
