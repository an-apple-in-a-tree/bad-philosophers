import {
  Cinzel_Decorative,
  PT_Serif,
  Lora,
  Crimson_Text,
} from "next/font/google";
const cinzel = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const open = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const pt_serif = PT_Serif({ weight: "700", subsets: ["latin"] });
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 bg-[#F7F2E9] text-[#2B292B]">
      <div className="relative h-[500px] w-screen overflow-hidden rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 rounded-lg"></div>
        <img
          src="https://i.ytimg.com/vi/tG41PgCDhtY/maxresdefault.jpg"
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>
      <div>
        <div className="w-screen h-12 bg-gold"></div>
        <div className="flex items-center justify-center mt-32">
          <div className="h-2 w-[200px] bg-dim w-full mx-8 rounded-lg"></div>
          <span
            className={`${cinzel.className} font-bold text-center text-9xl mx-4`}
          >
            Bad Philosophers
          </span>
          <div className="h-2 w-[200px] bg-dim w-full mx-8 rounded-lg"></div>
        </div>
        <img
          src="https://www.pngmart.com/files/23/Gold-Swirl-PNG-Isolated-File.png"
          className="mx-auto my-12"
          style={{
            width: 800,
            height: 200,
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />

        <div className="w-screen h-12 bg-gold mb-24"></div>
        <p className={`${open.className} text-5xl my-16`}>
          Chat with chatbots representing abandoned philosophies...
        </p>
        <div className="flex w-full">
          <img
            src="https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="mr-8 h-[800px]"
          />

          <div className="h-96 w-full rounded-2xl bg-white mb-16">
            <p className="p-8 text-4xl">
              Where the wisdom of the past comes to life through engaging
              conversations with chatbots embodying the world's forgotten
              schools of thought.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
