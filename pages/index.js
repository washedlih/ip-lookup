import Head from "next/head";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Card from "@/components/Card";
import Map from "@/components/Map";
import Alert from "@/components/Alert";

export default function Home() {
  const [ip, setIp] = useState("");
  const [data, setData] = useState({});
  const url = `https://api.techniknews.net/ipgeo/${ip}`;
  const [openToast, setOpenToast] = useState(false);
  const fetchIp = async (e) => {
    e.preventDefault();
    const response = await fetch(url);
    const data = await response.json();
    if (ip === "" || data.status === "fail") {
      setOpenToast(true);
      if (openToast) {
        setOpenToast(false);
        setTimeout(() => {
          setOpenToast(true);
        }, 350);
      }
      return;
    } else {
      setOpenToast(false);
    }
    setData(data);
    setIp("");
  };

  return (
    <>
      <Head>
        <title>IP Address Lookup</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-full absolute -z-20 h-screen bg-black"></div>
        <div className="flex justify-center items-center pt-8 text-3xl text-white font-bold">
          <h1>IP Address Lookup</h1>
        </div>
        <form
          onSubmit={fetchIp}
          className="flex justify-center items-center mt-6 max-w-xs md:max-w-xl mx-auto"
        >
          <input
            type="text"
            placeholder="Search for any IP address"
            className="p-4 rounded-xl rounded-r-none max-h-[57px] w-full border-r focus:outline-none text-lg"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          />
          <button className="p-4 bg-white rounded-r-xl max-h-[57px] max-w-[57px] w-full flex items-center hover:bg-[#f4f4f4] transition">
            <ChevronRight color="black" size={40} />
          </button>
        </form>
        <Alert open={openToast} setOpen={setOpenToast} />
        <Card data={data} />
        <Map data={data} />
      </main>
    </>
  );
}
