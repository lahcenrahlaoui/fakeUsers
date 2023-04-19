// import { useEffect, useRef } from "react";

// // import Flickity from "flickity";
// export default function Slider({ content }) {
//     useEffect(() => {
//         initFlickity();
//     }, []);

//     const carousel = useRef(null);

//     async function initFlickity() {
//         if (typeof window !== "undefined" && carousel.current) {
//             const Flickity = (await import("flickity")).default;
//             const x = (await import("flickity/css/flickity.css")).default;
//             // console.log(Flickity)

//             new Flickity(carousel.current, {
//                 // lazyLoad: true,
//                 // wrapAround: true,

//                 draggable: true,

//                 freeScroll: true,
//                 autoPlay: 1500,
//                 contain: true,
//                 // disable previous & next buttons and dots
//                 // prevNextButtons: false,
//                 pageDots: false,

//                 // groupCells: 2,
//             });
//         }
//     }

//     const images = content.map((image, idx) => {
//         return (
//             <div
//                 className="justify-center items-center w-full h-min	 p-4    "
//                 key={idx}
//             >
//                 <div className=" w-full h-full  justify-center items-center ">
//                     <img src={image} />
//                 </div>
//             </div>
//         );
//     });

//     return (
//         <div ref={carousel} className=" w-full h-min	 p-2 m-2     ">
//             {images}
//         </div>
//     );
// }

/****************************************************
 *
 *
 *
 *
 *
 *
 */

import classNames from "classnames";
import Flickity from "react-flickity-component";

function Slider({ content, className }) {
    const flickityOptions = {
        initialIndex: Math.floor(Math.random() * content.length),
        lazyLoad: 2,
        wrapAround: true,

        draggable: content.length > 2 ? true : false,

        freeScroll: content.length > 2 ? true : false,
        autoPlay: content.length > 2 ? 3000 : false,
        // contain: true,
        // disable previous & next buttons and dots
        prevNextButtons: false,
        pageDots: false,

        groupCells: true,
        imagesLoaded: true
    };

    const images = content.map((image, idx) => {
        return (
            <div className="  w-1/2 mr-2 bg-red-500 " key={idx}>
                <img className="carousel-cell-image" src={image} />
            </div>
        );
    });
    const classes = classNames(" carousel outline-0 !bg-transparent", {
        className,
    });
    return (
        <Flickity
            className={classes}
            elementType={"div"}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
        >
            {images}
        </Flickity>
    );
}

export default Slider;
