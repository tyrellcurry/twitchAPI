function StreamComponent({ stream } : { stream: any }) {
  console.log(stream);
  return (
    <>
      <ol>
        {stream.map((stream: any) => (
          <li key={stream.id}>{stream.title}</li>
        ))}
      </ol>
    </>
  );
}

export default StreamComponent;
