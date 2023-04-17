import React, { useState } from "react";
import Button from "../Button/Button";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Slider = ({ list, album }) => {
    // const list = ["a" , "b" , "c" , "d" , "e" , "f" , "i"]

    const [index, setIndex] = useState(0);

    const handleRight = () => {
        setIndex((i) => i - 1);
    };

    const handleLeft = () => {
        setIndex((i) => i + 1);
    };

    const renderedList = list.map((photo, i) => {
            const extraIndex = (i + index) % list.length;
            console.log(extraIndex)
            return (

                <div
                    key={photo.id}
                    className="flex justify-between items-center"
                >
                    {album.id === photo.albumId && (
                        <img
                            className="m-1"
                            src={list[extraIndex].imgUrl}
                            alt={photo.imgUrl}
                            width="250"
                            height="250"
                        />
                    )}
                </div>
            );
    });

    return (
        <div className="flex justify-between bg-blue-200 w-full">
            <div className="flex justify-center items-center h-full ">
                <Button primary onClick={handleRight}>
                    <GoChevronLeft />
                </Button>
            </div>
            {/* <div className="flex justify-between items-center"> */}
            {renderedList}
            {/* </div> */}
            <div className="flex justify-center items-center h-full ">
                <Button primary onClick={handleLeft}>
                    <GoChevronRight />
                </Button>
            </div>
        </div>
    );
};

export default Slider;
