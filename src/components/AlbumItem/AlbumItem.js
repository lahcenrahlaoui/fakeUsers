import { GoChevronDown } from "react-icons/go";

const AlbumItem = () => {
    return (
        <div className="border p-1 m-1 flex justify-between w-40 bg-red-400">
            <div> item number </div>
            <div className="flex justify-center items-center">
                <GoChevronDown />
            </div>
        </div>
    );
};

export default AlbumItem;
