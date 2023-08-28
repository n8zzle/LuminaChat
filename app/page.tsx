import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-screen h-screen">
      <div className="login-bg w-full h-full flex ">
        <div className=" flex my-auto mx-auto w-[90%] h-[90%] glassmorphism rounded-lg p-5">
          <div className="flex flex-col justify-center items-center h-full w-full space-y-5">
            <h1 className="text-4xl font-extrabold text-center ">
              Welcome to Lumina-Chat
            </h1>
            <p>Select contact, to start chatting !</p>
          </div>
        </div>
      </div>
    </main>
  );
}
