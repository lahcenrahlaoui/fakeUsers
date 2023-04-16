import className from "classnames";

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = className(
        rest.className,
        "flex items-center px-3 py-1.5 border ",
        {
            "bg-blue-500 border-blue-500 ": primary,
            "bg-gray-200 border-gray-200 ": secondary,
            "bg-green-500 border-green-500 ": success,
            "bg-yellow-400 border-yellow-400 ": warning,
            "bg-red-500 border-red-500": danger,

            "text-white": !outline,

            "rounded-full": rounded,

            "bg-white": outline,

            "text-blue-500": outline && primary,
            "text-grey-900": outline && secondary,
            "text-green-500": outline && success,
            "text-yellow-500": outline && warning,
            "text-red-500": outline && danger,
        }
    );

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}

Button.propTypes = {
    checkVariation: ({ primary, secondary, success, warning, danger }) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);
        if (count > 1) {
            return new Error("invalid props");
        }
    },
};

export default Button;
