import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import ExpandPanel from "../ExpandPanel/ExpandPanel";
import Button from "../Button/Button";
import { useThunk } from "../../hooks/useThunk";
import { GoX , GoSync } from "react-icons/go";

const AlbumItem = ({ user, album }) => {

    const [doDeletingAlbum , isDeletingAlbum , deletingAlbumError] = useThunk()

    const handleDeleteAlbum = () =>{

    }
    const header = (
        <>
            <div className="flex items-center justify-center mr-4">
                {!isDeletingAlbum ? (
                    <GoX
                        className="text-red-400 hover:text-red-700"
                        onClick={handleDeleteAlbum}
                    />
                ) : (
                    <GoSync className="animate-spin text-red-400" />
                )}
                
                {album.albumName}
                
                
            </div>
        </>
    );
    const handleAddPhoto = () => {};
    return (
        <ExpandPanel header={header} onClick={handleAddPhoto} album={album}>
            <div className="flex justify-between">
                {`Photos in ${album.albumName} `}
                <Button danger onClick={handleAddPhoto}>
                    +Photo
                </Button>
            </div>
        </ExpandPanel>
    );
};

export default AlbumItem;
