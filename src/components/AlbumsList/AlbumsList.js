import AlbumItem from "../AlbumItem/AlbumItem";

import { useSelector } from "react-redux";

const AlbumsList = ({ user }) => {
    const { data } = useSelector((state) => {
        return state.albums;
    });

    const albums = data.map((album) => {
        return <AlbumItem key={album.id} album={album} user={user} />;
    });

    return <div className="p-2 rounded-b-md">{albums}</div>;
};

export default AlbumsList;
