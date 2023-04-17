import { GoTriangleDown, GoTriangleLeft } from "react-icons/go";
import { useState } from "react";
const ExpandPanel = ({ header, children }) => {
    const [togglePanel, setTogglePanel] = useState(false);
    const handleClick = () => {
        setTogglePanel((state) => !state);
    };
    return (
        <div>
            <div className=" border rounded-t-md">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    <div className="flex">{header}</div>
                    {togglePanel ? (
                        <GoTriangleDown onClick={handleClick} />
                    ) : (
                        <GoTriangleLeft onClick={handleClick} />
                    )}
                </div>
            </div>  
            {togglePanel && <div className="p-2 border">{children}</div>}
        </div>
    );
};

export default ExpandPanel;
