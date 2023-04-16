import classNames from "classnames";

const LoadingData = ({ loop, className }) => {
    const palceHolders = [];

    const classes = classNames(
        "animate-shimmer",
        "absolute",
        "inset-0",
        "-traslate-x-full",
        "bg-gradient-to-r",
        "from-gray-200",
        "via-white",
        "to-gray-200"
    );

    const outSideClasses = classNames(
        "relative",
        "overflow-hidden",
        "bg-gray-200",
        "mb-3",
        className
    );

    for (let i = 0; i < loop; i++) {
        palceHolders.push(
            <div key={i} className={outSideClasses}>
                <div className={classes} />
            </div>
        );
    }

    // const placeHolders = Array(loop).fill(0).map((_ , index)=>{ return <div key={index} />  })
    return palceHolders;
};

export default LoadingData;
