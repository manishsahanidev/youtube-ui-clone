export function VideoCard(props: any) {
    return (
        <div className="">
            <img className="rounded-md" src={props.photo} />
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-2 pl-3">
                    <img className="w-15 h-15 rounded-full" src={props.thumb} />
                </div>
                <div className=" col-span-10">
                    <div className="">{props.title}</div>
                    <div className="col-span-10 text-base text-gray-600">
                        {props.channelName}
                    </div>
                    <div className="col-span-10 text-base text-gray-600 pb-2">
                        {props.views} • {props.timestamp}
                    </div>
                </div>

            </div>
        </div>
    );
}