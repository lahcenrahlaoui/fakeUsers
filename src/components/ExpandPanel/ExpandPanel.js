import { GoTriangleDown, GoTriangleLeft } from "react-icons/go";
import { useState } from "react";
import classNames from "classnames";
const ExpandPanel = ({ header, children, onClick, data, className }) => {
    const [togglePanel, setTogglePanel] = useState(false);

    const handleClick = () => {
        setTogglePanel((state) => !state);
    };

    return (
        <div className="mb-2">
            <div className="border rounded-t-md">
                <div className="flex p-2 justify-between items-center ">
                    <div className="flex">{header}</div>
                    <div onClick={handleClick} className="cursor-pointer">
                        {togglePanel ? <GoTriangleDown /> : <GoTriangleLeft />}
                    </div>
                </div>
            </div>
            {togglePanel && <div className="p-2 border">{children}</div>}
        </div>
    );
};

export default ExpandPanel;
