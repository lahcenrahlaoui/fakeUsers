import React, { useState } from "react";
import Button from "../Button/Button";

const Slider = ({ list, album }) => {
    // const list = ["a" , "b" , "c" , "d" , "e" , "f" , "i"]

    const [index, setIndex] = useState(0);

    const handleRight = () => {
        setIndex((i) => i - 1);
    };

    const handleLeft = () => {
        setIndex((i) => i + 1);
    };
    console.log("/////////////")
    console.log(list)
    console.log("/////////////")

    const renderedList = list.map((photo, i) => {
        console.log();
        if (i + index < index + 3) {
            const extraIndex = (i + index) % list.length;
            return (
                <div key={i + index} className="m-2">
                    <React.Fragment key={photo.id}>
                        {album.id === photo.albumId && (
                            <img
                                className="m-1"
                                src={list[extraIndex].imgUrl}
                                alt={photo.imgUrl}
                                width="50"
                                height="50"
                            />
                        )}
                    </React.Fragment>
                </div>
            );
        }
    });

    return (
        <div className="flex">
            <Button primary onClick={handleRight}>
                {" "}
                {`<`}
            </Button>
            {renderedList}
            <Button primary onClick={handleLeft}>{`>`}</Button>
        </div>
    );
};

export default Slider;
