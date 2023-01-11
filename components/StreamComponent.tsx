function StreamComponent({ streams } : { stream: any }) {
  console.log(streams);
  return (
    <>
      <ol>
        {streams.map((stream: any) => (
          <li key={stream.id}>{stream.title}</li>
        ))}
      </ol>
    </>
  );
}

export default StreamComponent;
