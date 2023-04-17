import AlbumItem from "../AlbumItem/AlbumItem";

import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useSelector } from "react-redux";

const AlbumsList = ({ user }) => {
    const { data } = useSelector((state) => {
        return state.albums;
    });

    const albums = data.map((album) => {
        return (
            <div key={album.id}>
                {user.id === album.userId && (
                    <div className="border p-1 pr-3 pl-3 flex justify-between mb-2">
                        <div>{album.id}</div>
                        <div className="flex justify-center items-center">
                            <GoChevronLeft />
                        </div>
                    </div>
                )}
            </div>
        );
    });

    return <div className="p-2 rounded-b-md">{albums}</div>;
};

export default AlbumsList;
