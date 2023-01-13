import Image from "next/image";

function StreamComponent({ stream }: { stream: any }) {
  console.log(stream);
  return (
    <>
      {stream.map((stream: any, i) => {
        if(i > 6) return;
        return (
          <div key={stream.id}>
          <h2>{stream.title}</h2>
          <div className="w-[600px]">
          <Image src={stream.thumbnail_url.replace('{width}', '1920').replace('{height}', '1080')} alt={stream.title} height={1080} width={1920}/>
          </div>
        </div>
        )
        })}
    </>
  )};

export default StreamComponent;
