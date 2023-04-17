import { GoTriangleDown } from "react-icons/go";
const ExpandPanel = ({ header, children , onClick }) => {
    const handleClick = () =>{
        onClick(s =>!s)
    }
    return (
        <div>
            <div className=" border rounded-t-md">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    <div className="flex">{header}</div>
                    <GoTriangleDown onClick={handleClick}/>
                </div>
            </div>
            {children}
        </div>
    );
};

export default ExpandPanel;
