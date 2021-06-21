import React from "react";

type ImageProps = { src: string, name: string, height: number, width: number }

type ImagesRowProps = { images: ImageProps[] }

function ImagesRow(props: ImagesRowProps) {
    const images = props.images.map(imageProps => {
        return <div className="column" key={imageProps.name}>
            <img src={imageProps.src} alt={imageProps.name} height={imageProps.height} width={imageProps.width}/>
        </div>
    })

    return <div className="row">{images}</div>
}

export default ImagesRow;