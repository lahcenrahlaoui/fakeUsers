import ExpandPanel from "../ExpandPanel/ExpandPanel";

import { GoX, GoSync } from "react-icons/go";

import {
    useAddPhotoMutation,
    useDeleteAlbumMutation,
    useFetchPhotosQuery,
} from "../../store";
import Button from "../Button/Button";

const PhotosList = ({ album }) => {
    const { data, error, isFetching } = useFetchPhotosQuery(album);

    const [addPhoto, results] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
        console.log(results);
    };
    let content;

    console.log(data);

    if (isFetching) {
        content = <div>is loading</div>;
    } else if (error) {
        content = <div>error</div>;
    } else {
        content = data.map((photo) => {
            return (
                <img
                    width="50px"
                    height="50px"
                    key={photo.id}
                    src={photo.src}
                />
            );
        });
    }
    return (
        <div className="">
            <div className="flex justify-between mb-2">
                <div> {album.title}</div>
                <Button danger onClick={handleAddPhoto}>
                    +Photo
                </Button>
            </div>
            <div className="flex justify-around">
                {content}
            </div>
        </div>
    );
};

export default PhotosList;
