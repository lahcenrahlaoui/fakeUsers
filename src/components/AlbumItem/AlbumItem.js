import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const AlbumItem = ({ user, album }) => {
    return (
        <div key={album.id}>
            {user.id === album.userId && (
                <div className="border p-1 pr-3 pl-3 flex justify-between mb-2">
                    <div>{album.albumName}</div>
                    <div className="flex justify-center items-center">
                        <GoChevronLeft />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AlbumItem;
