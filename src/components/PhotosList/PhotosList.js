import ExpandPanel from "../ExpandPanel/ExpandPanel";

import { GoX, GoSync } from "react-icons/go";

import { useDeleteAlbumMutation, useFetchPhotosQuery } from "../../store";

const PhotosList = ({ album }) => {
    const { data, error, isFetching } = useFetchPhotosQuery(album);

    let content;

    console.log(data);

    if (isFetching) {
        content = <div>is loading</div>;
    } else if (error) {
        content = <div>error</div>;
    } else {
        content = data.map((photo) => {
            return <img key={photo.id} src={photo.src} />;
        });
    }
    return <div>{content}</div>;
};

export default PhotosList;
