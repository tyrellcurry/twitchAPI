import Image from "next/image";

function StreamComponent({ stream }: { stream: any }) {
    console.log(stream);
    return (
        <div>
            <div className="flex gap-5 w-fit m-auto">
                <div className=" max-w-[600px]">
                    {stream.slice(0, 3).map((stream: any, i: number) => {
                        if (i > 5) return;
                        return (
                            <>
                                <div key={stream.id}>
                                    <a
                                        href={`https://twitch.com/${stream.user_name}`}
                                        target="_blank">
                                        <div className="w-[600px] mt-2">
                                            <Image
                                                className="cursor-pointer rounded-t-xl"
                                                src={stream.thumbnail_url
                                                    .replace("{width}", "1920")
                                                    .replace(
                                                        "{height}",
                                                        "1080"
                                                    )}
                                                alt={stream.title}
                                                height={1080}
                                                width={1920}
                                            />
                                        </div>
                                    </a>
                                    <a
                                        href={`https://twitch.com/${stream.user_name}`}
                                        target="_blank">
                                        {" "}
                                        <h2 className="text-lg font-semibold text-slate-800 min-h-[8rem] flex items-center justify-center text-center bg-slate-400 rounded-b-xl px-8 py-4 hover:bg-slate-500 cursor-pointer">
                                            {stream.title}
                                        </h2>
                                    </a>
                                </div>
                            </>
                        );
                    })}
                </div>
                <div className=" max-w-[600px]">
                    {stream.slice(3, 6).map((stream: any, i: number) => {
                        if (i > 5) return;
                        return (
                            <>
                                <div key={stream.id}>
                                    <a
                                        href={`https://twitch.com/${stream.user_name}`}
                                        target="_blank">
                                        <div className="w-[600px] mt-2 rounded-xl">
                                            <Image
                                                className="cursor-pointer"
                                                src={stream.thumbnail_url
                                                    .replace("{width}", "1920")
                                                    .replace(
                                                        "{height}",
                                                        "1080"
                                                    )}
                                                alt={stream.title}
                                                height={1080}
                                                width={1920}
                                            />
                                        </div>
                                    </a>
                                    <a
                                        href={`https://twitch.com/${stream.user_name}`}
                                        target="_blank">
                                        {" "}
                                        <h2 className="text-lg font-semibold text-slate-800 min-h-[8rem] flex items-center justify-center text-center bg-slate-400 rounded-b-xl px-8 py-4 hover:bg-slate-500 cursor-pointer">
                                            {stream.title}
                                        </h2>
                                    </a>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default StreamComponent;
