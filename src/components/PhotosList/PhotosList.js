import Slider from "../Slider/Slider";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../../store";
import Button from "../Button/Button";

const PhotosList = ({ album }) => {
    const { data, error, isFetching, isSuccess } = useFetchPhotosQuery(album);

    const [addPhoto, results] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    };
    let content;

    if (isFetching) {
        content = <div>is loading</div>;
    } else if (error) {
        content = <div>error</div>;
    } else {
        content = data.map((photo) => photo.src);
    }

    return (
        <div className="overflow-hidden">
            <div className="flex justify-between mb-2">
                <div> {album.title}</div>
                <Button danger onClick={handleAddPhoto}>
                    +Photo
                </Button>
            </div>
            {!isFetching && isSuccess && (
                <Slider content={content} className={""} />
            )}
        </div>
    );
};

export default PhotosList;
