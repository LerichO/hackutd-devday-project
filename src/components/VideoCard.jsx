function VideoCard(props){
    return (
        <div className="relative m-8 h-[299px] w-[180px] bg-secondary rounded-md">
            <img src={props.thumbnailURL} alt={props.title} className="h-full rounded-md"></img>
            <div className="absolute bottom-0 w-full h-2/5 rounded-md bg-gradient-to-t from-black to-transparent"></div>
            <h1 className="absolute bottom-4 left-4 font-semibold">
                {props.title}
            </h1>
        </div>
    )
}

export default VideoCard;