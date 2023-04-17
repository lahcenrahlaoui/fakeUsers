import AlbumItem from "../AlbumItem/AlbumItem";
const AlbumList = () => {
    return (
        <div className="border p-2 rounded-b-md">
            <div className="flex justify-center items-center"> albums by {"id"} </div>
            <div className="flex flex-col justify-center  items-center"> 
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
            </div>
        </div>
    );
};

export default AlbumList;
