import Head from "next/head";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useState, useEffect } from "react";
import { getStreams } from "./api/twitchApi";
import StreamComponent from '../components/StreamComponent';


export default function Home() {
  const [streams, setStreams] = useState([]);
  useEffect(() => {
    getStreams().then((data) => setStreams(data.data));
  }, []);

  return (
    <>
      <Head>
        <title>Twitch API Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-2xl font-bold text-slate-500">Hello world!</h1>
        <div>
          <h2>Streams</h2>
          <StreamComponent streams={streams} />
        </div>
      </main>
    </>
  );
}
