import React from "react";

type ImageProps = {src: string, name: string, height: number, width: number};
function Image(props: ImageProps) {
    return <img src={props.src} alt={props.name} height={props.height} width={props.width} className="App-logo"/>
}

export default Image;