import { GoTriangleDown, GoTriangleLeft } from "react-icons/go";
import { useState } from "react";
const ExpandPanel = ({ header, children, onClick, user }) => {
    const [togglePanel, setTogglePanel] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const handleClick = () => {
        if(!expanded){
            handleProp()
        }
        setTogglePanel((state) => !state);
        
    };
    const handleProp = () =>{
        onClick(user)
        setExpanded(true);
    }
    return (
        <div>
            <div className=" border rounded-t-md">
                <div className="flex p-2 justify-between items-center ">
                    <div className="flex">{header}</div>
                    {togglePanel ? (
                        <GoTriangleDown
                            onClick={() => {
                                handleClick();
                             
                            }}
                            className="cursor-pointer"
                        />
                    ) : (
                        <GoTriangleLeft
                            onClick={handleClick}
                            className="cursor-pointer"
                        />
                    )}
                </div>
            </div>
            {togglePanel && <div className="p-2 border">{children}</div>}
        </div>
    );
};

export default ExpandPanel;
