import { GoTriangleDown } from "react-icons/go";
const ExpandPanel = ({ header, children }) => {
    return (
        <div>
            <div className=" border rounded-t-md">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    <div className="flex">{header}</div>
                    <GoTriangleDown />
                </div>
            </div>
            <div className="p-2 border"> {children}</div>
        </div>
    );
};

export default ExpandPanel;
