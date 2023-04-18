import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Slider = ({ list, album }) => {
    const [index, setIndex] = useState(0);

    const displaySlider = list.some((item) => {
        return item.albumId === album.id;
    });

    const handleRight = () => {
        setIndex((i) => i + 1);
    };

    const handleLeft = () => {
        setIndex((i) => i - 1);
    };

    let imageToShow = 0;
    const renderedList = list.map((photo, i) => {
        const extraIndex = (i + index) % list.length;
        if (album.id === photo.albumId) {
            if (imageToShow > 2) {
                return;
            } else {
                imageToShow++;
                return (
                    <div
                        key={photo.id}
                        className="flex justify-between items-center"
                    >
                        <img
                            className="m-1"
                            src={list[extraIndex].imgUrl}
                            alt={photo.imgUrl}
                            width="80%"
                            height="80%"
                        />
                    </div>
                );
            }
        } else {
            return;
        }
    });

    return (
        <>
            {displaySlider && (
                <div className="flex justify-between border p-3 w-full">
                    <div className="flex justify-center items-center h-full ">
                        <Button primary onClick={handleLeft}>
                            <GoChevronLeft />
                        </Button>
                    </div>
                    {renderedList}
                    <div className="flex justify-center items-center h-full ">
                        <Button primary onClick={handleRight}>
                            <GoChevronRight />
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Slider;
